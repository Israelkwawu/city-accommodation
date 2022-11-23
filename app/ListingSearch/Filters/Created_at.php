<?php
namespace App\ListingSearch\Filters;

use Illuminate\Database\Eloquent\Builder;

class Created_at implements FilterInterface {

    public static function apply(Builder $builder, $value)
    {
        // $value = '2020-04-15,2020-04-30'
        list($start_date, $end_date) = explode(",", $value);
        return $builder->whereDate('created_at', '>=', Carbon::createFromFormat('Y-m-d', $start_date)->startOfDay())->whereDate('created_at', '<=', Carbon::createFromFormat('Y-m-d', $end_date)->endOfDay()); 
        // return $builder->whereBetween('created_at', [ Carbon::createFromFormat('Y-m-d', $start_date)->startOfDay(), Carbon::createFromFormat('Y-m-d', $end_date)->endOfDay() ]); 
    }
}