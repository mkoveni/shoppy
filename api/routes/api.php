<?php

use Illuminate\Http\Request;


Route::post('/auth/register', 'Api\\AuthController@register')->name('signup');
Route::post('/auth/login', 'Api\\AuthController@authenticate')->name('signin');
Route::get('/auth/validate/email/{email}', 'Api\\AuthController@emailExists');

Route::get('/products/index', 'Api\\ProductController@index');

Route::group(['namespace' => 'Api','middleware' => ['auth:client']], function(){

    Route::get('/client', 'ClientController@show');
    

    Route::group(['prefix' => 'transactions'], function(){
        
        Route::get('/show/{id}', 'TransactionController@show');

        Route::get('/index', 'TransactionController@index');
        Route::get('/type/{id}', 'TransactionController@forType');

        Route::post('/store', 'TransactionController@store');
    });

    Route::group(['prefix' => 'transaction_types'], function(){

        Route::get('/index', 'TransactionTypeController@index');
        Route::get('/purchase', 'TransactionTypeController@purchase');
        Route::get('/topup', 'TransactionTypeController@topup');
        
    });


    Route::group(['prefix' => 'products'], function(){
        
        Route::get('/{id}', 'ProductController@show');
    });



    Route::post('/auth/logout', 'AuthController@logout');
    
});