<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use Illuminate\Database\Connectors\PostgresConnector;

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

// Route::get('/', function () {
//     sleep(1);
//     return Inertia::render('Home', ['name'=> 'Sajjad'] );
// });

// Route::get('/about', function () {
//     return inertia('About/About');
// });

Route::resource('posts', PostController::class)->except('index');
Route::get('/', [PostController::class, 'index'])->name('home');