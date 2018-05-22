@extends('layouts.admin') @section('admin-content')
<div class="card">
    <div class="card-header bg-light">Dashboard</div>

    <div class="card-body">
        <p>Welcome <strong>{{ auth()->user()->name }}!</strong></p>
    </div>
</div>
@endsection