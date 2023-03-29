<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Listing;
use App\Models\Admin;

class DashboardController extends Controller
{
    //
    public function index() {
        $countListings = Listing::count();
        $countAgents = Admin::count();
        $countActiveListing = Listing::where('active', 1)->count();
        $countApprovedListing = Listing::where('approved', 1)->count();

        return response()->json(compact('countListings', 'countAgents', 'countActiveListing', 'countApprovedListing'));
    }
}
