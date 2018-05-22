<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;


class Transaction extends Model
{   
    protected $fillable = ['transaction_type_id','amount', 'discount','client_id', 'product_id'];

    public function product()
    {
        return $this->belongsTo(Product::class,'product_id', 'id');
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
