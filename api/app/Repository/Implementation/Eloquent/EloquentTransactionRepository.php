<?php

namespace App\Repository\Implementation\Eloquent;

use App\Models\Transaction;
use App\Repository\Interfaces\TransactionRepository;


class EloquentTransactionRepository extends AbstractEloquentRepository
     implements TransactionRepository
{
    protected function getClass()
    {
        return Transaction::class;
    }
}