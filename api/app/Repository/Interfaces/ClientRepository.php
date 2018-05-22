<?php

namespace App\Repository\Interfaces;

use App\Repository\Interfaces\Repository;


interface ClientRepository extends Repository
{
    public function deductFunds($clientId, $amount);

    public function addFunds($clientId, $amount);
}