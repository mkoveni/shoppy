<?php

namespace App\Http\Controllers\Api;

use App\Models\Transaction;
use const App\TRANSACTION_TOPUP;
use App\Http\Controllers\Controller;
use App\Events\Client\TransactionMade;
use App\Repository\Interfaces\TransactionRepository;
use App\Http\Resources\Transaction\TransactionResource;
use App\Http\Requests\Transaction\CreateTransactionRequest;
use App\Repository\Implementation\Eloquent\Criteria\EagerLoad;
use App\Http\Resources\Transaction\TransactionCollectionResource;


class TransactionController extends Controller
{
    /**
     * Transaction Repository instance
     *
     * @var TransactionRepository
     */
    protected $repository;


    public function __construct(TransactionRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $transactions = $this->repository
                                ->withCriteria(new EagerLoad('product'))
                                ->all();
        
        return new TransactionCollectionResource($transactions);

    }

    public function show(int $id)
    {
        $transaction = $this->repository->withCriteria(new EagerLoad('product'))->find($id);

        return new TransactionResource($transaction);
    }


    public function store(CreateTransactionRequest $request)
    {
        $this->authorize('update', $request->user());

        $transaction = $this->repository->create([
            'transaction_type_id' => $request->transaction_type_id,
            'client_id' => $request->user()->id,
            'amount' => $request->amount
        ]);

        event(new TransactionMade($transaction));

        return new TransactionResource($transaction);
    }

}