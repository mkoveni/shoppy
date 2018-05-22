<?php

namespace App\Http\Controllers\Api;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginFormRequest;
use App\Http\Resources\Client\ClientResource;
use App\Http\Requests\Client\CreateClientRequest;
use App\Repository\Interfaces\ClientRepository;

class AuthController extends Controller
{
    /**
     * client repository instance
     *
     * @var ClientRepository
     */
    protected $repository;

    public function __construct(ClientRepository $repository)
    {
        $this->repository = $repository;
    }

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
        $client = $this->repository->create([
            'first_name' =>$request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => bcrypt($request->password)   
        ]);

        if($token = $this->generateToken($request->only(['email', 'password']))) {

            return $this->resource($token);            
        }

        
    }


    public function emailExists(string $email) {

        $client = $this->repository->findFirst('email', $email);

        if($client) {

            return response()->json(['status' => 422], 200);
        }

        return response()->json(['status' => 200], 200);
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