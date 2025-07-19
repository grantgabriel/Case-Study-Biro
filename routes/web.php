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

// Redirect agar langsung ke login yess
Route::redirect('/', '/login');

// Route untuk menampilkan laman beritax
Route::get('/activities/berita', [ArticlesController::class, 'berita'])->name('berita');

// Route untuk menampilkan laman detail berita
Route::get('/activities/detail-berita/{slug}', [ArticlesController::class, 'detail'])->name('detail-berita');

// Route dashboard buat add, edit & delete berita
Route::get('/dashboard', [ArticlesController::class, 'dashboard'])->name('dashboard');
Route::get('/dashboard/action/add-berita/', [ArticlesController::class, 'addBerita'])->name('add-berita');
Route::get('/dashboard/action/delete-berita/{id}', [ArticlesController::class, 'deleteBerita'])->name('delete-berita');
Route::get('/dashboard/action/edit-berita/{id}', [ArticlesController::class, 'editBerita'])->name('edit-berita');
