var services = angular.module('myApp.services', ['ngResource']);

services.factory('CatalogoService', function ($resource) {
    var rutaCatalogos = RutaCatalogo;

    return $resource({}, {}, {
        //-------Batches------
        getBatchFromCode: {method: 'POST', url: rutaCatalogos + '/getBatchFromCode', cache: false, isArray: false},


    });
});
