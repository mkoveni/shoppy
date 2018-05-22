<?php

namespace App\Http\Controllers\Api;

use App\Models\Transaction;
use Illuminate\Http\Request;
use const App\TRANSACTION_TOPUP;
use App\Http\Controllers\Controller;
use App\Events\Client\TransactionMade;
use App\Repository\Interfaces\TransactionRepository;
use App\Http\Resources\Transaction\TransactionResource;
use App\Http\Requests\Transaction\CreateTransactionRequest;
use App\Repository\Implementation\Eloquent\Criteria\ForUser;
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
            'client_id' => $request->client_id,
            'amount' => $request->amount,
            'discount' => $request->discount ?? 0,
            'product_id' => $request->product_id ?? null
        ]);

        event(new TransactionMade($transaction));

        return new TransactionResource($transaction);
    }

    public function forType(int $id, Request $request) {

        $transactions = $this->repository
                    ->withCriteria(new ForUser($request->user(), 'client_id'))
                        ->findWhere('transaction_type_id', $id);

        return TransactionResource::collection($transactions);
    }

}