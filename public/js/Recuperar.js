const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita que el formulario se envíe

    const email = formulario.email.value.trim();

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert('Por favor ingrese una dirección de correo electrónico válida');
        return;
    }

    // Si se llega a este punto, el valor del correo electrónico es válido y el formulario puede ser enviado
    formulario.submit();

    // Redirigir a otra página después de enviar el formulario
    window.location.href = '/Codigo';
});
