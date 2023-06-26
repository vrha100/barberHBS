const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // Evita que el formulario se envíe

  const email = formulario.email.value.trim();
  const password = formulario.password.value.trim();


if (!email) {
  alert('Por favor ingrese una dirección de correo electrónico');
} else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
  alert('Por favor ingrese una dirección de correo electrónico válida');
} else {
  // El correo electrónico es válido, puedes continuar con el código adicional aquí
}

  if (password.length < 6) {
    alert('Por favor ingrese una contraseña de al menos 6 caracteres');
    return;
  }

  // Si se llega a este punto, los valores son válidos y el formulario puede ser enviado
  formulario.submit();

  // Redirigir a otra página después de enviar el formulario
  window.location.href = '/';
});
