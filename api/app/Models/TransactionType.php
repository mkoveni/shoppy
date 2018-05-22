<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use const App\TRANSACTION_PURCHASE;
use const App\TRANSACTION_TOPUP;

class TransactionType extends Model
{
    protected $fillable = ['type'];


    public function scopeIsPurchase(Builder $query)
    {
        return $query->where('type',TRANSACTION_PURCHASE);
    }

    public function scopeIsTopup(Builder $query)
    {
        return $query->where('type',TRANSACTION_TOPUP);
    }
}
