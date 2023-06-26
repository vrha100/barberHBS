const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita que el formulario se envíe

    const password1 = formulario.password1.value.trim();
    const password2 = formulario.password2.value.trim();

    if (password1.length < 8 || !/^[a-zA-Z0-9]+$/.test(password1)) {
        alert('Por favor ingrese una contraseña válida de al menos 8 caracteres alfanuméricos');
        return;
    }

    if (password1 !== password2) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Si se llega a este punto, los valores son válidos y el formulario puede ser enviado
    formulario.submit();

    // Redirigir a otra página después de enviar el formulario
    window.location.href = '/Login';
});
