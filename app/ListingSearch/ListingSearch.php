<?php
namespace App\ListingSearch;

use App\Models\Listing;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class ListingSearch {
    // https://m.dotdev.co/writing-advanced-eloquent-search-query-filters-de8b6c2598db
    public static function apply(Request $filters) {
        $query =  static::applyDecoratorsFromRequest( $filters, (new Listing())->newQuery());

        return static::getResults($query);
    }

    private static function applyDecoratorsFromRequest(Request $request, Builder $query)
    {
        foreach ($request->all() as $filterName => $value) {

            $decorator = static::createFilterDecorator($filterName);

            if (static::isValidDecorator($decorator)) {
                $query = $decorator::apply($query, $value);
            }

        }
        return $query;
    }
    
    private static function createFilterDecorator($name)
    {
        return __NAMESPACE__ . '\\Filters\\' .  str_replace(' ', '',  ucwords(str_replace('_', ' ', $name)));
    }
    
    private static function isValidDecorator($decorator)
    {
        return class_exists($decorator);
    }

    private static function getResults(Builder $query)
    {
        return $query->cursorPaginate(51);
    }

}