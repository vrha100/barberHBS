verificarFormulario = () => {
    const validarNombreEmpleadoRespuesta = validarNombreEmpleado();
    const validarNombreClientedoRespuesta = validarNombreCliente ();
    const validarServiciodoRespuesta = validarServicio ();
    const validarFechaIngresoRespuesta = validarFechaIngreso ();



    if (validarNombreEmpleadoRespuesta && validarNombreClientedoRespuesta && validarServiciodoRespuesta && validarFechaIngresoRespuesta ){
        window.location.href = "/citas"
    }
}


validarNombreEmpleado = () => {
    let nombre = document.getElementById('empleado').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un empleado</span>';
      document.getElementById('errorempleado').innerHTML = texto;
      return false;
    } else if (nombre.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El empleado debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorempleado').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombre)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorempleado').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorempleado').innerHTML = '';
      return true;
    }
  };



  validarNombreCliente = () => {
    let nombre = document.getElementById('cliente').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un cliente</span>';
      document.getElementById('errorcliente').innerHTML = texto;
      return false;
    } else if (nombre.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre del cliente debe ser mayor o igual a 3 letras</span>';
      document.getElementById('errorcliente').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombre)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorcliente').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorcliente').innerHTML = '';
      return true;
    }
  };


  validarServicio = () => {
    let nombre = document.getElementById('servicio').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un servicio</span>';
      document.getElementById('errorservicio').innerHTML = texto;
      return false;
    } else if (nombre.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El servicio debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorservicio').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombre)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorservicio').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorservicio').innerHTML = '';
      return true;
    }
  };


  validarFechaIngreso = () => {
    let nombre = document.getElementById('FechaIngreso').value;
    let texto;
    let expresion = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un fecha de ingreso"</span>';
      document.getElementById('errorFecha').innerHTML = texto;
      return false;
    } else if (nombre.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;"></span>';
      document.getElementById('errorFecha').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombre)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;"></span>';
      document.getElementById('errorFecha').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorFecha').innerHTML = '';
      return true;
    }
  };



  



const boton = document.querySelector('#formulario')

boton.addEventListener('click',verificarFormulario)

