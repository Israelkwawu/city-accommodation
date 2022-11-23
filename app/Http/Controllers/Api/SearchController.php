<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ListingSearch\ListingSearch;

class SearchController extends Controller
{
    //
    public function filter(Request $request) {
        return ListingSearch::apply($request);
    }
}
