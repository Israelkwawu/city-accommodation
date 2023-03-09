<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAttributeRequest ;
use Illuminate\Http\Request;
use App\Models\PropertyAttribute;

class PropertyAttributeController extends Controller
{
    //
    public function index()
    {
        //   
        return response()->json(PropertyAttribute::get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAttributeRequest $request)
    {
    
        try {
        
            $propertyAttribute = PropertyAttribute::create($request->all());
    
            return response()->json([
                'status' => true,
                'message' => "Property Attribute Created Successfully!",
                'propertyAttribute' => $propertyAttribute
            ], 200);
        
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

}
