<?php


namespace App\Repository\Implementation\Eloquent\Criteria;

use App\Repository\Criteria\CriterionInterface;


class EagerLoad implements CriterionInterface
{
    protected $relations;
    
    public function __construct(...$relations)
    {
        $this->relations = array_flatten($relations);    
    }
    public function apply($entity)
    {
        return $entity->with($this->relations);
    }
}