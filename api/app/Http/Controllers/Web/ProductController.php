<?php

namespace App\Http\Controllers\Web;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductCreateRequest;
use App\Http\Requests\ProductUpdateRequest;

class ProductController extends Controller
{
    public function index()
    {

        return view('products.index', ['products' => Product::all()]);
    }

    public function showCreate()
    {
        return view('products.create');
    }

    public function showUpdate(Product $product)
    {
        return view('products.update', ['product' => $product]);
    }

    public function create(ProductCreateRequest $request)
    {
        $product = Product::create($request->only(['name', 'description','price']));

        if(!$product) {

            throw new \Exception('product create failed');
        }

        session()->flash('success','product created successfully');

        return redirect()->route('products.show.index');
    }

    public function update(Product $product, ProductUpdateRequest $request)
    {
        $product->name = $request->name ?? $product->name;
        $product->description = $request->description ?? $product->description;
        $product->price = $request->price ?? $product->price;
        $product->save();

        session()->flash('success','product updated successfully');

        return redirect()->route('products.show.index');

    }

}
