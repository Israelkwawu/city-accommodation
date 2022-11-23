<?php
namespace App\ListingSearch\Filters;

use Illuminate\Database\Eloquent\Builder;

class Name implements FilterInterface {

    public static function apply(Builder $builder, $value)
    {
        return $builder->whereFullText('name', $value);
    }
}