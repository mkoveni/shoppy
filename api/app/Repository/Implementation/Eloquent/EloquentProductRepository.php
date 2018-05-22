<?php

namespace App\Repository\Implementation\Eloquent;

use App\Models\Product;
use App\Repository\Interfaces\ProductRepository;


class EloquentProductRepository extends AbstractEloquentRepository implements ProductRepository
{
    protected function getClass()
    {
        return Product::class;
    }   
}