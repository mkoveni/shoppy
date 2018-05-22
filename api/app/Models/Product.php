<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use const App\{DISCOUNT_LEVEL_1, DISCOUNT_LEVEL_2};

class Product extends Model
{
    
    protected $fillable = ['name', 'description', 'price'];

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function getDiscountAmount()
    {
        $price = $this->price;

        $discount = 0;

        if($price <= 112) {

            $discount = $price * DISCOUNT_LEVEL_1;
        }

        if($price >112) {

            $discount = $price * DISCOUNT_LEVEL_2;
        }


        return $discount;
    }
}
