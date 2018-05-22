<?php

namespace App\Http\Controllers\Api;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginFormRequest;
use App\Http\Resources\Client\ClientResource;
use App\Http\Requests\Client\CreateClientRequest;

class AuthController extends Controller
{
    public function authenticate(LoginFormRequest $request)
    {
      if($token = $this->generateToken($request->only(['email', 'password'])))
      {
          return $this->resource($token);
      }

      return abort(401, 'Could not authenticated your with');
    }

    public function register(CreateClientRequest $request)
    {
        $client = Client::create([
            'first_name' =>$request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => bcrypt($request->password)   
        ]);

        if($token = $this->generateToken($request->only(['email', 'password']))) {

            return $this->resource($token);            
        }

        
    }



    protected function guard()
    {
        return Auth::guard('client');
    }

    protected function generateToken(array $props)
    {
        $token = $this->guard()->attempt($props);

        return $token;
    }

    protected function resource($token)
    {
        return (new ClientResource($this->guard()->user()))
            ->additional([
                'meta' => [
                    'token' => $token
                ]
            ]);
    }

    public function user(Request $request)
    {
        return new ClientResource($request->user());
    }

    public function logout()
    {
        return $this->guard()->logout();
    }
}