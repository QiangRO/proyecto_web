var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var correo=document.getElementById("correo");
var contraseña=document.getElementById("contraseña");
var error=document.getElementById("error");
error.style.color="cyan";
error.style.fontSize="20px";
error.style.fontFamily="Algerian";
function enviarformulario()
{
    console.log("enviando formulario...");
    
    var mensajesError=[];
    if(nombre.value===null||nombre.value=== ""||!isNaN(nombre.value))//isNaN(nombre)
    {
    mensajesError.push("ingresa tu nombre, no se admiten numeros");
    }
    if(apellido.value===null|| apellido.value=== "" ||!isNaN(apellido.value))
    {
    mensajesError.push("ingresa tu apellido,no se admiten numeros");
    }
    if(correo.value===null|| correo.value=== "")
    {
    mensajesError.push("ingresa tu correo");
    }
    if(contraseña.value===null|| contraseña.value=== "")
    {
    mensajesError.push("ingresa tu contraseña");
    }

    error.innerHTML=mensajesError.join(", ");
    return false;
}//nombre = prompt("Introduce un nombre válido: ", "Coloca aquí tu nombre");
//}while(!isNaN(nombre)); 