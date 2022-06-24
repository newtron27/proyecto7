// closest()
// es un metodo de elemento que te dice cual es el elemento padree mas cercano de manera acendente
// o menor a mayor
// mind level

// const { format } = require("mysql");

// const { UCS2_UNICODE_520_CI } = require("mysql/lib/protocol/constants/charsets");

// obejeto window

//  window.open("https://youtube.com")-abre una nueva ventana

// boton=document.querySelector('.btn')

// boton.addEventListener('click', abrir=()=>{
//     window.open("https://youtube.com")

// })


///////// PETICIONES HTTPS//////////// 
///////// DATOS ESTRUCUTADOS 
/////////  CON JSSON ............

//  metodos de sereializado y deseralizacion

// JSON.parse();para serealizar- se utiliza para obtener enviar datos al cliente
// JSON.stringify-sive para deserealizar- sirve para enviar datos al servidor
// JSON.po
// const perro= '{"nombre": "miki", "raza":"pastor aleman", "color":"negro"}';

// const deserealizado=JSON.parse(perro);
// console.log(typeof deserealizado)


////////////////////////////////////
// PETICIONES CON AJAX//////////////
//////////////////////////////////
//////////////////////////////////


// PASO1- crear el objeto que permite hacer peticiones a la base de datos
// PASO3- decirle que tipo de peticion quieres hacer si mandar-POST informacion o recibir-GET
// PASO4- mostrar el dato o hacer lo que se dese con el 

// /////////EJEMPLO---------1///////////
// ///////////////////////////////////

// let peticion;
// if(window.XMLHttpRequest)
// peticion= new XMLHttpRequest()
// else 
// peticion = new ActiveXObject("Microsoft.XMLHTTP")

// // si el obejto no tiene funcion  en el navegador crea la peticion
// y la funcion si la tiene crea la peticion

// // cuando la peticion este cargada  ejecuta la siguiente funcion
//  peticion.addEventListener("load", ()=>{ 

// //    contenido=document.querySelector('.contenedor')
//    let respuesta;
// //si el estado de la peticion es 200 entononces hazlo siguiente
//      if(  peticion.status == 200 || peticion.status==201)respuesta= peticion.response;
//      //si no igual la respuesta a este texto
//     else respuesta='lo siento pero su solicitud no se escuentra';
//    contenido.innerHTML= deserealizado=JSON.parse(respuesta);
// //   imprime por consola el objeto
//      console.log((JSON.parse(respuesta)))      
//    })

// // dame infomracion del archivo siguiente
//    peticion.open('GET', 'https://reqres.in/api/users?page=2'); 
// // evia la peticion



///////////EJEMPLO-------2////////////
////////////////////////////

// let url="https://reqres.in/api/users?page=2";
// let peticion;
// const contenedor=document.querySelector('.contenedor')
// if(window.XMLHttpRequest) peticion=new XMLHttpRequest()
// else peticion=new ActiveXObject('microsoft.XMLHTTP');


// peticion.addEventListener("load", ()=>{
// let respuesta;  
// if(peticion.status==200 || peticion.status==201)respuesta=peticion.response
// else respuesta="lo siento pero su peticion no se ecuentra";
// console.log(JSON.parse(respuesta))

// })
// peticion.open('post',url)
// peticion.setRequestHeader("content-type",'application/json;charset="UTF8"')
// peticion.send(JSON.stringify(
//   {
//   "nombre":"starlin",
//   "apellido":"cabral",
//   "contrase":"12304040"
//  },
// ))

/////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////// BUSCANDO UNA IMAGEN CON PETICIONES//
///// ////////////////////////////////////////////
/////////////////////////////////REPASAR/////////
//  const imagen=document.querySelector('.imagen')

// 
// fetch("div/diamante.jpg")
// .then(respuesta=>respuesta.blob())
// .then(img=>imagen.src=URL.createObjectURL(img))
//  .catch(error=> console.log(error))



/////////////////////////////////////////////////////
////////////////////////////////////////////////////
//////PETICION DE NONBRE CON FECTCH ////////////////////////
///// ///////////////////////////////////////////
/////////////////////////////////REPASAR/////////
//  let url='https://reqres.in/api/users?page=2';
// let nombre=document.getElementsByName('nombre')
// let apellido=document.getElementsByName('apellido')
// let contrase=document.getElementsByName('contrase')

// fetch(url ,{
// method:"POST",
// body:JSON.stringify({'nombre':`${nombre}`,"apellido":`${apellido}`, "contrase":`${contrase}`}),
// Headers:{ "content-type":"application/json"}
// })

// .then(respuesta=>respuesta.text(respuesta))
// .then(nombre=>document.write(nombre))
// let boton=document.querySelector('boton')
// let boton=document.querySelector(".boton")


/////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////// FUNCION DE API DE MAPA //////////////
///// ///////////////////////////////////////////
/////////////////////////////////REPASAR/////////

// function mostrar(){
// 'correo': `${correo}`, 'apellido': `${apellido}`
// function iniciar(){
//     var coord = {lat:18.5681948 ,lng: -70.0953444};
//     var map = new google.maps.Map(document.getElementById('map'),{
//       zoom: 10,
//       center: coord
//     });
//     var marker = new google.maps.Marker({
//       position: coord,
//       map: map
//     });
// } 




/////////////////////////////////////////////////////
////////////////////////////////////////////////////
////MANDANDO  FORMULARIO A UNA API LOCAL///////////
/////Y EXPLICACION DE COMO SE DOP$ API FETCH///////
///// ///////////////////////////////////////////
////////////////////////////////////////////////

//   function enviar(){

// let nombre= document.getElementById('nombre').value;
// let apellido= document.getElementById("apellido").value;
// let contrase = document.getElementById("contrase").value;
// let texto = document.getElementById("text").value;

// fetch("api.json",{
// method:"post",
// body:JSON.stringify({"NOMBRE":`${nombre}`,"apellido":`${apellido}`,"contrase":`${contrase}`, "areadetexto":`${texto}`}),
// headers:{"content-type":"application/json"}
// })
// .then(res=>res.text(res))
// .then(usuari=>console.log(usuari))


//    const nombre = document.getElementById('nombre')
//             // const correo = document.getElementById('correo')
//             // const apellido = document.getElementById('apellido')
//             const url = ''https://reqres.in/api/users?page=2
//             fetch(url, {
//                 method: "POST",
//                 body:JSON.stringify({'nombre':`${nombre}`}),
//                 Headers: { "content-type": "application/json" }
//             })
//                 .then(respuesta => respuesta.text(respuesta))
//                 .then(res => console.log(res))


// // } 





//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// FENOMENO CLOSURE  RETORNAR FUNCIONES DESDE OTRA /
//////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////////////////////////////////////////

// function  crearContador(contador=20){

//   var saludo=;

//   function info1(numero){
//     incremento=contador+numero;
//     console.log(incremento)
//     return incremento;
// }

// function info2(){
  
//   return descremento;
// }


// return { incrementar,descrementar}
// }


//  var contador1=crearContador()();





/////////////////////////////////////////////////////
////////////////////////////////////////////////////
// COMO UN OBJETO PUEDE HEREDAR LAS PROPIEDADES////
////////Y LOS METODOS DE OTROS////////////////////
///// ///////////////////////////////////////////
////////////////////////////////////////////////

// class ejemplo{

// constructor(){}

// saludar(){
// console.log('hola')
// }

// }



//  let saludos=new ejemplo();


// saludos.__proto__.saludar=()=>{

//     console.log("menor")

//     }



// arr=[];

// arr.__proto__=saludos
// arr.saludar()
// console.log(arr)
// visual.anchor()



///////////////////////////////////////////
//////////////////////////////////////////
/////sobre escribir los metodos vs
///// sobre escribir el prototipo//////////////////
////////////////////////////////////////

// class reaciones{
//     constructor(){}

//     rojas(){

// alert("hello a continuacion te mandare a faceebok")

//         }
//         verde(){
//            alert('hola haz presionado la alerta verde ')
//             }
//             azul(){

//                alert("hola haz presiona la alerta azul")

//                 }
// }

// const mensaje= new reaciones();

// document.getElementById('cambiar').addEventListener('click', ()=>{
// let mensaje= new reaciones();
// mensaje.__proto__.azul=()=>{
//     window.open("https://www.amazon.com/")
//     }
// })
//  document.getElementById('rojo').addEventListener('click', ()=>{
//  mensaje.rojas();
// })
// document.getElementById('verde').addEventListener('click', ()=>{
// mensaje.verde();
// })
// document.getElementById('azul').addEventListener('click', ()=>{
//  mensaje.azul();
//    })




///////////////////////////////////////////
//////////////////////////////////////////
/////USANDO JAVASCRIPT MODO ESTRICTO//////////////////
////////////////////////////////////////
// "use strict";
// let visual={};

// console.log(visual)
// Object.defineProperty(visual,"nombre",{value:"starlin",writeable:"false"})
// Object.preventExtensions(visual)

// visual.nombre="cabral";
// visual.edad="22";
// visual.estatura="5.7ft"






////////////////////////////////////////////////
/////PROSS Y CONTRA DE LAS FUNCIONES FLECHA//////
//////////////////////////////////////////////
///////////////////////////////////////////



// si tenemos un solo parametro no se necestia paretecis
// no se pueden utilizar como metodos
//no se pueden utilizar como constructor


// function saludar(nombre){console.log("hola "+nombre)}
// const  saludar=nombre=>console.log("hola "+nombre)

// saludar("starlin")
// persona={

// nombre:'pedro',
// apellido:'gonzalez',
// edad:'20',
// estatura:6.4,

// saludar:function(){console.log("hola " + this.nombre + "tu apellido es"+ this.apellido)}

// }






///////////////////////////////////////////
//////////////////////////////////////////
/////RECORRER UN JSON//////////////////
////////////////////////////////////////

// const contenido=document.querySelector('h2')
// const cart=document.querySelector('mostrar')
// const fragmento=document.createDocumentFragment()
// cart.querySelector('nombre').textContent="hola";

// persona.forEach(per=> {


//     cart.querySelector('apellido').textContent=per.apellido;
//     cart.querySelector('edad').textContent=per.edad;
//     cart.querySelector('estatura').textContent=per.estatura;
//     const clone=cart.cloneNode(true)
//     fragmento.appendChild(clone)

// });
// contenido.appendChild(fragmento
// // console.log(persona.nombre)





///////////////////////////////////////////
//////////////////////////////////////////
/////CONTRUCION DE OBJETO//////////////////
////////////////////////////////////////


// function creaciodeUsuarios(nombre, apellido, edad, estatura,){

//     this.nombre=nombre;
//     this.apellido=apellido;
//     this.edad=edad;
//     this.estatura=estatura;

//     this.informacion=function (){document.write(`  hola<b>${this.nombre} ${this.apellido}</b>, como estas?  segun con la informacion que nos brindas tiens 
//     <b>${this.edad}</b> y tienes <b>${this.estatura}</b>de estatura `)}

// }

// const persona1=new creaciodeUsuarios('maria','perez','30 de edad', '5.4 pies')
// persona1.informacion()





///////////////////////////////////////////
//////////////////////////////////////////
/////EJEMPLO DE CONSTRUCON DE UN OBJETO//
////////////////////////////////////////


//  function construiranimales(tipo,raza,color){
// this.tipo=tipo;
// this.raza=raza;
// this.color=color;


// if(tipo=='perro'){
//   alert('au auu au');
// }
//  }
//  let perro = new construiranimales("perro", "rogualer","rojo")





///////////////////////////////////////////
//////////////////////////////////////////
/////OBJETO CREADO //////////////////
///////////////////////////////////////


// Objeto={

// nombre:"pedro",
// apellido:"perez",
// edad:"20",
//  saludar(){
// document.write(`<b>Nombre: </b> ${this.nombre} ,<br><b>Apellido : </b> ${this.apellido},<br> <b> Edad : </b>${this.edad}`);
// }
// }
// Objeto.saludar()



///////////////////////////////////////////
//////////////////////////////////////////
/////SCREEN Y SCROLL//////////////////
////////////////////////////////////////


// representa el espacio que 
// hay entre la ventana 
// y pantalla

// var screenx=window.screenLeft;
// var screeny=window.screentop;


// mientras que es scroll
//  representa el desplacamiento en la pagina 
//  de un lugar 
// a otro
// window.scroll(.,.)





///////////////////////////////////////////
//////////////////////////////////////////
/////EJERCIO DE SCRREN//////////////////
////////////////////////////////////////

// // muestra  el ancho y el alto de una pantallla 
// let ANCHO=window.screen.width;
// let ALTO=window.screen.height;


// let comprar=confirm(`el ancho de la pantalla es de ${ANCHO} PX el
// y el alto es ${ALTO} PX`)


// if(comprar)alert('comprar realizada exitosamente')
// else alert("compra cancelada")



///////////////////////////////////////////
//////////////////////////////////////////
/////WINDOW LOCATION//////////////////
////////////////////////////////////////

// // muestra la iformacion de una pagina web como el protocolo url y lo demas 
// let href=window.location.href;
// let protocolo=window.location.protocol;
// let hostn=window.location.hostname;
// let pathname=window.location.pathname;


// document.write(`<b>URL:</b>${href},
//  <br>
//  <b>PROTOCOLO:</b>${protocolo},<br>
//  <b> HOSTNAME:<b>${hostn}<br> 
//  <b>PATHNAME:<b> ${pathname}`)






///////////////////////////////////////////
//////////////////////////////////////////
//// EVENTOS DEl MAUSE//////////////////
////////////////////////////////////////

// const boton=document.querySelector(".boton")
//"dblclick"
//"mouseout"
//mousecut
//"click"
//'mouseenter'
//'mousemove'
//'mouseleave'
//"mouseover"
//"mousedown"
//mouseup
//eventos de teclado
//  "keydown"
// 'keypress'
// 'keyup'

// boton.addEventListener("key", e=>{
// alert("hola acabas de presionar el boton 1")
//  e.stopPropagation();

// });


// azul.addEventListener("click", e=>{
//     alert("presionaste el contenedor azul")
// // e.stopPropagation();

// });


// red.addEventListener("click", e=>{
//     alert("presionaste el contenedor rojo")
// //   e.stopPropagation();   

// });



// window.addEventListener('load',usu)

///////////////////////////////////////////
//////////////////////////////////////////
/////EVENTOS DE INTERFAZ//////////////////
////////////////////////////////////////


//error-()
// load-carga
// beforeunload
// unload
//resize
//scroll
// select
// keyup.key

// const selecionado= document.querySelector('.text')
//  const input=document.querySelector('.input');

//  input.addEventListener("select",(e)=>{   
//    console.log(e)

//     let StarText= e.target.selectionStart;
//     let ENDtext= e.target.selectionEnd;
//     let textocompleto=input.value;
//     selecionado.innerHTML=textocompleto.substring(StarText,ENDtext);

// })



//////////////////////////////////////
///////TEMPORARIZADORES O TIMER///////
/////////////////////////////////////




// setTimeout(comer,3000);
// intervalos=setInterval(()=>{},200)
//  clearInterval(intervalo)





// const boton=document.querySelector('#btn');

// const nombre=document.getElementById('nombre');
// const email=document.getElementById('Email');
// const materia=document.getElementById('materia')
//  const aviso=document.querySelector('.aviso')


// boton.addEventListener('click',(e)=>{
//       e.preventDefault();
//   const error=validarformulario();

// if(error[0]){
// aviso.innerHTML=error[1];
// aviso.classList.add('red')

// }
// else{
// aviso.innerHTML="formulario completado";

// aviso.classList.remove('red')
// aviso.classList.add('verde')
// } 
// })



//   const validarformulario=()=>{
//     let error=[];

// if(nombre.value.length<=14){
// error[0]=true; 
// error[1]="Su nombre debe ser mayor de 15 carateres";
//  return error; 
// }

//  else if(email.value.length<5 ||email.value.indexOf("@")==-1){
//      error[0]=true;
//      error[1]='email no valido';
//      return error;
//     }
//     else if(materia.value.length<5 ){
//       error[0]=true;
//       error[1]='materia no valida';
//       return error;
//      }


// error[0]=false;
// return error;
//   }



////////////////////////////////////////////
///////INTERFAZ QUE PERMITE DECIR A LOS ESTUDIANTES
/////////////QUE DIA DE LA SEMANA ASISIRAN A CLASE///////
////////////////////////////////////////////



////////////////////////////////////////
///////selecion de materias///////
/////////////////////////////////////////
//////////////////////////////////////


// const contenedor=document.querySelector('.contenedor')
// const boton=document.querySelector('.btn')




//  alumnos =[{

// nombre:"starlin johan",
// correo:"sistemcabral.27@gmail.com",
// materia:"fisica"
// },{
//   nombre:"JOSE",
//   correo:"JOSE.27@gmail.com",
//   materia:"QUIMICA"

// },{
//     nombre:"starlin johan",
//     correo:"sistemcabral.27@gmail.com",
//     materia:"fisica"
// }
// ,{
//   nombre:"starlin johan",
//   correo:"sistemcabral.27@gmail.com",
//   materia:"fisica"
// },{
//   nombre:"starlin johan",
//   correo:"elmenol072145544443@gmail.com",
//   materia:"naturalez"
// }
// ,{
//   nombre:"starlin johan",
//   correo:"sistemcabral.27@gmail.com",
//   materia:"fisica"
// } ,{
//   nombre:"starlin johan  cabral",
//   correo:"sistemcabral.27@gmail.com",
//   materia:"fisica"
// },

// {
//   nombre:"starlin johan",
//   correo:"sistemcabral.27@gmail.com",
//   materia:"fisica"
// }

// ]

// for(alumno in alumnos){

// let datos = alumnos[alumno];
// let nombre = datos["nombre"];
// let correo = datos["correo"];
// let materia = datos["materia"]

// let  htmlCode= `
//   <div class="informacion"> 
//  <div class="nombre">${nombre}</div>
//  <div class="correo">${correo}</div>
//  <div class="materia">${materia}</div>
//  <div class="semana">
//  <select class="semana-elegida">
//  <option >semana 1</option>
//  <option>semana  2</option>
//  <option >semana 3 </option>
//  <option>semana  4</option>
//  </select>
//  </div>
//  </div>
//  `;
// contenedor.innerHTML+=htmlCode;
// }

// boton.addEventListener("click", ()=>{

// const confirmar=confirm('quieres enviar esta informacion');

// if(confirmar){

// document.body.removeChild(boton);
// let elementos=document.querySelectorAll('.semana');
// let semanaElegida=document.querySelectorAll('.semana-elegida');
// for(elemento in elementos ){
//  semana=elementos[elemento];
// semana.innerHTML=semanaElegida[elemento].value;

// }

// }const matematica=document.querySelector('.matematica');



// const literatura = document.querySelector('.literatura');
// const matematica= document.querySelector('.matematica')

// const table=document.querySelector('.table');


// //  let  lunes;
// //  let  martes;
// //  let  jueves;
// //  let  viernes;
//     const materias=[
   
//           {
//             asignatura:"FISICA",
//             Maestro:'Lonardo PUJOLD',
//             campus:'0337',
//             aula:'A34',
//             horario:"8:00/10:00",
//             dia:'martes',
//             creditos:9
//                 },


//       {

//  asignatura:"INFORMATICA1",
//  Maestro:'Mario Rodriguez',
//  campus:'0333',
//  aula:'A23',
//  horario:"8:00/10:00",
//  dia:'lunes',
//  creditos:8
// },
    
// {

//   asignatura:"SOCIALES",
//   Maestro:'JOSE FERNANDEZ',
//   campus:'0333',
//   aula:'A23',
//   horario:"8:00/10:00",
//   dia:'miercoles',
//   creditos:8
//       }, 
//       {

//         asignatura:"INFORMATICA1",
//         Maestro:'ROSA PIMENTEL',
//         campus:'0337',
//         aula:'A34',
//         horario:"8:00/10:00",
//         dia:'miercoles',
//         creditos:2
//             },
//             {

//               asignatura:"FISICA CUANTICA",
//               Maestro:'ROSA PIMENTEL',
//               campus:'0337',
//               aula:'A34',
//               horario:"8:00/10:00",
//               dia:'viernes',
//               creditos:5
//                   },              
//     {
//                   asignatura:"sociologia",
//                   Maestro:'Fermin castro',
//                   campus:'0337',
//                   aula:'A34',
//                   horario:"8:00/10:00",
//                   dia:'jueves',
//                   creditos:2
//                       }                  
        
                                                 



//      ]
     

    
//    let numero=0; 

//     materias.forEach(element => {
//      numero++;
//      maestro=element.Maestro;
//      campus=element.campus;
//      aula=element.aula;
//      hora=element.horario;
//      dia=element.dia;
//      materia=element.asignatura;
//      creditos=element.creditos;
    
//      const datos=maestro+campus+aula+hora+materia+creditos;
    
// let codigo=`<tr class="div tr${numero}">
// <th>

// <input class="check" id="check${numero}" type='checkbox' value='${creditos}' checked='true' name="${datos}" >

// <label   class="materia${numero}"  for="check${numero}"></label>

// </th> 

// <th><label for="check"  class="select  lunes${numero}"></label></th>
// <th><label for="check" class="select  martes${numero}"></label></th> 
// <th ><label for="check" class="select  miercoles${numero}"></label></th>
// <th><label for="check" class="select jueves${numero}"></label></th>
// <th><label for="check"  class="select viernes${numero}"></label></th>

// </tr>`;
// datos2=maestro+campus+aula+hora;
// table.innerHTML+=codigo;


// if(dia=='lunes'){
// table.querySelector(`.materia${numero}`).textContent=element.asignatura;
// table.querySelector(`.lunes${numero}`).textContent=datos2;
// }
// else if(dia=='martes'){
//   table.querySelector(`.materia${numero}`).textContent=element.asignatura;
//   table.querySelector(`.martes${numero}`).textContent=datos2;
//   }
//   else if(dia=='miercoles'){
//     table.querySelector(`.materia${numero}`).textContent=element.asignatura;
//     table.querySelector(`.miercoles${numero}`).textContent=datos2;
//     }
//     else if(dia=='jueves'){
//       table.querySelector(`.materia${numero}`).textContent=element.asignatura;
//       table.querySelector(`.jueves${numero}`).textContent=datos2;
//       }
//     else if(dia=='viernes'){
//       table.querySelector(`.materia${numero}`).textContent=element.asignatura;
//       table.querySelector(`.viernes${numero}`).textContent=datos2;
//       }



//     })
  



//     const enviar=document.querySelector('.btn');
//      const check=document.querySelectorAll(".check");
    
//    const MateriaSelecionadas=document.querySelector('.selecionada')
//           enviar.addEventListener("click",()=>{
//           let creditos=[];
//          check.forEach(e=>{
           
//          if(e.checked==true ){

//            table.innerHTML=""; 
//       creditos.push(parseInt(e.value));
//       // anadir=()=>{  
//   lista=document.createElement('li');
//   lista.classList.add('lista');
//   lista.textContent=e.name; 
//   MateriaSelecionadas.appendChild(lista);
//   enviar.remove();
//       }
     
//        let creditosTotales=0;
// for (let i=0;  i<creditos.length; i++) { 
  
//     creditosTotales+=creditos[i];
 
// }
//      console.log(creditosTotales)

//     })
 

// })


// let url='https://reqres.in/api/users?page=2';
// fetch(url)
// .then(e=>e.json())
// .then(e=>console.log(e))



 

// borrar producto





//  carrito.querySelector('.deleiteELEMENT').addEventListener('click',()=>{

//   alert('hola')

//   })








// navegation.style=postion='fixed'


// enviarcantidad=(event)=>{
// input=event.target;

// console.log(input.value)
// }

// }

// }


 
//   carrito.appendChild(carta) 


// total(precio,ID,marca, )




  

// total=(precio,carta,carrito)=>{


// tabla=document.querySelector('.tabla')

// table.addEventListener('load',()=>{

//   total=parseInt(precio);

  


// })



// }



// })
//   // COMPRA.remove()
// let acumudPRECIODEPRODUCTO=[];
//   producto.forEach(e => {
//     if(e.checked){
//       acumudPRECIODEPRODUCTO.push(parseInt(e.value))
// // table.innerHTML='';
// carrito.innerHTML+=e.name;

//     }

    
//      console.log(acumudPRECIODEPRODUCTO)

// sumatotal=0;
// for(i=0; i<acumudPRECIODEPRODUCTO.length; i++){
// sumatotal+=acumudPRECIODEPRODUCTO[i];

// }

//   });
  


 
// })  











// let inputcantPRODCUCTO=document.getElementById('cantidad').value;
//   montototal=inputcantPRODCUCTO*sumadeproducto;
//   console.log(montototal)




///////////////////////////////////////////
///////////////////////////////////////////
// [control de flujo y manejo de errores]//
///////////////////////////////////////////
///////////////////////////////////////////

// let nombre=prompt('ingresa tu nombre');


// switch(nombre){
// case"starlin":
// alert('eres starlin')
// console.log('hola starlin no tienes que comprar nada')
// break;
// case"jose":
// console.log(`${nombre} compra tomates `)
// break;
// case"morales":
// console.log(`${nombre} compra peras`)
// break
// case"guzman":
// console.log(`${nombre} compra comida china`)
// break;

// default:alert('no son ninguno'),console.log('no es ninguno')
// }


// USUARIOS=JSON.stringify(indentidades);
// console.log(us)



// const indentidades= {
//     id:'12',nombre:"jose", apellido:"pina",nacimiento:"27,de Febrero 2021",

//   }



// const animales=['perro', 'gato','perro'];
// document.querySelector()




// try {
// apideprueba';
// // i(indentidades);
// // youtu='https://www.youtube.com/watch?v=xOinGb2MZSk&t=14285s';

// fetch(apideprueba)
// .then(e=>e.json())

// .then(info=>{
// console.log(info.data)

// const contenido= info.data.map(el=>{

//   return`<li class="contenedor">

//   <div class="imagen">
    
// <img src="${el.avatar}" alt="">
// </div>


// <div class="contenido">
// <span class="nombre">${el.first_name}</span>
// <span class="apellido">${el.last_name}</span>

// </div>

// <p class="correo">${el.email}</p>

// </li>`

// })

// document.querySelector('.lista').innerHTML=contenido;

// })
// // if(!indentidades.id) throw new  SyntaxError('falta el ID')

// //  if (indentidades.nombre="jose")throw('nombre correcto')
// } 

// catch (error) {
  
//  if(error instanceof SyntaxError)console.error("faltan recursos",error);

//   else throw error;

// }
// finally{

// console.log('hola')

// }



//callback ////
// const formu=document.querySelector('.formulario')

//  function saludar(numero,cb,cb2){


//  }
    
//  saludar('12', (cb)=>console.log('hola'),()=>{console.log('como estas')})


// hay un condicionamiento dentro de la funcon que se le pasa como paramentro la 
// funcion 

//  function procesarEntradaUsuario(callback){
//      enviar=document.querySelector('.enviar')
//      enviar.addEventListener('click',()=>{

//    let nombre=document.getElementById('nombre').value;
//    let apellido=document.getElementById('apellido').value;
//    let imagen=document.getElementById('file').src;
  
//   validarcampos(nombre,apellido,imagen)

//      })

  
  
//  }

// function validarcampos(nombre,apellido,imagen){
    
// if(nombre.length===0 || apellido.length===0){
//      alert('faltan campos por llenar')
// }

//  else{ saludar(nombre,apellido,imagen)
// insertar(imagen,nombre,apellido,imagen)

//  }




// }

// function saludar(nombre,apellido,imagen){
//  alert(`Bienvenido ${nombre} ${apellido}`)

// }

// function insertar(imagen,nombre,apellido){
// mostrar=document.querySelector('.mostrar')
// mostrar.querySelector('img').src=imagen;
// mostrar.querySelector('h1').textContent=`bienvenido ${nombre} ${apellido}`;
// }





 



// callback ejemp 2 con promesa


// class personas{

// constructor(nombre,instagram){
// this.nombre=nombre
// this.instagram=instagram


// }

// }


// const datos=[['pedro','pedro@gmail.com'],
//                 ['maria','maria@hotmail.com'],
//                 ['fenando','FERNADO@hotmail.com'],
//                 ['jose perez']
// ] 



//  const usu=[];

// for(i=0; i<datos.length; i++){
// usu[i]=new personas(datos[i][0],datos[i][1]);

// }


// obtenerNombre=(id)=>{

// return new Promise((resolve, reyect)=>{
// if(usu[id].nombre===undefined)reyect('el nombre no se ecuentra')

// else resolve(usu[id].nombre)


// })

// }

// obtenerInstagram=(id)=>{
//   return new Promise((resolve, reyect)=>{
//   if(usu[id].instagram===undefined)
//   reyect('el intagram no se encuenta')
  
//   else resolve(usu[id].instagram)
 
//   })
//   }


// obtenerNombre(1).then((nombre)=>{
// console.log(nombre)
// return obtenerInstagram(3);
// }).then((instagram)=>{
//   console.log(instagram)
// }).catch((e)=>{console.log(e)})




// promesas
const datos=[
  { nombre:'Matematicas',
  id:6 },
  {
  nombre:'programacion2',
  id:5
  },
    
  
  {
  nombre:'sociales',
  id:1
  },
  
  {
    nombre:"lenguaje",
    id:30
    },
    {
      nombre:'fisica nuclear',
      id:23
      },     
      {
        nombre:'biologia 3',
        id:9
        }    
  
  ]
// datos=[]
// function obtenermate(id){

// return new Promise ((resolve,reject)=>{

// if(datos[id]==undefined){
// reject(new Error('lo siento la informacion no se ecuentra'));
// }

// else setTimeout( ()=>{
//   resolve(datos[id])
// },Math.random()*2000)

// })

// }

// function obtenermate(){

//   return new Promise ((resolve,reject)=>{
  
//   if(datos==undefined){
//   reject('lo siento la informacion no se ecuentra');
//   }
  
//   else setTimeout( ()=>{
//     resolve(datos)
//   },Math.random()*2000)
  
//   })
  
//   }

// funciones asincronas
// que estas sirven para pedir los datos de manera ordenada o esperar que los datos 
// esten listos para imprimirse estos se usan con la promise 

//  async function mostrardata(){
 
 
//  for(i=0; i<datos.length; i++){
// try {
//  prome= await obtenermate(20) 
// nombre=prome.nombre
// id=prome.id
// code=`<div class="nombre">${nombre}</div>
// <div class="id">${id}</div>
// `;
// materias=document.querySelector('.mostrar').innerHTML+=code; 
// } catch (error) {
//   console.log(error.message)
// }

//    }

 
 
// } 
  

// mostrardata()


// metodo .then 
// este nos permite capturar la informacion general si la peticion a un 
// servidor se llevo acabo exitosamente

//     obtenermate().then((datos)=>{

//  for(i=0; i<datos.length; i++){

//      nombre=datos[i].nombre
// id=datos[i].id

// code=`<div class='nombre'>${nombre}</div>
// <div class='id'>${id}</div>
// `
// materias=document.querySelector('.mostrar').innerHTML+=code;
 
//  }

//el ten esta acompanado del catch que este se encarga de retornar el error que se quiere
//expresar
// }).catch((e)=>{

// console.log(e)

// })







// usar peticiones asincronas con fecth api
// window.addEventListener('load',mostrar())
// function mostrar(){
  // try{
  

//     async function apiprueba(){
//       const materias=document.querySelector('.mostrar');
//       const urla='https://reqres.in/apiusers?page=2';
//       const url='https://jsonplaceholder.typicode.com/todos/1'
  
// try {

//   const api = await fetch(urla)
  
// if(api.status==200){

//      const datos=await api.json();   
                     
//   datos.data.forEach(element => {
//     let nombre=element.first_name;
//     let id=element.id;
//       let email=element.email

// let code=`<div>
//     <div>${nombre}</div>
//       <div>${id}</div>
//       <p>${email}</p>
//       </div>
//       `;
//  materias.innerHTML+=code;
// })

// }

// } catch (error) {
//   console.log('ocurrio un error')
// }

// }

// apiprueba()




//  }
//   }}



// const btnAPI=document.querySelector('.btn__mostrar');

// btnAPI.addEventListener('click',apiprueba)



//  async function apiprueba(){

//     const materias=document.querySelector('.mostrar');
//     const urla='https://reqreS.in/api/users?page=2';
//     const url='https://jsonplaceholder.typicode.com/todos'

    
 
//     try {
      
//   const  peticionApi = await fetch(urla) 
//   if(peticionApi.status===200|| peticionApi.status<300){

//    const infoJSON=await peticionApi.json();
   
//      infoJSON.data.forEach(element => {
//            let nombre=element.first_name;
//            let id=element.id;
//              let email=element.email
//              let avatar=element.avatar;
//        let code=`<div style='background:#246; text-align:center ; '>
//        <img src='${avatar}'>
//            <div style='color:red; font-family:fantasy;'>${nombre}</div>
       
//              <p style=' color:white;font-size:14px;'>${email}</p>
             
//              </div>
//              `;
//         materias.innerHTML+=code;
     
//    })

// }
// else if(peticionApi.status==404) throw 'soy un error 404 lo que significa que tu peticion no se encuentra'; 


      
    
//   }catch(error) {
//       document.write(error)
//     }

    
 
//   }

//////////////////////////////////////////////////////////
  // trayendo informacion de una api de manera asincrona////
// ///////////////////////////////////////////////////
 const conten=document.querySelector('.titulo1')

// conten('.contendorONE').remove();

const btnINFO=document.querySelector('.btn_info')
async function obtenerinfo(){
 
const conten=document.querySelector('.contentTotal')

try {
 const conectionDATABASE= await fetch('api.txt');
const tranformardatos= await conectionDATABASE.json();

conten.querySelector('.promovido').innerHTML=tranformardatos.aprobados;
conten.querySelector('.reprobado').innerHTML=tranformardatos.desaprobados;
} catch (error) {
  conten.querySelector('.promovido').innerHTML='data no econtrada';
conten.querySelector('.reprobado').innerHTML='data no encontrada';
}

}

btnINFO.addEventListener('click', obtenerinfo)

// const fecha=new Date();
// console.log(fecha.getYear()+1900)
// console.log(fecha.getMonth())
// console.log(fecha.getDay())

// document.write( fecha.getYear()+1900,
// fecha.getMonth(),
// fecha.getHours()
// )





// const form=document.getElementById('data_deport')

// form.addEventListener('submit',(event)=>{
//   salida=document.querySelector('.salida')
// event.preventDefault();
//   let  data_deport=new FormData(form);

//   nombre=data_deport.get('nombre')
//   edad=data_deport.get('edad')
//   estatura=data_deport.get('estatura')
//   piel=data_deport.get('piel')
//   imagen=data_deport.get('imagen')
  


// })






// url='https://reqres.in/api/users'
    //  fetch("",{
    //  method:"POST", 
    //  body:`{"nombre":"starlin","Apellido":"cabral"}`,
    //   headers:{"Content-Type":"application/json"}
    // }).then(e=>e.json())
    // .then(e=>console.log(e.nombre))



  // const json=await response.json(); 
  // console.log(json)
  // }

  // postData('https://reqres.in/api/users')

// function obtenerapi(){
//   url= 'https://reqres.in/api/users?page=2'
//   peticion=fetch(url);

// return new Promise((resolve,reject)=>{
  
// if(peticion.status==404 ){
//    reject('lo sentimos el nombre no esta definido')
   
// }
// else if (peticion.status=200){ resolve(peticion)}
// })

// }


// async function resultado(){
// const datos= await obtenerapi();
// const JESON= await datos.json();

// for(i=0; i<JESON.data.length;  i++){
//  console.log(JESON.data)

// }
// }

// resultado()



// function obtenerapi(){
//   url= 'https://reqres.in/api/users?page=2'
//   peticion=fetch(url);

// return new Promise((resolve,reject)=>{
 
//   if (peticion.status=200){
//     setTimeout(()=>{
//        resolve(peticion)
//      },3500);
     
//    }else if(peticion.status==404)reject('lo sentimos el nombre no esta definido')
   


// })

// }


//   function resultado(){
   
// const datos=  obtenerapi();
// console.log(datos)


// }

// resultado()





// nivel master del curso de javascrip


// prototipos 
// const objeto={
//   hablar(){
//     alert('hello')
    
//     }
    

// };

// objeto.__proto__.hablar=()=>{
// alert('hola')

// }


// this.nombre='johan';
//  const pedir=()=>{
// console.log(`mandame un tenis ${this.nombre}`)
// }
// const cosa={
// nombre:'starlin',
// pedir

// }
// cosa.pedir()


// parametro rest////
///////////////////
// function active (...num){
//   for(let i=0; i<num.length; i++){
//     console.log('hola')
//   }
// }

// active(2,2,3,7,3,4,5,6,7)

//  const arrys1=['mazana','Pera','Guineo']
// const  arrys2=['uva','carne','arroz','sopita','cuaderno','naranja','cocholate']

// arrys1.push(...arrys2)
// console.log(arrys1)

// destructuracion//////////
//////////////////////


/////operador ternario////
//////////////////////////

// let edad=100;
// (edad<=20) ?console.log('es mayor de edad puede entrar')
//           :console.log('no puede pasar es menor de edad')
// (edad>=20)(console.log('es muy adulto'))



// apIs y  data de tiempo minutos y segundo y fecha
// const cero=(n)=>{
//   if(n.toString().length<2)return '0'.concat(n)
//   return n;
//   }
  
  
  
//   function actualizarTime(){
    
//   const relojTime=document.querySelector('.time');
//     const fecha=new Date();
//     let hora=cero(fecha.getHours())
//     let minutos=cero(fecha.getMinutes())
//     let segundos=cero(fecha.getSeconds())
    
//   relojTime.querySelector(".hora").textContent=hora;
//   relojTime.querySelector(".minut").textContent=minutos;
//   relojTime.querySelector(".seg").textContent=segundos;
  
//   }
  
//   actualizarTime()
//   setInterval(actualizarTime,1000);
  
  
  
  // localStorage and sessionStorage////
  /////////////////////////////////////
  
  // localStorage.setItem('nombre',"starlin")
  
  // let obtener=localStorage.setItem("nombre",'jose')
              // sessionStorage // getItem
  // console.log(localStorage)
  // console.log(localStorage)




  //////////////////////////
  //////Drag & drop///////pendiente
  //
  // const caja1=document.querySelector(".caja1");
  // const cajac=document.querySelector(".retangulo");

  // caja1.addEventListener('dragstart',()=>console('hola'))
  // caja1.addEventListener('dragstart',()=>alert('tu'))
//   caja1.addEventListener("dragstart",(e)=>{

// e.dataTransfer.setData("texto",e.target.className);




//   });

//   cajac.addEventListener("drop",(e)=>{
//     // e.preventDefault();
//     console.log(e.dataTransfer.getData("texto"))
    
// //  console.log('hola')
   
//       });

    //eventos de movimiento /
    // "dragenter"
    // 'dragover'
   // 'drop'
   //dragleave


// /////////////////////////
///////geolocalizacion/////////
//////////////////////////
// objeto navigator con geolocation
// const geoLoca= navigator.geolocation;

// console.log(geoLoca)

// funciones para obtener  cordenadas
// const posicion=(pos)=>{
// console.log(pos)
// document.write(pos.coords.longitude)
// document.write(pos.coords.latitude)

  

// }

// const error=(err)=>console.log(err)
// const Options={

// Timeout:10000,
// }


// metodos para obtener coordenadas
// geoLoca.getCurrentPosition(posicion,error,Options)
// para ver coordenadas en tiemporeal
// geoLoca.watchPosition(posicion)


// api history////
///////////////\//
// history.pushState({
//    nombre:'starlin' // cambiar ubicacion herff
// },"", "?eo")

// remplaza lo que esta en el hIstorial
// history.pushState({
// gg:'jej' // cambiar ubicacion herff
// },'', "?hola")

// confirmar el cambio
// te da la url completa de la pagina
// location.href 
// console.log(location.href)


// eventos de  history

// window.addEventListener('popstate',(e)=>{
// console.log(e.state)
// alert('hhhh')

// })


//////////////////////////////////////
////////////api fileReader //////////////////////////
////////////////////////////////////

// esta es una api que nos permite leer los datos que nos manda el usuario
// const  data=document.getElementById('datos');

// data.addEventListener('change',()=>{
//   // alert('helllo')
// // input.files[0] 
// console.log(data.files)
// lectura(data.files)
// })

// const lectura=(dt)=>{
//   let objetolectura= new FileReader();
//   for(let i=0; i<dt.length; i++){


// objetolectura.readAsDataURL(dt[i])
// // metodo para leer imagenes 
// // se puede leer diferentes archiso asendiendo a su prototipo
// objetolectura.addEventListener('load',(e)=>{
//   console.log(e)
//   imagen=document.querySelector('.imagenes').innerHTML+=`<img src='${e.currentTarget.result}'>`

// })
// // }
// }
// }



const Zona_arrastre=document.querySelector('.zona')
const galeria=document.querySelector('.galeria')



Zona_arrastre.addEventListener('dragover',(e)=>{
cambiostyle(e.target,'blue')
e.preventDefault();
// alert('hola')
})
const cambiostyle=(objet,color)=>{
objet.style.color=`${color}`;

}

Zona_arrastre.addEventListener('drop',(e)=>{
console.log(e)
cargarimagen(e.dataTransfer.files[0])
e.preventDefault();
  })
  
function cargarimagen(arch){
const object= new FileReader();
object.readAsDataURL(arch)

object.addEventListener('load',(e)=>{

  let url=URL.createObjectURL(arch)
  let imagen=document.createElement('IMG')
  imagen.classList.add('imagen')
  imagen.setAttribute('src',url)
  galeria.appendChild(imagen)


})

  }




// PARA CONSULTAR LOS METODOS O PROTOTIPOS DE LECTURA 
// objetolectura= new FileReader();
// console.log(objetolectura)