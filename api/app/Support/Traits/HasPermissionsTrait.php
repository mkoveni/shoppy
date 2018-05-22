<?php

namespace App\Support\Traits;

use App\Models\Role;
use App\Models\Permission;

trait HasPermissionsTrait
{

    public function hasRole(...$roles)
    {
        foreach($roles as $role)
        {
            if($this->roles->contains('name',$role)){
                return true;
            }
        }

        return false;
    }


    protected function hasPermission($permission)
    {
        return (bool) $this->permissions->where('name', $permission->name)->count();
    }

    public function hasPermissionTo($permission) {

        return $this->hasPermissionThroughRole($permission) || $this->hasPermission($permission);
    }

    protected function hasPermissionThroughRole($permission)
    {
        $roles = $permission->roles->map(function($role) {
            return $role->name;
        });

        return $this->hasRole($roles->values());
    }

    public function givePermissionTo(...$permissions)
    {
        dd($permissions);
        $permissions = $this->getPermissions(array_flatten($permissions));

        if($permissions === null) {
            return $this;
        }


        $this->permissions()->saveMany($permissions);

    }

    public function revokePermissions(...$permissions)
    {
        $permissions = $this->getPermissions(array_flatten($permissions));

        $this->permissions()->detach($permissions);

        return $this;
    }

    public function updatePermissions(...$permissions) {
        $permissions = $this->getPermissions(array_flatten($permissions));

        $this->permissions()->detach();

        $this->givePermissionTo($permissions);

        return $this;
    }

    protected function getPermissions(array $permissions)
    {
        return $this->permissions->whereIn('name', $permissions);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'roles_users');
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'permissions_users');
    }
}