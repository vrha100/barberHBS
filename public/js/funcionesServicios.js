verificarFormulario = () => {
    const validarNombreRespuesta = validarNombre ();
    const validarCedulaRespuesta = validarCedula ();
;
   


    if (validarNombreRespuesta && validarCedulaRespuesta){
        window.location.href = "/servicios"
    }
}


validarNombre = () => {
    let nombre = document.getElementById('nombre').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un nombre</span>';
      document.getElementById('errorNombre').innerHTML = texto;
      return false;
    } else if (nombre.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorNombre').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombre)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorNombre').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorNombre').innerHTML = '';
      return true;
    }
  };


validarCedula = () => {
    let cedula = document.getElementById('cedula').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (cedula === null || cedula === '' || cedula.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una valor</span   >';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;
    } else if (!expresion.test(cedula)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite numeros</span>';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;
    } else if (cedula.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su valor tiene que ser mayor a 6 caracteres numericos</span>';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;
    } else if (cedula.length > 11) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su valor tiene que ser menor a 11 carcateres numericos</span>';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;    
    }else{
      document.getElementById('errorCedula').innerHTML = '';
      return true;
    } 
}





const boton = document.querySelector('#formulario')

boton.addEventListener('click',verificarFormulario)

