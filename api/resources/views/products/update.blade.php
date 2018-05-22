@extends('layouts.admin') @section('admin-content')
<div class="card">
    <div class="card-header bg-light">Product Update</div>

    <div class="card-body">
        <form method="POST" action="{{ route('products.update', ['product' => $product->id]) }}">
            @csrf
            <div class="form-group">
                <label for="name">Product Name</label>
                <input type="text" class="form-control {{ $errors->has('name') ? 'is-invalid': '' }}" name="name" id="name" value="{{ old('name') ?? $product->name }}">
                @if($errors->has('name'))
                <small class="form-text text-danger">{{ $errors->first('name') }}</small>
                @endif
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea name="description" id="description" class="form-control {{ $errors->has('description') ? 'is-invalid': '' }}">{{ old('description') ?? $product->description }}</textarea>
                @if($errors->has('description'))
                <small class="form-text text-danger">{{ $errors->first('description') }}</small>
                @endif
            </div>

            <div class="form-group">
                <label for="name">Price</label>
                <input type="text" value="{{ old('price') ?? $product->price }}" class="form-control {{ $errors->has('price') ? 'is-invalid': '' }}" name="price" id="price"> 
                @if($errors->has('price'))
                <small class="form-text text-danger">{{ $errors->first('price') }}</small>
                @endif
            </div>

            <button class="btn btn-light">Update</button>
        </form>
    </div>
</div>
@endsection