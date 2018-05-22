<?php

namespace App\Repository\Criteria;

interface CriterionInterface
{
    public function apply($entity);
}