<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Client\ClientResource;
use App\Repository\Interfaces\ClientRepository;
use App\Repository\Implementation\Eloquent\Criteria\EagerLoad;



class ClientController extends Controller
{
    /**
     * client repository instance
     *
     * @var ClientRepository
     */
    protected $clientRepository;


    public function __construct(ClientRepository $clientRepository)
    {
        $this->clientRepository = $clientRepository; 
    }

   
    public function show(Request $request) {

        $client  = $this->clientRepository
                        ->find($request->user()->id);
        
        return new ClientResource($client);

    }

    public function findByEmail(string $email) {

        $client = $this->clientRepository->findFirst('email', $email);

        return new ClientResource($client);
    }

}