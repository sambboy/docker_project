<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\CategorieController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

 Route::resource('user', UserController::class);
 Route::post('user/login', [UserController::class,'CheckUSer']);
 Route::resource('produit',ProduitController::class);
 Route::resource('categorie',CategorieController::class);
 Route::get('product/limit',[ProduitController::class,'ProductLimit']);


 

