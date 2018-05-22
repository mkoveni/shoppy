<?php

namespace App\Repository\Implementation\Eloquent;

use App\Models\Client;
use App\Repository\Interfaces\ClientRepository;


class EloquentClientRepository extends AbstractEloquentRepository implements ClientRepository
{

    public function createTransaction($clientId, array $data)
    {
        return $this->find($clientId)->transactions()->create($data);
    }
    
    public function addFunds($clientId, $amount)
    {
        $client = $this->find($clientId);
        
        $client->credit = $client->credit + $amount;

        $client->save();
    }

    public function deductFunds($clientId, $amount)
    {
        $client = $this->find($clientId);
        
        $client->credit = $client->credit - $amount;

        $client->save();
    }

    protected function getClass()
    {
        return Client::class;
    }
}