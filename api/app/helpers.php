<?php

use Illuminate\Support\Facades\Auth;

if(!function_exists('clients'))
{
    function clients()
    {
        return Auth::guard('client');
    }
}