verificarFormulario = () => {
    const validarNombreRespuesta = validarNombre ();
    const validarContrasenaRespuesta = validarContrasena();
    const validarCedulaRespuesta = validarCedula ();
    const validarCiudadRespuesta = validarCiudad ();
    const validarTelefonoRespuesta = validarTelefono ();
    const validarCorreoRespuesta = validarCorreo ();
    const validarConfirmaContrasenaRespuesta = validarConfirmarContrasena();
   

    if (validarNombreRespuesta && validarCedulaRespuesta  && validarConfirmaContrasenaRespuesta && validarContrasenaRespuesta &&  validarCiudadRespuesta && validarTelefonoRespuesta && validarCorreoRespuesta  ){
        window.location.href = "/usuarios"
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
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una cédula</span   >';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;
    } else if (!expresion.test(cedula)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite numeros</span>';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;
    } else if (cedula.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su cedula tiene que ser mayor a 6 caracteres numericos</span>';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;
    } else if (cedula.length > 11) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su cédula tiene que ser menor a 11 carcateres numericos</span>';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;    
    }else{
      document.getElementById('errorCedula').innerHTML = '';
      return true;
    } 
}


validarCiudad = () => {
    let ciudad = document.getElementById('ciudad').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (ciudad === null || ciudad === '' || ciudad.length === 0) {
     
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una apellido</span>';
      document.getElementById('errorCiudad').innerHTML = texto;
      return false;
    } else if (ciudad.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El apellido debe de ser mayor a 3 letras</span>';
      document.getElementById('errorCiudad').innerHTML = texto;
      return false;
    } else if (!expresion.test(ciudad)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorCiudad').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorCiudad').innerHTML = '';
      return true;
    }
  };

  validarContrasena = () => {
    let contrasena = document.getElementById('contrasena').value;
    let texto;
    let expresion = /^(?=.d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;
  
    if (contrasena === null || contrasena === '' || contrasena.length === 0) {
     
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una contraseña</span>';
      document.getElementById('errorContrasena').innerHTML = texto;
      return false;
    } else if (contrasena.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre de la contrasena debe de ser mayor a 3 digitos</span>';
      document.getElementById('errorContrasena').innerHTML = texto;
      return false;
    } else if (!expresion.test(contrasena)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten numero y letras</span>';
      document.getElementById('errorContrasena').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorContrasena').innerHTML = '';
      return true;
    }
  };



  validarConfirmarContrasena = () => {
    let confirmarContrasena = document.getElementById('confirmarcontrasena').value;
    let texto;
    let expresion = /^(?=.d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;
  
    if (confirmarContrasena === null || confirmarContrasena === '' || confirmarContrasena.length === 0) {
     
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Confirme la contraseña</span>';
      document.getElementById('errorConfirmarContrasena').innerHTML = texto;
      return false;
    } else if (confirmarContrasena.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Confirmar de la contraseña debe de ser mayor a 3 digitos</span>';
      document.getElementById('errorConfirmarContrasena').innerHTML = texto;
      return false;
    } else if (!expresion.test(confirmarContrasena)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten numero y letras</span>';
      document.getElementById('errorConfirmarContrasena').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorConfirmarContrasena').innerHTML = '';
      return true;
    }
  };




validarTelefono = () => {
    let telefono = document.getElementById('telefono').value.trim();
    let texto;
    let expresion = /^[0-9]+$/;
  
    if (!telefono) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese su número de teléfono.</span>';
        document.getElementById('errorTelefono').innerHTML = texto;
        return false;
    } else if (telefono.length < 10) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su número de teléfono debe tener al menos 10 dígitos.</span>';
        document.getElementById('errorTelefono').innerHTML = texto;
        return false;
    } else if (!expresion.test(telefono)) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo números en su número de teléfono.</span>';
        document.getElementById('errorTelefono').innerHTML = texto;
        return false;
    }else{
      document.getElementById('errorTelefono').innerHTML = '';
      return true;
    }
};



validarCorreo = () => {
    let correo = document.getElementById('correo').value.trim();
    let texto;
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;3
  
    if (!correo) {      
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese su dirección de correo electrónico.</span>';
        document.getElementById('errorCorreo').innerHTML = texto;
        return false;
    } else if (!expresion.test(correo)) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de correo electrónico válida.</span>';
        document.getElementById('errorCorreo').innerHTML = texto;
        return false;
    }else {
      document.getElementById('errorCorreo').innerHTML = '';
      return true;
    }
}



const boton = document.querySelector('#formulario')

boton.addEventListener('click',verificarFormulario)

