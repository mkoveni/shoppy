<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use const App\{DISCOUNT_LEVEL_1, DISCOUNT_LEVEL_2, DISCOUNT_LEVEL_3};

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

        if($price >= 50 && $price <= 100) {

            $discount = $price * DISCOUNT_LEVEL_1;
        }

        if($price >112 && $price<= 115) {

            $discount = $price * DISCOUNT_LEVEL_2;
        }

        if($price >120) {

            $discount = $price * DISCOUNT_LEVEL_3;
        }


        return $discount;
    }
}
