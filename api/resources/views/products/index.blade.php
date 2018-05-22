@extends('layouts.admin') @section('admin-content')
<div class="card">
    <div class="card-header bg-light">Product list</div>

    <div class="card-body">
        <table class="table">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</td>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                @if($products->count())
                    @foreach($products as $product)
                        <tr>
                            <td>{{ $product->name }}</td>
                            <td>R{{ number_format($product->price, 2) }}</td>
                            <td><a href="{{ route('products.show.update', ['product'=> $product->id]) }}">Update</a>
                                 | delete</td>
                        </tr>
                    @endforeach
                @endif
            </tbody>
        </table>
    </div>
</div>
@endsection