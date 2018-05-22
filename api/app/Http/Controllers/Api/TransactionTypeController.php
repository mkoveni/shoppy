<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repository\Interfaces\TransactionTypeRepository;
use App\Http\Resources\Transaction\TransactionTypeResource;
use App\Repository\Implementation\Eloquent\Criteria\IsTopup;
use App\Repository\Implementation\Eloquent\Criteria\IsPurchase;

class TransactionTypeController extends Controller
{
    /**
     * Transaction type repository
     *
     * @var TransactionTypeRepository
     */
    protected $repository;

    public function __construct(TransactionTypeRepository $repository)
    {
        $this->repository = $repository;
    }
    public function index()
    {
        $types = $this->repository->all();

        return new TransactionTypeResource($types);
    }

    public function purchase() {

        $type = $this->repository->withCriteria(new IsPurchase)->single();

        return new TransactionTypeResource($type);
    }

    public function topup() {

        $type = $this->repository->withCriteria(new IsTopup)->single();

        return new TransactionTypeResource($type);
    }
}
