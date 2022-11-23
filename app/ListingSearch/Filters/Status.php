<?php
namespace App\ListingSearch\Filters;

use Illuminate\Database\Eloquent\Builder;

class Status implements FilterInterface {

    public static function apply(Builder $builder, $value)
    {
        return $builder->where('status', $value);
    }
}