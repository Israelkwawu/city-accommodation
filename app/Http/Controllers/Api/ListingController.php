<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreListingRequest;
use App\Models\Listing;
use Illuminate\Http\Request;

class ListingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //   
        return response()->json(Listing::paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreListingRequest $request)
    {
       
        try {
          
            $listing = Listing::create($request->all());
    
            return response()->json([
                'status' => true,
                'message' => "Listing Created Successfully!",
                'listing' => $listing,
            ], 200);
        
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return Listing::findOrFail($id);   
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreListingRequest $request, $id)
    {
        //
        $listing = Listing::findOrFail($id);
        $listing->update($request->all());

        return response()->json([
            'status' => true,
            'message' => "Listing Updated Successfully!",
            'listing' => $listing,
        ], 200);
    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $listing = Listing::findOrFail($id);
        // var_dump($listing->delete());
        $listing->delete();

        return response()->json([
            'status' => true,
            'message' => "Listing Deleted Successfully!"
        ]);
     
        
    }
}
