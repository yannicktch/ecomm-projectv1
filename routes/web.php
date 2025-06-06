<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/articles-grid', function () {
    return Inertia::render('articles-grid'); // 'ArticleGrid' refers to resources/js/Pages/ArticleGrid.jsx
})->name('articles.index'); // Give it a name for easier linking

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
