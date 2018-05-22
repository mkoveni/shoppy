<?php

namespace App\Repository\Implementation\Eloquent;

use App\Models\TransactionType;
use App\Repository\Interfaces\TransactionTypeRepository;


class EloquentTransactionTypeRepository extends AbstractEloquentRepository
     implements TransactionTypeRepository
{
    protected function getClass()
    {
        return TransactionType::class;
    }
}