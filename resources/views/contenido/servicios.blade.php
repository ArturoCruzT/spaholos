@extends('template.template')
@section('title', 'Home')

@section('contenido')
    [[Html::script('js/ng-app/controller/principalCtrl.js')]]
    <div ng-controller="principalCtrl">
        <br/>
        <div class="card-group col-lg-10  offset-lg-1" style="display: flex">
            <div class="col-lg-4 ">
                <div class="card card-outline-warning">
                    <div class="card-block bg-warning">
                        <h4 class="card-text text-center">Tratamientos Faciales</h4>
                    </div>
                    <img class="h-25" src="http://spaholosreiki.ml/Resources/facial.jpg" alt="Card image">
                    <div class="card-block" style="background-color: #00FF00">
                        <p class="card-text">Faciales de hidratación y nutrición para
                            piel normal, grasa, sensible, seca o pieles enfermas muy deshidratadas:</p>
                        <button type="button" class="btn btn-primary"
                                ng-click="abrirModal('
                                Tratamientos Faciales',
                                '40 min',
                                'Costos desde $250')"
                                data-toggle="modal" data-target="#exampleModal">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>


            <div class="col-lg-4 ">
                <div class="card card-outline-warning">
                    <div class="card-block bg-warning">
                        <h4 class="card-text text-center">Facial De Piel Con Acné</h4>
                    </div>
                    <img class="h-25" src="http://spaholosreiki.ml/Resources/acne.jpg" alt="Card image">
                    <div class="card-block" style="background-color: #00FF00">
                        <p class="card-text">El acné es provocado por una bacteria,
                            buscamos eliminarla con los tratamientos faciales.
                        </p>
                        <button type="button" class="btn btn-primary"
                                ng-click="abrirModal('
                                Facial de piel con Acné',
                                '60 min.',
                                'Costo por sesión desde $400')"
                                data-toggle="modal" data-target="#exampleModal">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 ">
                <div class="card card-outline-warning">
                    <div class="card-block  bg-warning">
                        <h4 class="card-text text-center">Facial de piel madura</h4>
                    </div>
                    <img class="h-25" src="http://spaholosreiki.ml/Resources/Madura.jpg" alt="Card image">
                    <div class="card-block" style="background-color: #00FF00">
                        <p class="card-text">Tratamientos para rejuvenecer tu cutis,
                            disminuyendo o eliminando las arrugas y recuperando
                            elasticidad y firmeza "efecto botox".</p>
                        <button type="button" class="btn btn-primary"
                                ng-click="abrirModal(
                                'FACIAL DE PIEL MADURA ',
                                ' 65 min. ',
                                'Costo por sesión desde $450. ')"
                                data-toggle="modal" data-target="#exampleModal">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <br/>
        <div class="card-group col-lg-10  offset-lg-1">
            <div class="col-lg-4 ">
                <div class="card card-outline-warning">
                    <div class="card-block   bg-warning">
                        <h4 class="card-text text-center">Facial De Piel Con Melasma (Manchas)</h4>
                    </div>
                    <img class="h-25" src="http://spaholosreiki.ml/Resources/manchas.jpg" alt="Card image">
                    <div class="card-block" style="background-color: #00FF00">
                        <p class="card-text">Eliminación o disminución de manchas y pigmentaciones en el
                            rostro. El objetivo es uniformar el color de tu cara.</p>
                        <button type="button" class="btn btn-primary"
                                ng-click="abrirModal(
                                'FACIAL DE PIEL CON MELASMA (MANCHAS) ',
                                '70 min. ',
                                'Costo por sesión desde $450. ')"
                                data-toggle="modal" data-target="#exampleModal">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 ">
                <div class="card card-outline-warning">
                    <div class="card-block  bg-warning">
                        <h4 class="card-text text-center">Drenaje Linfático Manual</h4>
                    </div>
                    <img class="h-25" src="http://spaholosreiki.ml/Resources/linfatico.jpg" alt="Card image">
                    <div class="card-block" style="background-color: #00FF00">
                        <p class="card-text">Técnica de masaje que ayuda a liberar linfa y re-establecer el
                            buen funcionamiento del sistema linfático. Buscamos limpiar y desintoxicar el cuerpo, así
                            como
                            regenerar y oxigenar las células.
                        </p>
                        <button type="button" class="btn btn-primary"
                                ng-click="abrirModal(
                                ' ',
                                ' ',
                                ' ')"
                                data-toggle="modal" data-target="#exampleModal">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 ">
                <div class="card card-outline-warning">
                    <div class="card-block  bg-warning">
                        <h4 class="card-text text-center">Masaje Especial "A Cuatro Manos"</h4>
                    </div>
                    <img class="h-25" src="http://spaholosreiki.ml/Resources/especial.jpg" alt="Card image">
                    <div class="card-block" style="background-color: #00FF00">
                        <p class="card-text">
                            Para clientes muy exigentes, 100% apapacho.
                        </p>
                        <button type="button" class="btn btn-primary"
                                ng-click="abrirModal(
                                 ' ',
                                ' ',
                                ' ')"
                                data-toggle="modal" data-target="#exampleModal">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <br/>
        <div class="card-group col-lg-10  offset-lg-1">
            <div class="col-lg-4 ">
                <div class="card card-outline-warning">
                    <div class="card-block   bg-warning">
                        <h4 class="card-text text-center">Facial De Piel Con Melasma (Manchas)</h4>
                    </div>
                    <img class="h-25" src="http://spaholosreiki.ml/Resources/manchas.jpg" alt="Card image">
                    <div class="card-block" style="background-color: #00FF00">
                        <p class="card-text">Eliminación o disminución de manchas y pigmentaciones en el
                            rostro. El objetivo es uniformar el color de tu cara.</p>
                        <button type="button" class="btn btn-primary"
                                ng-click="abrirModal(
                                'FACIAL DE PIEL CON MELASMA (MANCHAS) ',
                                '70 min. ',
                                'Costo por sesión desde $450. ')"
                                data-toggle="modal" data-target="#exampleModal">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 ">
                <div class="card card-outline-warning">
                    <div class="card-block  bg-warning">
                        <h4 class="card-text text-center">Drenaje Linfático Manual</h4>
                    </div>
                    <img class="h-25" src="http://spaholosreiki.ml/Resources/linfatico.jpg" alt="Card image">
                    <div class="card-block" style="background-color: #00FF00">
                        <p class="card-text">Técnica de masaje que ayuda a liberar linfa y re-establecer el
                            buen funcionamiento del sistema linfático. Buscamos limpiar y desintoxicar el cuerpo,
                            así
                            como
                            regenerar y oxigenar las células.
                        </p>
                        <button type="button" class="btn btn-primary"
                                ng-click="abrirModal(
                                ' ',
                                ' ',
                                ' ')"
                                data-toggle="modal" data-target="#exampleModal">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 ">
                <div class="card card-outline-warning">
                    <div class="card-block  bg-warning">
                        <h4 class="card-text text-center">Masaje Especial "A Cuatro Manos"</h4>
                    </div>
                    <img class="h-25" src="http://spaholosreiki.ml/Resources/especial.jpg" alt="Card image">
                    <div class="card-block" style="background-color: #00FF00">
                        <p class="card-text">
                            Para clientes muy exigentes, 100% apapacho.
                        </p>
                        <button type="button" class="btn btn-primary"
                                ng-click="abrirModal(
                                ' ',
                                ' ',
                                ' ')"
                                data-toggle="modal" data-target="#exampleModal">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <div class="card-group col-lg-10  offset-lg-1">
            <div class="col-lg-4 ">
                <div class="card card-outline-warning">
                    <div class="card-block   bg-warning">
                        <h4 class="card-text text-center">Facial De Piel Con Melasma (Manchas)</h4>
                    </div>
                    <img class="h-25" src="http://spaholosreiki.ml/Resources/manchas.jpg" alt="Card image">
                    <div class="card-block" style="background-color: #00FF00">
                        <p class="card-text">Eliminación o disminución de manchas y pigmentaciones en el
                            rostro. El objetivo es uniformar el color de tu cara.</p>
                        <button type="button" class="btn btn-primary"
                                ng-click="abrirModal(
                                'FACIAL DE PIEL CON MELASMA (MANCHAS) ',
                                '70 min. ',
                                'Costo por sesión desde $450. ')"
                                data-toggle="modal" data-target="#exampleModal">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 ">
                <div class="card card-outline-warning">
                    <div class="card-block  bg-warning">
                        <h4 class="card-text text-center">Drenaje Linfático Manual</h4>
                    </div>
                    <img class="h-25" src="http://spaholosreiki.ml/Resources/linfatico.jpg" alt="Card image">
                    <div class="card-block" style="background-color: #00FF00">
                        <p class="card-text">Técnica de masaje que ayuda a liberar linfa y re-establecer el
                            buen funcionamiento del sistema linfático. Buscamos limpiar y desintoxicar el cuerpo,
                            así
                            como
                            regenerar y oxigenar las células.
                        </p>
                        <button type="button" class="btn btn-primary"
                                ng-click="abrirModal(
                                ' ',
                                ' ',
                                ' ')"
                                data-toggle="modal" data-target="#exampleModal">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 ">
                <div class="card card-outline-warning">
                    <div class="card-block  bg-warning">
                        <h4 class="card-text text-center">Masaje Especial "A Cuatro Manos"</h4>
                    </div>
                    <img class="h-25" src="http://spaholosreiki.ml/Resources/especial.jpg" alt="Card image">
                    <div class="card-block" style="background-color: #00FF00">
                        <p class="card-text">
                            Para clientes muy exigentes, 100% apapacho.
                        </p>
                        <button type="button" class="btn btn-primary"
                                ng-click="abrirModal(
                                ' ',
                                ' ',
                                ' ')"
                                data-toggle="modal" data-target="#exampleModal">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>
        @include('contenido.modalServicios')
    </div>

@endsection