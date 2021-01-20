<?php

use App\Http\Controllers\RestaurantController;
use Illuminate\Support\Facades\Route;

Route::get('/restaurants', [RestaurantController::class, 'index']);
