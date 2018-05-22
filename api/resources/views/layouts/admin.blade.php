@extends('layouts.app') @section('content')
<div class="container">
  <div class="row">
    <div class="col-4">
      <ul class="list-group">
        <a href="#" class="list-group-item">
          <h4 class="list-group-item-heading">Manage Products</h4>
          <p class="list-group-item-text">add new product, view products</p>
        </a>
        <li class="list-group-item">
          <a href="{{ route('products.create') }}">Add Product</a>
        </li>
        <li class="list-group-item">
          <a href="{{ route('products.show.index') }}">Product List</a>
        </li>
      </ul>
    </div>

    <div class="col-8">
      @yield('admin-content')
    </div>
  </div>
</div>
@endsection