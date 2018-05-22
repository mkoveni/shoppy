<?php


namespace App\Repository\Implementation\Eloquent\Criteria;

use App\Repository\Criteria\CriterionInterface;


class IsPurchase implements CriterionInterface
{

    public function apply($entity)
    {
        return $entity->isPurchase();
    }
}