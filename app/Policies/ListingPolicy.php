<?php

namespace App\Policies;

use App\Models\Listing;
use App\Models\Admin;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class ListingPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(Admin $admin)
    {
        //Could just return true without Response :)
        return true ? Response::allow()
        : Response::deny('You do not have permission to view this page.');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Listing  $listing
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(Admin $admin, Listing $listing)
    {
        //
        return true ? Response::allow()
        : Response::deny('You do not have permission to view this listing.');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(Admin $admin)
    {
        //
        return true  ? Response::allow()
        : Response::deny('You do not have permission to create listing.');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Listing  $listing
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(Admin $admin, Listing $listing)
    {
        //
        return in_array($admin->role,['admin','manager']) ? Response::allow()
        : Response::deny('You do not have permission to edit this listing. Contact your Manager.');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Listing  $listing
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(Admin $admin, Listing $listing)
    {
        //
        return in_array($admin->role,['admin','manager']) ? Response::allow()
        : Response::deny('You do not have permission to delete this listing.');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Listing  $listing
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(Admin $admin, Listing $listing)
    {
        //
        return $admin->role == "admin" ? Response::allow()
        : Response::deny('You do not have permission to restore this listing.');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Listing  $listing
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(Admin $admin, Listing $listing)
    {
        //
        return $admin->role == "admin" ? Response::allow()
        : Response::deny('You do not have permission to delete this listing.');
    }
}
