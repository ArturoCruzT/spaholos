<?php


//|------Inicio------|//

Route::get('/', ['uses' => 'HomeController@home', 'as' => 'rutaBase']);
Route::get('home', ['uses' => 'HomeController@home']);
Route::get('QuienesSomos', ['uses' => 'HomeController@somos']);
Route::get('Servicios', ['uses' => 'HomeController@servicios']);

