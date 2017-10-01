<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class HomeController extends Controller
{
    function home()
    {
        return view('template.home');
    }

    function somos()
    {
        return view('contenido.somos');
    }

    function servicios()
    {
        return view('contenido.servicios');
    }

    function CentroEnergetico()
    {
        return view('contenido.centroEnergetico');
    }

    function Paquetes()
    {
        return view('contenido.paquetes');
    }

    function Contacto()
    {
        return view('contenido.contacto');
    }
}
