
//ssrc.$$
// import * as JQuery from "jquery";
// const $ = JQuery.default;
// const { default: Dom7 } = request("dom7");

var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    view: {
        stackPages: true,
    },
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/about/',
            url: 'about.html',
        },
        {
            path: '/home/',
            pageName: 'home',
        },
        {
            path: '/recargar/',
            pageName: 'recargar',
        },
        {
            path: '/insertarDepartamento/',
            pageName: 'insertarDepartamento',
        },
        {
            path: '/listD/',
            pageName: 'listD',
        },
        {
            path: '/listU/',
            pageName: 'listU',
        },
        {
            path: '/actualizar/',
            pageName: 'actualizar',
        },
        {
            path: '/actualizarDepartamento/',
            pageName: 'actualizarDepartamento',
        },
        {
            path: '/nuevaMarcaL/',
            pageName: 'nuevaMarcaL',
        },
        {
            path: '/listH/',
            pageName: 'listH',
        }
    ],
    // ... other parameters
});


var mainView = app.views.create('.view-main');

var $$ = Dom7;
baca();
listarDepartamentos();
listDepartamentos();
listarHorario();


$$("#backUpdateD").click(function () {
    console.log("entro back")
    app.request({
       
        success: function () {
           
            app.views.main.router.navigate('/home/');
            
            
        }
    });
});
$$("#nuevoUsuario").click(function () {
    
    var cedula = $$("#cedula").val();
    var nombres = $$("#nombre").val();
    var apellidos = $$("#apellidos").val();
    var direccion = $$("#direccion").val();
    var telefono = $$("#telefono").val();
    var cargo = $$("#cargo").val();
    app.request({
        url: "https://framework7pm60.000webhostapp.com/agregar.php",
        type: "POST",
        data: {
            'cedula': cedula,
            'nombre': nombres,
            'apellido': apellidos,
            'direccion': direccion,
            'telefono': telefono,
            'cargo': cargo
        },
        success: function (data) {
            app.dialog.alert("Se guardo con exito");
            $$("#cedula").val("");
            $$("#nombres").val("");
            $$("#apellidos").val("");
            $$("#direccion").val("");
            $$("#telefono").val("");
            $$("#cargo").val("");
            app.views.main.router.navigate('/listU/');
            baca();
        }
    });
});

$$("#nuevaMarca").click(function () {
    
    var cedula = $$("#cedulaH").val();
    var id = $$("#idH").val();
    var horaIngreso = $$("#horaEntrada").val();
    var horaSalida = $$("#horaSalida").val();
    console.log(horaIngreso)
    app.request({
        url: "https://framework7pm60.000webhostapp.com/agregarLaboral.php",
        type: "POST",
        data: {
            
            'id': id,
            'horaIngreso': horaIngreso,
            'horaSalida': horaSalida,
            'cedula': cedula

        },
        success: function (data) {
            app.dialog.alert("Se guardo con exito");
            $$("#cedulaH").val("");
            $$("#idH").val("");
            $$("#horaEntrada").val("");
            $$("#horaSalida").val("");
            
            app.views.main.router.navigate('/listH/');
           listarHorario();
        }
    });
});

$$("#nuevoDepartamento").click(function () {
    var id= $$("#iddepart").val();
    var departamento = $$("#departamento").val();
    console.log(departamento);
    app.request({
        url: "https://framework7pm60.000webhostapp.com/agregarDepartamento.php",
        type: "POST",
        data: {
            'id': id,
            'departamento': departamento 
        },
        success: function (data) {
            app.dialog.alert("Se guardo con exito");
            $$("#iddepart").val("");
            $$("#departamento").val("");
            
            app.views.main.router.navigate('/listD/');
            listDepartamentos();
        }
    });
});

$$("#usuarios").on("click", "#borrarU", function () {
    var cedula = $$(this).data("id");

    app.request.post('https://framework7pm60.000webhostapp.com/borrar.php', {
        cedula: cedula
    }, function (data) {
        app.dialog.alert("Se borro el usuario exitosamente");
        baca();

    });
});
$$("#departamentos").on("click", "#borrarD", function () {
    var id = $$(this).data("id");

    app.request.post('https://framework7pm60.000webhostapp.com/borrarDepartamento.php', {
        id: id
    }, function (data) {
        app.dialog.alert("Se borro el usuario exitosamente");
        listDepartamentos();

    });
});

$$("#usuarios").on("click", "#update", function () {
    var id = $$(this).data("id");
    console.log(id);
    app.request.json('https://framework7pm60.000webhostapp.com/buscar.php', {
        id: id
    }, function (data) {

        $$("#ucedula").val(data[0].cedula); 
        $$("#unombres").val(data[0].nombre); 
        $$("#uapellidos").val(data[0].apellido); 
        $$("#udireccion").val(data[0].direccion); 
        $$("#utelefono").val(data[0].telefono); 
        $$("#ucargo").val(data[0].cargo);
        app.views.main.router.navigate('/actualizar/');
       

    });
});

$$("#departamentos").on("click", "#updateD", function () {
    var id = $$(this).data("id");
    console.log(id);
    app.request.json('https://framework7pm60.000webhostapp.com/buscarDepartamentos.php', {
        id: id
    }, function (data) {
        $$("#uid").val(data[0].id);
        $$("#udepartamento").val(data[0].departamento);
        app.views.main.router.navigate('/actualizarDepartamento/');
       

    });
});

$$("#guardarUsuario").click(function () {
    var cedula = $$("#ucedula").val();
    var nombres = $$("#unombres").val();
    var apellidos = $$("#uapellidos").val();
    var direccion = $$("#udireccion").val();
    var telefono = $$("#utelefono").val();
    var cargo = $$("#ucargo").val();

    app.request({
        url: "https://framework7pm60.000webhostapp.com/actualizar.php",
        type: "POST",
        data: {
            'cedula': cedula,
            'nombre': nombres,
            'apellido': apellidos,
            'direccion': direccion,
            'telefono': telefono,
            'cargo': cargo
        },
        success: function (data) {
            app.dialog.alert("Se actualizo con exito");
            $$("#ucedula").val("");
            $$("#unombres").val("");
            $$("#uapellidos").val("");
            $$("#udireccion").val("");
            $$("#utelefono").val("");
            $$("#ucargo").val("");
            app.views.main.router.navigate('/listU/');
            baca();
        }
    });
});

$$("#guardarDepartamento").click(function () {
    var id = $$("#uid").val();
    var departamento = $$("#udepartamento").val();
    

    app.request({
        url: "https://framework7pm60.000webhostapp.com/actualizarDepartamento.php",
        type: "POST",
        data: {
            'id': id,
            'departamento': departamento
            
        },
        success: function (data) {
            app.dialog.alert("Se actualizo con exito");
            $$("#uid").val("");
            $$("#udepartamento").val("");
            
            app.views.main.router.navigate('/listD/');
            listDepartamentos();
        }
    });
});

function baca() {
    app.request.json('https://framework7pm60.000webhostapp.com/listar.php', function (data) {
        var jlh = data.length;
        //  console.log(jlh);
        var i = "";
        console.log(data);
        var tabla = "";
        for (i = 0; i < jlh; i++) {
            tabla += "<tr>" +
                "<td class='numeric-cell'>" + (i + 1) + "</td>" +
                "<td class='label-cell'>" + data[i].cedula + "</td>" +
                "<td>" + data[i].nombre + "</td>" +
                "<td>" + data[i].apellido + "</td>" +
                "<td>" + data[i].direccion + "</td>" +
                "<td>" + data[i].telefono + "</td>" +
                "<td>" + data[i].departamento+ "</td>" +
                "<td><a href='#' id='update' data-id='" + data[i].cedula + "'><i class='f7-icons'>arrow_2_circlepath</i></a> <a href='#' id='borrarU' data-id='" + data[i].cedula + "'><i class='f7-icons'>trash</i></a></td>" +
                "<tr>";
            //console.log(data[i].cedula)

        }

        $$("#usuarios").html(tabla);

    });
}

function listarDepartamentos() {
    app.request.json('https://framework7pm60.000webhostapp.com/listarDepartamentos.php', function (data) {
        var jlh = data.length;
        //  console.log(jlh);
        var i = "";
        console.log(data);
        var tablaD = "<option value='0'>-SELECT-</option>";
        for (i = 0; i < jlh; i++) {
            tablaD += 
                "<option value='"+data[i].id+"'>" + data[i].departamento + "</option>";
        }

        $$("#cargo").html(tablaD);
        $$("#ucargo").html(tablaD);

    });
}

function listarHorario() {
    app.request.json('https://framework7pm60.000webhostapp.com/listarLaboral.php', function (data) {
        var jlh = data.length;
        //  console.log(jlh);
        var i = "";
        console.log(data);
        var tabla = "";
        for (i = 0; i < jlh; i++) {
            tabla += "<tr>" +
               
                "<td class='label-cell'>" + data[i].id + "</td>" +
                "<td>" + data[i].horaIngreso + "</td>" +
                "<td>" + data[i].horaSalida + "</td>" +
                "<td>" + data[i].cedula + "</td>" +
                "<td>" + data[i].nombre + "</td>" +
                "<td>" + data[i].apellido+ "</td>" +
                "<tr>";
            //console.log(data[i].cedula)

        }

        $$("#horarios").html(tabla);

    });
}
function listDepartamentos() {
    app.request.json('https://framework7pm60.000webhostapp.com/listarDepartamentos.php', function (data) {
        var jlh = data.length;
        //  console.log(jlh);
        var i = "";
        console.log(data);
        var tabla = "";
        for (i = 0; i < jlh; i++) {
            tabla += "<tr>" +
                "<td class='numeric-cell'>" + data[i].id + "</td>" +
                "<td class='label-cell'>" + data[i].departamento + "</td>" +
                "<td><a href='#' id='updateD' data-id='" + data[i].id + "'><i class='f7-icons'>arrow_2_circlepath</i></a> <a href='#' id='borrarD' data-id='" + data[i].id + "'><i class='f7-icons'>trash</i></a></td>" +
                "<tr>";
            //console.log(data[i].cedula)

        }

        $$("#departamentos").html(tabla);

    });
}