var nombre2=document.getElementById("nombre");
var apellido2=document.getElementById("apellido");
var correo2=document.getElementById("correo");
var contraseña2=document.getElementById("contraseña");
var error=document.getElementById("error");
error.style.color="cyan";
error.style.fontSize="20px";
error.style.fontFamily="Algerian";
function enviarformulario()
{
    console.log("enviando formulario...");
    
    var mensajesError=[];
    if(nombre2.value===null||nombre2.value=== ""||!isNaN(nombre2.value))//isNaN(nombre)
    {
    mensajesError.push("ingresa tu nombre, no se admiten numeros");
    }
    if(apellido2.value===null|| apellido2.value=== "" ||!isNaN(apellido2.value))
    {
    mensajesError.push("ingresa tu apellido,no se admiten numeros");
    }
    if(correo2.value===null|| correo2.value=== "")
    {
    mensajesError.push("ingresa tu correo");
    }
    if(contraseña2.value===null|| contraseña2.value=== "")
    {
    mensajesError.push("ingresa tu contraseña");
    }

    error.innerHTML=mensajesError.join(", ");
    return false;
}//nombre = prompt("Introduce un nombre válido: ", "Coloca aquí tu nombre");
//}while(!isNaN(nombre)); 

class Persona{
    constructor(_nombre, _apellido, _correo, _contraseña){
        this.nombre =_nombre
        this.apellido =_apellido
        this.correo =_correo
        this.contraseña =_contraseña
    }
   }

   const nombre = document.querySelector(selectors='#nombre')
   const apellido = document.querySelector(selectors='#apellido')
   const correo = document.querySelector(selectors='#correo')
   const contraseña = document.querySelector(selectors='#contraseña')
   const btnadd = document.querySelector(selectors='#btnadd')

   btnadd.addEventListener(type='click', listener=()=>{
       const persona = new Persona(nombre.value, apellido.value, correo.value, contraseña.value)
       addlocal(persona)
   })

   const addlocal=(persona =>{
       localStorage.setItem('persona', JSON.stringify(persona))
   })