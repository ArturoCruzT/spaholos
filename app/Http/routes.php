<?php


//|------Inicio------|//

Route::get('/', ['uses' => 'HomeController@home', 'as' => 'rutaBase']);
Route::get('home', ['uses' => 'HomeController@home']);
Route::get('QuienesSomos', ['uses' => 'HomeController@somos']);
Route::get('Servicios', ['uses' => 'HomeController@servicios']);
Route::get('CentroEnergetico', ['uses' => 'HomeController@CentroEnergetico']);
Route::get('Paquetes', ['uses' => 'HomeController@Paquetes']);
Route::get('Contacto', ['uses' => 'HomeController@Contacto']);
