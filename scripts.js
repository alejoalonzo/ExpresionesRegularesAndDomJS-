/*Apartado 1
Realiza un formulario que pida una dirección de email y la valide antes de enviarla:
a) Debe validar si el email sigue el formato texto@servidor.loquesea
b) Además de validar el formato anterior, debe comprobar que servidor.loquesea este
como servidor admitido en un array de servidores llamado “listaServidores”.
Dicho array debe ser definido a mano en el código.
Ejemplo
listaServidores=[“terra.es”,”google.com”,”marca.es”,”yahoo.es”];  */

function comprobarEmail() {
  var mail = document.getElementById("exampleInputEmail1").value;
  var listaServidores = ["terra.es", "google.com", "marca.es", "yahoo.es"];
  var regexLargo =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexLargo.test(mail)) {
    //la funcion test() commpara el String con la expresion regular
    alert("Mail correcto");
    var arrayMail = mail.split(""); //El string obtenido la separo en caracteres y los meto en un array.
    var posicion = arrayMail.indexOf("@"); // busco el caracter anterior al servidor.

    //busco el ultimom trodo del mail introducido con el metodo slice() sin un segundo parametro para que me corte desde la @ hasta el final,
    //y el +1 para que no me cuente la @
    var serverIntroducido = arrayMail.slice(posicion + 1);
    var serverIntroducidoStr = serverIntroducido.join(""); //lo convierto a string

    //Finalmente comparo el server introducido con los de mi lista
    if (listaServidores.includes(serverIntroducidoStr)) {
      alert("Server correcto");
    } else {
      alert("Server incorrecto");
    }
  } else {
    alert("Mail incorrecto");
  }
}

/*Apartado 2
Realiza un formulario con dos elementos “select”. Al cambiar el primero, se actualizará el
segundo. Al enviar el formulario, se comprobará que ambos han sido marcados.
Cuando no tengan ninguna selección previa, los “select” mostrarán “Selector no
seleccionado”.
Los valores del primer “select” serán “Madrid”, “Barcelona”, “Valencia”. Por defecto no
habrá ninguno seleccionado.
Los valores del segundo “select” son:
• Para Madrid: “Madrid Capital”, “Alcalá de Henares”, “Alcorcón”.
• Para Barcelona: “Barcelona Capital”, “Badalona”, “Mataró”.
• Para Valencia: “Valencia Capital”, “Torrent”, “Mislata”. (Aquí saldrá por defecto
seleccionado “Mislata”). */

function cambiarSelector() {
  var provincia = document.getElementById("selectorProvincia").value;

  if (provincia == "madrid") {
    document.getElementById("ciudad1").innerHTML =
      '<option  id="ciudad1" value="1">Madrid Capital</option>';
    document.getElementById("ciudad2").innerHTML =
      '<option  id="ciudad2" value="2">Alcalá de Henares</option>';
    document.getElementById("ciudad3").innerHTML =
      '<option  id="ciudad3" value="3">Alcorcón</option>';
  } else if (provincia == "barca") {
    document.getElementById("ciudad1").innerHTML =
      '<option  id="ciudad1" value="1">Barcelona Capital</option>';
    document.getElementById("ciudad2").innerHTML =
      '<option  id="ciudad2" value="2">Badalona</option>';
    document.getElementById("ciudad3").innerHTML =
      '<option  id="ciudad3" value="3">Mataró</option>';
  } else if (provincia == "valencia") {
    document.getElementById("ciudad1").innerHTML =
      '<option  id="ciudad1" value="1">Valencia Capital</option>';
    document.getElementById("ciudad2").innerHTML =
      '<option  id="ciudad2" value="2">Torrent</option>';
    document.getElementById("ciudad3").innerHTML =
      '<option  id="ciudad3" value="3">Mislata</option>';
    document.getElementById("seccionado2").innerHTML =
      '<option  id="ciudad3" value="3">Mislata</option>';
  }
}

/*Ejercicio DOM (6 ptos.)
Apartado 1
Escribir un programa en Javascript en el que se muestre un párrafo y dos botones para
aumentar y disminuir el tamaño de la fuente del citado párrafo */

function aumentartamano() {
  document.getElementById("parrafo1").style.fontSize = "2rem";
}
function disminuirtamano() {
  document.getElementById("parrafo1").style.fontSize = "0.5rem";
}

/*Apartado 2
Escribir un programa en Javascript en el que al hacer clic sobre un párrafo y
clonarlo para insertarlo alternativamente al principio y al final de los párrafos*/
function clonar() {
  var clon = document.getElementById("clonarParrafo");
  var clonNuevo = clon.cloneNode(true);
  var texto = clon.innerHTML;
  clon.innerHTML =
    clonNuevo.innerHTML + " - " + clon.innerHTML + " - " + clonNuevo.innerHTML;
}

/*Apartado 3
A partir de una página con varios párrafos se pide vaciar todos menos el primero
y que el primero contenga el texto de todos.*/

function vaciarUnirParrafos() {
  //captura
  var miPa1 = document.getElementById("P1");
  var miPa2 = document.getElementById("P2");
  var txtParrafo2 = miPa2.innerHTML;
  var miPa3 = document.getElementById("P3");
  var txtParrafo3 = miPa3.innerHTML;

  //crear
  var p2 = document.createElement("span");
  var textop2 = document.createTextNode("-  " + txtParrafo2);
  p2.appendChild(textop2);
  miPa1.appendChild(p2);

  var p3 = document.createElement("span");
  var textop3 = document.createTextNode("-  " + txtParrafo3);
  p3.appendChild(textop3);
  miPa1.appendChild(p3);

  //vaciar
  document.getElementById("P2").style.display = "none";
  document.getElementById("P3").style.display = "none";
}
