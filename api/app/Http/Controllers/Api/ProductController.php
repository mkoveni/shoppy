<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Http\Resources\Product\ProductResource;
use App\Repository\Interfaces\ProductRepository;
use App\Repository\Implementation\Eloquent\Criteria\EagerLoad;

class ProductController extends Controller
{
    /**
     * Product repository instance
     *
     * @var ProductRepository
     */
    protected $repository;

    public function __construct(ProductRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $products = $this->repository->all();

        return ProductResource::collection($products);
    }

    public function show(int $id)
    {
        $product = $this->repository->withCriteria(new EagerLoad([
            'transactions.client'
        ]))->find($id);

        return new ProductResource($product);
    }

    
}
