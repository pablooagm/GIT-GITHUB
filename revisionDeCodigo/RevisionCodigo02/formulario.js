//La class de form en tl html tiene como nombre formulario y no form, ademas accedemos por class y no por Id
var formulario = document.querySelector('.formulario');

formulario.onsubmit = function(e) {
//el metodo es preventDault(); no unicamente prevent();
  e.preventDefault();
  
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}

//Quitamos boton de eliminar invitado generado antes agregar un invitado.
/*var botonBorrar = document.createElement("button")*/
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
/*document.body.appendChild(botonBorrar);*/

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

//el id de este elemento (div) se agrega en la estructura html
var lista = document.getElementById("lista-de-invitados");

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

/*
var spanNombre = document.createElement("span")

//Se cambia el tipo de etiqueta HTML, de input a span, para evitar la modificación del campo

var inputNombre = document.createElement("span")
var espacio = document.createElement("br")

//Se elimina el campo Nombre ya que aparecia dos veces repetido
/*
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
*/

/*
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)*/


function crearElemento(descripcion, valor) {
var spanNombre = document.createElement('span');
var inputNombre = document.createElement('span');
var espacio = document.createElement('br')
spanNombre.textContent = descripcion + ": "
//Se modifico el metodo value a textContent
inputNombre.textContent = valor;
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}