<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ImageUploadController;
use App\Http\Controllers\Api\ListingController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\PropertyListController;
use App\Http\Controllers\Api\PropertyTypeController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/auth/register', [AuthController::class, 'createAdmin']);
Route::post('/auth/login', [AuthController::class, 'loginAdmin']);



Route::middleware(['auth:sanctum'])->group(function () {
  Route::apiResource('listings', ListingController::class);
  Route::apiResource('image', ImageUploadController::class);
});

Route::post('/search', [SearchController::class, 'filter']);
Route::get('/countries', [CountryController::class, 'index']);
Route::get('/property_types', [PropertyTypeController::class, 'index']);
Route::get('/property_list', [PropertyListController::class, 'index']);