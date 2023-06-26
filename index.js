const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8083

//Servidor de contenido estatico
app.use(express.static('public'))


//Configuración del directorio de las vistas hbs
app.set('views',path.join(__dirname+'/public/views'))
app.set('view engine','hbs')


//Configuración del directorio que guardará los archivos partials hbs
hbs.registerPartials(__dirname+'/public/partials');

app.get('/',(req, res) => {
    res.render('index')
})


app.get('/Login',(req, res) => {
    res.render('Login')
})

app.get('/Recuperar',(req, res) => {
    res.render('Recuperar')
})

app.get('/Codigo',(req, res) => {
    res.render('Codigo')
})

app.get('/NuevaCons',(req, res) => {
    res.render('NuevaCons')
})

app.get('/clientes', (req, res) => {
    const clientes = [
        {
            numeroIdentificacion : '910.251.426-1',
            nombreComercial : 'Insubordados',
            ciudad : 'Mosquera',
            dirección : 'CL 15 47A 78',
            telefono : '604 152 6448',
            correo : 'compras@ibd.com.co',
            estado: 'Activo'
        },
        {
            numeroIdentificacion : '910.251.426-1',
            nombreComercial : 'Insubordados',
            ciudad : 'Mosquera',
            dirección : 'CL 15 47A 78',
            telefono : '604 152 6448',
            correo : 'compras@ibd.com.co',
            estado: 'Activo'
        },
        {
            numeroIdentificacion : '910.251.426-1',
            nombreComercial : 'Insubordados',
            ciudad : 'Mosquera',
            dirección : 'CL 15 47A 78',
            telefono : '604 152 6448',
            correo : 'compras@ibd.com.co',
            estado: 'Activo'
        }
    ];
    res.render('clientes', { 
        titulo : 'Countech',
        user_name : 'feliciano Mosquera', 
        consecutivo: 'Clientes',
        listaClientes: clientes
    });
})

app.get('/empleados', (req, res) =>{
    const empleados = [
        {
            idEmpleado : 1,
            cedula : '1017254789',
            nombre : 'Elizabeth',
            correo : 'eliza@gmail.com',
            telefono : '604 152 7587',
            ciudad : 'Bello',
            direccion : 'Av 47 15a 23',
            fechaIngreso : '12/06/2023',
            estado : 'Activo'
        },
        {
            idEmpleado : 2,
            cedula : '1020458781',
            nombre : 'Sorany Serrano',
            correo : 'Manuela@gmail.com',
            telefono : '311 251 4187',
            ciudad : 'Bello',
            direccion : 'Av 48 15 48',
            fechaIngreso : '18/06/2023',
            estado : 'Activo'
        },
        {
            idEmpleado : 3,
            cedula : '1017452187',
            nombre : 'Cesar Torres',
            correo : 'cesar@hotmail.com',
            telefono : '311 154 7814',
            ciudad : 'Bello',
            direccion : 'CR 15 48 78',
            fechaIngreso : '15/06/2023',
            estado : 'Activo'
        }
    ];
    res.render('empleados',{
        titulo : 'Countech',
        user_name : 'feliciano Mosquera', 
        consecutivo: 'Empleados',
        listaEmpleados: empleados
    })
})


app.get('/citas', (req, res) =>{
    const citas = [
        {
            empleado : 'lUIS ROJAS',
            cliente : 'Juan Perea',
            servicio : 'barba',
            FechaIngreso : '12/05/2023',
            estado : 'Activo'
        },
        {
            empleado : 'Carlos ruiz',
            cliente : 'Alejandro',
            servicio : 'corte',
            FechaIngreso : '02/06/2023',
            estado : 'Activo'
        }
       
    ];
    res.render('citas',{
        titulo : 'Sionbarbershop',
        user_name : 'feliciano Mosquera', 
        consecutivo: 'Empleados',
        listaCitas: citas
    })
})

app.get('/usuarios',(req, res) =>{
    const usuarios = [
        {
            nombre : 'Luis',
            Apellido : 'Mosquera',
            cedula : 201152,
            correo : 'feli@gmail.com',
            telefono : 55555455,
            direccion : 'calle 4565 # 5',
            Contrasena : '******',
            ConfirmarContrasena : '******',
            estado : 'Activo'
      },
      {
        nombre : 'Mariana',
        Apellido : 'ruiz',
        cedula : 201152,
        correo : 'feli@gmail.com',
        telefono : 55555455,
        direccion : 'calle 4565 # 5',
        Contrasena : '******',
        ConfirmarContrasena : '*****',
        estado : 'Activo'
      },
      {
        nombre : 'Mario',
        Apellido : 'Rojas',
        cedula : 201152,
        correo : 'feli@gmail.com',
        telefono : 55555455,
        direccion : 'calle 4565 # 5',
        Contrasena : '******',
        ConfirmarContrasena : '*****',
        estado : 'Activo'
      }
    ];
    res.render('usuarios',{
        titulo : 'Countech',
        user_name : 'feliciano Mosquera', 
        consecutivo: 'usuarios',
        listaUsuarios: usuarios
    })
})




app.get('/servicios', (req, res) =>{
    const servicios = [
        {
            id: 1,
            nombre : 'Corte',
            valor : '15.000',
            estado : 'Activo'
        },
        {
            id: 2,
            nombre : 'Barba',
            valor : '8.000',
            estado : 'Activo'
        },
        {
            id: 3,
            nombre : 'Cejas',
            valor : '10.000',
            estado : 'Activo'
        }
    ];
    res.render('servicios',{
        titulo : 'Sionbarbershop',
        user_name : 'feliciano Mosquera', 
        consecutivo: 'servicios',
        listaServicios: servicios
    })
})


app.get('/nuevoServicio', (req, res) => {
    
    res.render('nuevoServicio', { 
        titulo : 'Sionbarbershop',
        user_name : 'feliciano Mosquera', 
        consecutivo: 'Formulario',
        subtitulo:'Nuevo Servicio'
    });
})

app.get('/nuevaCita', (req, res) => {
    
    res.render('nuevaCita', { 
        titulo : 'Sionbarbershop',
        user_name : 'feliciano Mosquera', 
        consecutivo: 'Formulario',
        subtitulo:'Nuevo citas'
    });
})

app.get('/nuevoCliente', (req, res) => {
    
    res.render('nuevoCliente', { 
        titulo : 'Countech',
        user_name : 'feliciano Mosquera', 
        consecutivo: 'Formulario',
        subtitulo:'Nuevo Cliente'
    });
})

app.get('/nuevoEmpleado', (req, res) => {
    
    res.render('nuevoEmpleado', { 
        titulo : 'Countech',
        user_name : 'feliciano Mosquera', 
        consecutivo: 'Formulario',
        subtitulo:'Nuevo Empleado'
    });
})

app.get('/nuevoUsuario', (req, res) => {
    
    res.render('nuevoUsuario', { 
        titulo : 'Countech',
        user_name : 'feliciano Mosquera', 
        consecutivo: 'Formulario',
        subtitulo:'Nuevo Usuario'
    });
})

app.listen(puerto,()=>{
    console.log(`Escuchando por el puerto ${puerto}`)
})

