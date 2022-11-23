<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ImageUploadRequest;
use App\Models\Listing;
use Illuminate\Http\Request;

class ImageUploadController extends Controller
{
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ImageUploadRequest $request)
    {
            
        $listing = Listing::findOrFail($request->id);

        try {
            //code...
            $uploadedFileUrl = cloudinary()->upload($request->file('image')->getRealPath())->getSecurePath();
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
        $gallery = null;
        if(!$listing->gallery) {    
            $listing->gallery = [$uploadedFileUrl];
        }else {
            $gallery = json_decode($listing->gallery);
            $gallery[] = $uploadedFileUrl;
            $listing->gallery = $gallery;       
        }
        
        $listing->save();
        return response()->json([
            'status' => true,
            'message' => "Image Uploaded Successfully!",
            'listing' => $listing,
        ], 200);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Listing::findOrFail($id);
    }
}
