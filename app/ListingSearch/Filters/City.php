<?php
namespace App\ListingSearch\Filters;

use Illuminate\Database\Eloquent\Builder;

class City implements FilterInterface {

    public static function apply(Builder $builder, $value)
    {
        return $builder->where('city', $value); 
    }
}