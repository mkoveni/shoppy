<?php

namespace App\Repository\Implementation\Eloquent;

use App\Repository\Interfaces\Repository;
use App\Repository\Criteria\CriteriaInterface;

abstract class AbstractEloquentRepository implements Repository, CriteriaInterface
{
    protected $entity;

    public function __construct()
    {
        $this->entity = $this->resolveEntity();
    }

    public function create(array $data)
    {
        return $this->entity->create($data);
    }

    public function update($id, array $data)
    {
        return $this->find($id)->update($data);
    }

    public function delete($id)
    {
        return $this->find($id)->delete();
    }

    public function single()
    {
        return $this->entity->first();
    }

    public function find($id) {

        return $this->entity->findOrFail($id);
    }

    public function findWhere($field, $value)
    {
        return $this->entity->where($field, $value)->get();
    }

    public function findFirst($field, $value)
    {
        return $this->entity->where($field, $value)->first();
    }

    public function all()
    {
        return $this->entity->get();
    }

    protected function resolveEntity()
    {
        return app()->make($this->getClass());
    }

    public function withCriteria(...$criteria)
    {
        $criteria = array_flatten($criteria);

        foreach($criteria as $criterion)
        {
            $this->entity = $criterion->apply($this->entity);
        }

        return $this;
    }

    abstract protected function getClass();
}