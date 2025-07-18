<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticlesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route untuk menampilkan laman beritax
Route::get('/activities/berita', [ArticlesController::class, 'berita'])->name('berita');

// Route untuk menampilkan laman detail berita
Route::get('/activities/detail-berita/{slug}', [ArticlesController::class, 'detail'])->name('detail-berita');

Route::get('/dashboard', function () {
    return view('dashboard');
});
