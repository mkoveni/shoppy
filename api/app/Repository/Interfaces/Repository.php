<?php

namespace App\Repository\Interfaces;

interface Repository
{
    public function create(array $data);
    
    public function update($id,array $data);

    public function delete($id);


    public function find($id);

    public function single();
    
    public function all();

    public function findWhere($field, $value);

    public function findFirst($field, $value);
    
}