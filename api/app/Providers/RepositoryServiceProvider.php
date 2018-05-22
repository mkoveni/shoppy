<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repository\Interfaces\{
    ClientRepository,ProductRepository,TransactionRepository,TransactionTypeRepository};
use App\Repository\Implementation\Eloquent\{
    EloquentClientRepository,EloquentProductRepository,
    EloquentTransactionRepository, EloquentTransactionTypeRepository};


class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        app()->bind(ClientRepository::class, EloquentClientRepository::class);
        app()->bind(TransactionRepository::class, EloquentTransactionRepository::class);
        app()->bind(TransactionTypeRepository::class, EloquentTransactionTypeRepository::class);
        app()->bind(ProductRepository::class, EloquentProductRepository::class);
    }
}
