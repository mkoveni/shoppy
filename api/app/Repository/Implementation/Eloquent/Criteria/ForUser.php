<?php

namespace App\Repository\Implementation\Eloquent\Criteria;

use App\Repository\Criteria\CriterionInterface;


class ForUser implements CriterionInterface
{
    protected $user;
    protected $field;

    public function __construct($user, $field)
    {
        $this->user = $user;
        $this->field = $field;
    }

    public function apply($entity)
    {
        return $entity->where($this->field, $this->user->id);
    }
}