//llamado a los datos

function ingresarDatos() {

  let SEMANA = document.getElementById("SEMANA").value;
  let HORARIO = document.getElementById("HORARIO").value;
  let ACTIVIDADES = document.getElementById("ACTIVIDADES").value;
  let ENTRETENIMIENTO = document.getElementById("ENTRETENIMIENTO").value;
  let DEPORTES = document.getElementById("DEPORTES").value;
  let NUTRICION = document.getElementById("NUTRICION").value;
  
  console.log(SEMANA);
  console.log(HORARIO);
  console.log(ACTIVIDADES);
  console.log(ENTRETENIMIENTO);
  console.log(DEPORTES);
  console.log(NUTRICION);

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
      tabla1 += "<td>" + SEMANA + "</td>"
      tabla1 += "<td>" + HORARIO + "</td>"
      tabla1 += "<td>" + ACTIVIDADES + "</td>"
      tabla1 += "<td>" + ENTRETENIMIENTO + "</td>"
      tabla1 += "<td>" + DEPORTES + "</td>"
      tabla1 += "<td>" + NUTRICION + "</td>"
      tabla1 += "</tr>"
    
    document.getElementById("table1").innerHTML = tabla1

};