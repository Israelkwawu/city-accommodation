<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Admin;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Admin::create([
            "name" => "Israel",
            "email"=> "israel.kwawu@amalitech.com",
            "password"=> Hash::make("1a2s3d4f5g6h"),
            "role"=> "admin",
            "approved" => true,
        ]);
    }
}
