<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    //
    public function index()
    {
        //Notification are available to authenticated user --This can also be achieved through Model
        return response()->json( Auth::user()->unreadNotifications );
    }

    public function update(Request $request, $id)
    {
        $notification = Notification::findOrFail($id);
        //mark notification as read
        $data = $request->all();
        $data['read_at'] = now();
        $notification->update($data);
        return response()->json([
            'status' => true,
            'message' => "Notification Read Successfully!",
        ]);
    }
}
