<?php
namespace App\ListingSearch\Filters;

use Illuminate\Database\Eloquent\Builder;

class Property_type implements FilterInterface {

    public static function apply(Builder $builder, $value)
    {
        return $builder->where('property_type', $value);
    }
}