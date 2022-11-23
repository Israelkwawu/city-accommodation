<?php
namespace App\ListingSearch\Filters;

use Illuminate\Database\Eloquent\Builder;

class Price implements FilterInterface {

    public static function apply(Builder $builder, $value)
    {
        // $value = '100,150'
        list($min, $max) = explode(",", $value);
        return $builder->where('price', '>=', $min)->where('price', '<=', $max);
    }
}