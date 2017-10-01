@extends('template.template')
@section('title', 'Paquetes')

@section('contenido')
    [[Html::script('js/ng-app/controller/principalCtrl.js')]]
    <div ng-controller="principalCtrl">
    </div>
@endsection