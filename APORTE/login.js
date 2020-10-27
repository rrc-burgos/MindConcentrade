function validar() {
    let name = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let email = document.getElementById("Email").value;
    let contra1 = document.getElementById("contrasena1").value;
    let contra2 = document.getElementById("contrasena2").value;

    let Nombre = []
    let Apellido= []
    let Email = []
    let contrasena1 = []
    let contrasena2= []
 
    console.log(Nombre);
    Nombre.push(name);
    console.log(Apellido);
    Apellido.push(apellido)
    console.log(Email);
    Email.push(email);
    console.log(contrasena1);
    contrasena1.push(contra1);
    console.log(contrasena2);
    contrasena2.push(contra2);
    
    }
