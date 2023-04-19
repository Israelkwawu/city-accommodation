<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Notification;
use App\Http\Requests\ContactUsRequest;
use App\Notifications\ContactUs;
use Illuminate\Http\Request;
use App\Models\Admin;

class ContactUsController extends Controller
{
    //
    public function sendMail(ContactUsRequest $request) {
        try {
            //code...
            $adminAndMangerToNotify = Admin::whereIn('role',['admin', 'manager'])->get();
            $data = $request->all();
            Notification::send($adminAndMangerToNotify, new ContactUs($data));
    
            return response()->json([
                'status' => true,
                'message' => "Your Enquiry was sent Successfully!",
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }
}
