const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita que el formulario se envíe

    const codigo = formulario.password.value.trim();

    if (codigo.length === 0) {
        alert('Por favor ingrese un código de verificación');
        return;
    }

    const password = formulario.password.value.trim();

    if (password.length < 6 || !/^[a-zA-Z0-9]+$/.test(password)) {
        alert('Por favor ingrese una contraseña válida de al menos 6 caracteres alfanuméricos');
        return;
    }

    // Si se llega a este punto, los valores son válidos y el formulario puede ser enviado
    formulario.submit();

    // Redirigir a otra página después de enviar el formulario
    window.location.href = '/NuevaCons';
});


