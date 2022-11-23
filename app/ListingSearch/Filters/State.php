<?php
namespace App\ListingSearch\Filters;

use Illuminate\Database\Eloquent\Builder;

class State implements FilterInterface {

    public static function apply(Builder $builder, $value)
    {
        return $builder->where('state', $value); 
    }
}