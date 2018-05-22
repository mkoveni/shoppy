<?php

namespace App\Repository\Criteria;

interface CriteriaInterface
{
    public function withCriteria(...$criteria);
}