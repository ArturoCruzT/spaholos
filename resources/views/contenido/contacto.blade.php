@extends('template.template')
@section('title', 'Contacto')
<style >
    .map-responsive {
        overflow: hidden;
        padding-bottom: 50%;
        position: relative;
        height: 0;
    }
</style>
@section('contenido')
    [[Html::script('js/ng-app/controller/principalCtrl.js')]]
    <div ng-controller="principalCtrl" ng-init="initContacto()">
        <div id="map" style="width:400px;height:400px;">
    </div>
@endsection