<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Notification;
use App\Http\Requests\StoreListingRequest;
use App\Http\Requests\UpdateListingRequest;
use App\Models\Admin;
use App\Notifications\ListingCreated;
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
        try {
            //code...
            $this->authorize('viewAny', Listing::class);
            return response()->json(Listing::where('approved','=',true)->paginate());
        } catch (\Throwable $th) {
            //throw $th;
            return ['status' => false,'message'=>$th->getMessage()];
        }

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

            $this->authorize('create', Listing::class);
            $listing = Listing::create($request->all());

            $adminAndMangerToNotify = Admin::whereIn('role',['admin', 'manager'])->get();
            $data = [
                'listing_id' => $listing->id,
                'title' => 'Listing Created',
                'message' => 'The Listing "'.$listing->name.'" needs your review and approval.',
            ];
            Notification::send($adminAndMangerToNotify, new ListingCreated($data));
    
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
        try {
            $listing = Listing::findOrFail($id);
            $this->authorize('view', $listing);
            return $listing;
        } catch (\Throwable $th) {
            //throw $th;
            return ['status' => false,'message'=>$th->getMessage()];
        }
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateListingRequest $request, $id)
    {
        //
        try {
            //code...
            $listing = Listing::findOrFail($id);
            $this->authorize('update', $listing);
            $listing->update($request->all());

            return response()->json([
                'status' => true,
                'message' => "Listing Updated Successfully!",
                'listing' => $listing,
            ], 200);
        } catch (\Throwable $th) {
            //throw $th;
            return ['status' => false,'message'=>$th->getMessage()];
        }      
    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            //code...
            $listing = Listing::findOrFail($id);
            $this->authorize('delete', $listing);
            $listing->delete();

            return response()->json([
                'status' => true,
                'message' => "Listing Deleted Successfully!"
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return ['status' => false,'message'=>$th->getMessage()];
        }
        
        
    }
}
