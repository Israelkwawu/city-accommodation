<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Listing;
use Illuminate\Http\Request;


class PropertyListController extends Controller
{
    public function index()
    { 
        return response()->json(Listing::cursorPaginate(6));
    }
}
