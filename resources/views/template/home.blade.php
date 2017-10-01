@extends('template.template')
@section('title', 'Home')

@section('contenido')
    <div class="col-lg-10 col-md-12 col-sm-12 col-xl-10 offset-lg-1  offset-xl-1 ">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img class="d-block img-fluid" src="http://spaholosreiki.ml/Resources/logos.jpg"
                         data-src="holder.js/900x400?theme=social" alt="900x400" data-holder-rendered="true"
                         style="width: 100%; height: 400px;">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="http://spaholosreiki.ml/Resources/Tantra1.jpg"
                         data-src="holder.js/900x400?theme=industrial" alt="900x400" data-holder-rendered="true"
                         style="width: 100%; height: 400px;">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="http://spaholosreiki.ml/Resources/blanqueamiento1.png"
                         data-src="holder.js/900x400?theme=industrial" alt="900x400" data-holder-rendered="true"
                         style="width: 100%; height: 400px;">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="http://spaholosreiki.ml/Resources/Bienestar1.jpg"
                         data-src="holder.js/900x400?theme=industrial" alt="900x400" data-holder-rendered="true"
                         style="width: 100%; height: 400px;">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    <div class="col-lg-10 col-md-12  col-xl-10 form-inline offset-lg-1 offset-xl-1" >
        <div class="col-lg-4 offset-lg-1">
            <div class="card ">
                <img class="card-img-top" src="http://spaholosreiki.ml/Resources/Envoltura.jpg" alt="Card image cap"
                     style="width: 100%">
                <div class="card-block">
                    <h4 class="card-title">Servicios</h4>
                    <p class="card-text">
                        Spa Holos te da la bienvenida a su amplia gama de
                        servicios de belleza para tu piel y todo tu cuerpo.
                        Te ofrecemos desde faciales de hidratación y nutrición
                        hasta las técnicas más avanzadas de rejuvenecimiento
                        cutáneo. Aplicamos las mejores técnicas de relajación
                        y control de estrés, así como bienestar y plenitud
                        física, emocional y mental.
                    </p>
                    <a href="#" class="btn btn-primary">Leer más >></a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 offset-lg-1">
            <div class="card ">
                <img class="card-img-top rounded-circle" src="http://spaholosreiki.ml/Resources/Humanidades.jpg" alt="Card image cap"
                     style="width: 100%">
                <div class="card-block">
                    <h4 class="card-title">Promos del Mes</h4>
                    <p class="card-text">
                        Spa Holos te da la bienvenida a su amplia
                        gama de servicios de belleza para tu piel
                        y todo tu cuerpo. Te ofrecemos desde faciales
                        de hidratación y nutrición hasta las técnicas
                        más avanzadas de rejuvenecimiento cutáneo.
                        Aplicamos las mejores técnicas de relajación
                        y control de estrés, así como bienestar y
                        plenitud física, emocional y mental.
                    </p>
                    <a href="#" class="btn btn-primary">Leer más >></a>
                </div>
            </div>
        </div>
    </div>
@endsection