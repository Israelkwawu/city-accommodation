<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    //
    public function index()
    {
        //Notification are available to authenticated user --This can also be achieved through Model
        return response()->json( Auth::user()->notifications );
    }

    public function update(Request $request, $id)
    {
        $request->markAsRead();
        //mark notification as read
        return response()->json([
            'status' => true,
            'message' => "Notification Read Successfully!",
        ]);
    }
}
