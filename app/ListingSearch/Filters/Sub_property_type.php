<?php
namespace App\ListingSearch\Filters;

use Illuminate\Database\Eloquent\Builder;

class Sub_property_type implements FilterInterface {

    public static function apply(Builder $builder, $value)
    {
        return $builder->where('sub_property_type', $value);
    }
}