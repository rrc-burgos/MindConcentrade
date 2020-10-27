//llamado a los datos

function ingresarDatos() {
  let semana = document.getElementById("SEMANA").value;
  let horario = document.getElementById("HORARIO").value;
  let actividades = document.getElementById("ACTIVIDADES").value;
  let entretenimiento = document.getElementById("ENTRETENIMIENTO").value;
  let deportes = document.getElementById("DEPORTES").value;
  let nutricion = document.getElementById("NUTRICION").value;

  let SEMANA = []
  let HORARIO = []
  let ACTIVIDADES = []
  let ENTRETENIMIENTO = []
  let DEPORTES = []
  let NUTRICION = []

  console.log(SEMANA);
  SEMANA.push(semana);
  console.log(HORARIO);
  HORARIO.push(horario);
  console.log(ACTIVIDADES);
  ACTIVIDADES.push(actividades);
  console.log(ENTRETENIMIENTO);
  ENTRETENIMIENTO.push(entretenimiento);
  console.log(DEPORTES);
  DEPORTES.push(deportes);
  console.log(NUTRICION);
  NUTRICION.push(nutricion);

  var tabla1 = "<table border='2'><tbody>"

  tabla1 += "<tr>"
  tabla1 += "<td>SEMANA</td>"
  tabla1 += "<td>HORARIO</td>"
  tabla1 += "<td>ACTIVIDADES DIARIAS</td>"
  tabla1 += "<td>ENTRETENIMIENTO</td>"
  tabla1 += "<td>DEPORTES</td>"
  tabla1 += "<td>NUTRICIO</td>"
  tabla1 += "</tr>"

  tabla1 += "<tr>"
  for (i = 0; i < SEMANA.length; i++) {
    tabla1 += "<td>" + SEMANA[i] + "</td>"
    tabla1 += "<td>" + HORARIO[i] + "</td>"
    tabla1 += "<td>" + ACTIVIDADES[i] + "</td>"
    tabla1 += "<td>" + ENTRETENIMIENTO[i] + "</td>"
    tabla1 += "<td>" + DEPORTES[i] + "</td>"
    tabla1 += "<td>" + NUTRICION[i] + "</td>"
    tabla1 += "</tr>"
  }

  document.getElementById("table1").innerHTML = tabla1

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'ACTIVIDADES GUARDADAS EXITOSAMENTE',
    showConfirmButton: false,
    timer: 2000
  })


};


var borrarDatos = function () {

  document.getElementById("SEMANA").value = "";
  document.getElementById("SEMANA").focus()
  document.getElementById("HORARIO").value = "";
  document.getElementById("HORARIO").focus()
  document.getElementById("ACTIVIDADES").value = "";
  document.getElementById("ACTIVIDADES").focus()
  document.getElementById("ENTRETENIMIENTO").value = "";
  document.getElementById("ENTRETENIMIENTO").focus()
  document.getElementById("DEPORTES").value = "";
  document.getElementById("DEPORTES").focus()
  document.getElementById("NUTRICION").value = "";
  document.getElementById("NUTRICION").focus()


  Swal.fire({
    icon: 'error',
    title: 'ERROR',
    text: 'SU CRONOGRAMA FUE CANCELADO',
    footer: '<a href>Why do I have this issue?</a>'
  })


}
