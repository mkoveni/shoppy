<?php

use Illuminate\Http\Request;


Route::group(['namespace' => 'Web'], function(){
    
    Route::group(['middleware' => ['guest']], function() {

        Route::get('/login', 'AuthController@login')->name('login');

        Route::post('/authenticate', 'AuthController@authenticate')->name('authenticate');
    });

    


    Route::group(['middleware' => 'auth:admin'],function(){

        Route::post('/logout', 'AuthController@logout')->name('logout');

        Route::get('/', 'AdminController@index')->name('admin.dashboard');

        Route::get('/products', 'ProductController@index')->name('products.show.index');

        Route::get('/products/update/{product}', 'ProductController@showUpdate')->name('products.show.update');

        Route::get('/products/create', 'ProductController@showCreate')->name('products.show.create');

        Route::post('//products/update/{product}', 'ProductController@update')->name('products.update');

        Route::post('/products/create', 'ProductController@create')->name('products.create');

        

        

    });

   
    
});

Route::get('/topup', 'Api\TransactionTypeController@topup');