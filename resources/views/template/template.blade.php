<html ng-app="myApp" >

<head>
    <!--<meta charset="utf-8">-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    [[Html::style('css/bootstrap/bootstrap.css')]]
    [[Html::style('css/animate/animate.css')]]
    [[Html::style('css/fontawesome/css/font-awesome.min.css')]]

    <title>mexsinf- @yield('titulo')</title>

</head>
<body>
<script>
    var rutaBase = "[[route('rutaBase')]]";
</script>

[[Html::script('messages.js')]]
<script>
    Lang.setLocale('es');
</script>
[[Html::script('js/jquery/jquery-1.11.3.min.js')]]
[[Html::script('js/angular/angular.min.js')]]
[[Html::script('js/angular/angular-route.min.js')]]
[[Html::script('js/angular/angular-resource.min.js')]]
[[Html::script('js/moment/moment.js')]]
[[Html::script('js/Bootbox/bootbox.min.js')]]

<!--Librerias-->
[[Html::script('js/app.js')]]
[[Html::script('js/services.js')]]


[[Html::script('js/bootstrap/bootstrap.min.js')]]
[[Html::script('js/bootstrap-notify/bootstrap-notify.js')]]
[[Html::script('js/bootstrap-notify/helper.js')]]


    @include('template.navbar')



<!--Aquí va todo el contenido de la aplicación-->
@yield('contenido')

@include('template.footer')
[[Html::script('js/datepicker/bootstrap-datepicker.min.js')]]
[[Html::script('js/datepicker/locales/bootstrap-datepicker.es.min.js')]]
<script>
    var dateP = $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true,
        calendarWeeks: true,
        language: 'es',
        todayHighlight: true
    });
</script>
</body>
</html>