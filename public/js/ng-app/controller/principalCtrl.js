myApp.controller("principalCtrl", function ($scope, $rootScope) {
    $scope.contadorIntentos = 0;
    $scope.base = rutaBase;

    $scope.abrirModal = function (titulo, tiempo, precio) {
        $scope.registro = {};
        $scope.registro.titulo = titulo;
        $scope.registro.costo = precio;
        $scope.registro.tiempo = tiempo;
    };
//------Mapas--------------------//
    $scope.initContacto = function () {
        var mapCanvas = document.getElementById("map");
        var mapOptions = {
            center: new google.maps.LatLng(51.5, -0.2),
            zoom: 10
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
    }

//------Funciones genéricas------//
    $scope.seleccionarRegistro = function (reg, idElemento) {
        $scope.registroSelected = reg;
        $("#" + idElemento).focus();
    };

    $scope.nuevoRegistro = function (idElemento) {
        $scope.registroSelected = {}
        $("#" + idElemento).focus();
    };

    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };

    $scope.descargarCsv = function (nombreDiv) {
        var el = document.getElementById(nombreDiv);
        var body = document.body, range, sel;
        if (document.createRange && window.getSelection) {
            range = document.createRange();
            sel = window.getSelection();
            sel.removeAllRanges();
            try {
                range.selectNodeContents(el);
                sel.addRange(range);
            } catch (e) {
                range.selectNode(el);
                sel.addRange(range);
            }
        } else if (body.createTextRange) {
            range = body.createTextRange();
            range.moveToElementText(el);
            range.select();
        }
        document.execCommand('copy');
        sel.removeAllRanges();
        alert(Lang.get('general.copiado'));
    }


});


