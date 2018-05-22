<?php


namespace App\Repository\Implementation\Eloquent\Criteria;

use App\Repository\Criteria\CriterionInterface;


class IsTopup implements CriterionInterface
{

    public function apply($entity)
    {
        return $entity->isTopup();
    }
}