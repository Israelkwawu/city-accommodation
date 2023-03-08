<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

/*
* All other routes should be handed over to vue router
*/


Route::get('-/{any}', function () {
    return view('layouts.admin.app');
})->whereIn('any', ['login', 'register', 'reset']);

Route::get('super/{any?}', function () {
    return view('layouts.admin.app');
})->where('any', '.*');

Route::get('{any}', function () {
    return view('layouts.users.app');
})->where('any', '.*');