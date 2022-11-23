<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Create Admin
     * @param Request $request
     * @return Admin
    */
    public function createAdmin(Request $request)
    {
        try {
            //code...
            $messages = [
                'name.required' => 'Please your name is required!',
                'email.required' => 'Please your email address is required!',
                'email.email' => 'Please enter a valid email address!',
                'email.unique' => 'Please enter a unique email address!',
                'password.required' => 'Please your password is required!',
                'password.min' => 'Please your password should contain minimum of 6 characters!',
                'password.alpha_num' => 'Please your password should contain alpha-numeric characters!',
                'password.confirmed' => 'Please your selected password do not match!'
            ];
    
            $validateAdmin = Validator::make(
                $request->all(),
                [
                    'name' => 'required',
                    'email' => 'required|email|unique:admins,email',
                    'password' => 'required|min:6|alpha_num|confirmed'
                ] ,
                $messages
            );
    
            if($validateAdmin->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateAdmin->errors()
                ], 401);
            }

            $admin = Admin::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password) 
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Admin Created Successfully',
                // 'token' => $admin->createToken("API TOKEN")->plainTextToken
            ], 200);
            
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
     
    }

    public function loginAdmin(Request $request) {
        try {
            //code...
            $messages = [
                'email.required' => 'Please your email address is required!',
                'email.email' => 'Please enter a valid email address!',
                'password.required' => 'Please your password is required!',
            ];
    
            $validateAdmin = Validator::make(
                $request->all(),
                [
                    'email' => 'required|email',
                    'password' => 'required'
                ] ,
                $messages
            );

            if (!Auth::guard('admin')->attempt($request->only(['email', 'password']))) {
                # code...
                return response()->json([
                    'status' => false,
                    'message' => 'Email and Password does not match with our record.',
                ], 401);
            }

            $admin = Admin::where('email', $request->email)->first();
            
            return response()->json([
                'status' => true,
                'message' => 'Admin Logged In Successfully',
                'token' => $admin->createToken("API TOKEN")->plainTextToken
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }
}
