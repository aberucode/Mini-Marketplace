// test 2 - PRIMERA ENTREGA CODER HOUSE
// calcular costo total de productos y/o servicios seleccionados por el usuario


// PRODUCTOS
function menu_Productos()
{
    let opc = 0;
    let bucle = false;
    while (!bucle) 
    {
        do 
        {
            console.log("\nPRODUCTOS\n");
            console.log(" 1 -> Arroz - 1 kg / 24 soles\n");
            console.log(" 2 -> Cafe - 1 sobre / 3 soles\n");
            console.log(" 3 -> Avena - 1 kg / 11 soles\n");
            console.log(" 4 -> Azucar - 1 kg / 4 soles\n");
            console.log(" 5 -> Cereales - 1 caja / 9.50 soles\n");
            console.log(" 6 -> Sal - 1 kg / 3 soles\n");
            console.log(" 7 -> Huevos - docena / 5.50 soles\n");
            console.log(" 8 -> Retroceder")
            opc = parseInt(prompt("Digite la opcion: "));
            if (opc < 1 || opc > 8) {
                alert("datos de entrada fuera de los parametros");
                console.clear();
            }
        } while (!(opc >= 1 && opc <= 8));
        switch (opc) 
        {
            case 1:
                alert("compro 1 kg de arroz");
                ct_productos += 24;
                p_comprados += 1;
                c_arroz += 1;
                pa_arroz += 24;
                break;
            case 2:
                alert("compro 1 sobre de cafe");
                ct_productos += 3;
                p_comprados += 1;
                c_cafe += 1;
                pa_cafe += 3;
                break;
            case 3:
                alert("compro 1 kg de avena");
                ct_productos += 11;
                p_comprados += 1;
                c_avena += 1; 
                pa_avena += 11;
                break;
            case 4:
                alert("compro 1 kg de azucar");
                ct_productos += 4;
                p_comprados += 1;
                c_azucar += 1; 
                pa_azucar += 4;
                break;
            case 5:
                alert("compro 1 caja de cereal");
                ct_productos += 9.50;
                p_comprados += 1;
                c_cereal += 1;
                pa_cereal += 9.50;
                break;
            case 6:
                alert("compro 1 kg de sal");
                ct_productos += 3;
                p_comprados += 1;
                c_sal += 1;
                pa_sal += 3;
                break;
            case 7:
                alert("compro 1 docena de huevos");
                ct_productos += 5.50;
                p_comprados += 1;
                c_huevos += 1;
                pa_huevos += 5.50;
                break;
            case 8:
                bucle = true;
                break;
        }
        console.clear();
    }


}
// lista
function productos_Adquiridos() {
    if(c_arroz > 0)
        console.log(" - Arroz: " + c_arroz + " kg -> " + pa_arroz + " soles\n");
    if(c_cafe > 0)
        console.log(" - Cafe: " + c_cafe + " sobres -> " + pa_cafe + " soles\n");
    if(c_avena > 0)
        console.log(" - Avena: " + c_avena + " kg -> " + pa_avena + " soles\n");
    if(c_azucar > 0)
        console.log(" - Azucar: " + c_azucar + " kg -> " + pa_azucar + " soles\n");
    if(c_cereal > 0)
        console.log(" - Cereal: " + c_cereal + " cajas -> " + pa_cereal + " soles\n");
    if(c_sal > 0)
        console.log(" - Sal: " + c_sal + " kg -> " + pa_sal + " soles\n");
    if(c_huevos > 0)
        console.log(" - Huevos: " + c_huevos + " docenas -> " + pa_huevos + " soles\n");
}



// SERVICIOS
function menu_Servicios() {
    let opc = 0;
    let bucle = false;
    while (!bucle) 
    {
        do 
        {
            console.log("\nSERVICIOS\n");
            console.log(" 1. Recargas telefonicas\n");
            console.log(" 2. Pagos de servicios a empresas priv/pub\n");
            console.log(" 3. Pagos por entregas a domicilio\n");
            console.log(" 4. Retroceder");
            opc = parseInt(prompt("Digite la opcion: "));
            if (opc < 1 || opc > 4) {
                alert("datos de entrada fuera de los parametros");
                console.clear();
            }
        } while (!(opc >= 1 && opc <= 4));
        switch (opc) 
        {
            case 1:
                console.clear();
                menu_RTelefonicas();
                break;
            case 2:
                console.clear();
                menu_PServicios(); 
                break;
            case 3:
                menu_EDomicilio();
                break;
            case 4:
                console.clear();
                bucle = true;
                break;
        }
    }
}

// SERVICIOS - Recargas telefonicas
function menu_RTelefonicas() {
    let opc = 0;
    let bucle = false;
    while (!bucle) 
    {
        do 
        {
            console.log("\nRECARGAS TELEFONICAS\n");
            console.log(" 1. Claro\n");
            console.log(" 2. Movistar\n");
            console.log(" 3. Entel\n");
            console.log(" 4. Retroceder");
            opc = parseInt(prompt("Digite la opcion: "));
            if (opc < 1 || opc > 4) {
                alert("datos de entrada fuera de los parametros");
                console.clear();
            }
        } while (!(opc >= 1 && opc <= 4));
        switch (opc) 
        {
            case 1:
                console.log("\nBienvenido a Claro\n")
                numero_p = parseInt(prompt("Digite su numero: "));
                saldo_p = parseInt(prompt("Digite el saldo a recargar: "));
                alert("Recarga Satisfactoria ;)");
                ct_servicios += saldo_p;
                s_comprados += 1;
                c_recargas += 1;
                ct_recargas +=saldo_p;
                break;
            case 2:
                console.log("\nBienvenido a Movistar\n")
                numero_p = parseInt(prompt("Digite su numero: "));
                saldo_p = parseInt(prompt("Digite el saldo a recargar: "));
                alert("Recarga Satisfactoria ;)");
                ct_servicios += saldo_p;
                s_comprados += 1;
                c_recargas += 1;
                ct_recargas +=saldo_p;
                break;
            case 3:
                console.log("\nBienvenido a Entel\n")
                numero_p = parseInt(prompt("Digite su numero: "));
                saldo_p = parseInt(prompt("Digite el saldo a recargar: "));
                alert("Recarga Satisfactoria ;)");
                ct_servicios += saldo_p;
                s_comprados += 1;
                c_recargas += 1;
                ct_recargas +=saldo_p;
                break;
            case 4:
                bucle = true;
                break;
        }
        console.clear();
    }
}

// SERVICIOS - Pagos por servicios
function menu_PServicios() {
    let opc = 0;
    let bucle = false;
    while (!bucle) 
    {
        do 
        {
            console.log("\nPAGOS POR SERVICIOS\n");
            console.log(" 1. Empresa Privada\n");
            console.log(" 2. Empresa Publica\n");
            console.log(" 3. Retroceder")
            opc = parseInt(prompt("Digite la opcion: "));
            if (opc < 1 || opc > 4) {
                alert("datos de entrada fuera de los parametros");
                console.clear();
            }
        } while (!(opc >= 1 && opc <= 4));
        switch (opc) 
        {
            case 1:
                console.log("\nEMPRESA PRIVADA\n");
                t_empresa = "Privada";
                n_empresa = prompt("Digite el nombre de la empresa: ");
                p_empresa = parseInt(prompt("Digite el monto a pagar: "));
                alert("Pago exitoso");
                ct_servicios += p_empresa;
                s_comprados += 1;
                cp_empresa += 1;
                ct_empresas += p_empresa;
                break;
            case 2:
                console.log("\nEMPRESA PUBLICA\n");
                t_empresa = "Publica";
                n_empresa = prompt("Digite el nombre de la empresa: ");
                p_empresa = parseInt(prompt("Digite el monto a pagar: "));
                alert("Pago exitoso");
                ct_servicios += p_empresa;
                s_comprados += 1;
                cp_empresa += 1;
                ct_empresas += p_empresa;
                break;
            case 3:
                bucle = true;
                break;
        }
        console.clear();
    }
}

// SERVICIOS - Pagos por entregas a domicilio
function menu_EDomicilio() {
    let opc = 0;
    let bucle = false;
    while (!bucle) 
    {
        do 
        {
            console.log("\nPAGOS POR ENTREGAS A DOMICILIO\n");
            console.log(" 1. Pagar delivery\n");
            console.log(" 2. Retroceder")
            opc = parseInt(prompt("Digite la opcion: "));
            if (opc < 1 || opc > 2) {
                alert("datos de entrada fuera de los parametros");
                console.clear();
            }
        } while (!(opc >= 1 && opc <= 2));
        switch (opc) 
        {
            case 1:
                direccion = prompt("Digite su direccion: ");
                pago = parseInt(prompt("Digite el pago: "));
                alert("Pago exitoso");
                s_comprados += 1;
                ct_servicios += pago;
                cp_domicilio += 1;
                ct_domicilios += pago;
                break;
            case 2:
                bucle = true;
                break;
        }
        console.clear();  
    }
}


// lista
function servicios_Adquiridos() {
    if(c_recargas > 0)
    {
        console.log(" - Cantidad de recargas: " + c_recargas + "\n");
        console.log(" - Costo total por recargas: " + ct_recargas + " soles\n\n");
    }
        
    if(cp_empresa > 0)
    {
        console.log(" - Cantidad de servicios pagados: " + cp_empresa + "\n");
        console.log(" - Costo total por servicios pagados: " + ct_empresas + " soles\n\n");
    }
    if(cp_domicilio > 0)
    {
        console.log(" - Cantidad de deliverys pagados: " + cp_domicilio + "\n");
        console.log(" - Costo total por deliverys: " + ct_domicilios + " soles\n\n");
    }
}


// COSTO TOTAL productos + servicios
function costo_Total() {
    console.log("\nCOSTO TOTAL\n");
    console.log("\nProductos adquiridos: " + p_comprados);
    productos_Adquiridos();
    console.log("\nServicios adquiridos: " + s_comprados);
    servicios_Adquiridos();
    console.log("\nCostos Totales\n");
    console.log(" - Por productos: " + ct_productos + " soles");
    console.log(" - Por servicios: " + ct_servicios + " soles");
    alert("Productos verificados ;)");
    console.clear();
}

//index para el usuario
let index_user = 0;

// costo total por productos
let ct_productos = 0;
// cantidad de productos comprados
let p_comprados = 0;
// cantidad comprada por cada producto
let c_arroz = 0;
let c_cafe = 0;
let c_avena = 0;
let c_azucar = 0;
let c_cereal = 0;
let c_sal = 0;
let c_huevos = 0;
// precio acumulado por cada producto
let pa_arroz = 0;
let pa_cafe = 0;
let pa_avena = 0;
let pa_azucar = 0;
let pa_cereal = 0;
let pa_sal = 0;
let pa_huevos = 0;


// costo total por servicios
let ct_servicios = 0;
// cantidad de servicios comprados
let s_comprados = 0;
// Servicio - recarga telefonica
let numero_p = 0;
let saldo_p = 0;
let c_recargas = 0;
let ct_recargas = 0;
// Servicio - Pagos por servicios
let t_empresa = "";
let n_empresa = "";
let p_empresa = 0;
let cp_empresa = 0;
let ct_empresas = 0;
// Servicio - Pagos por entrega a domicilio
let pago = 0;
let direccion = "";
let cp_domicilio = 0;
let ct_domicilios = 0;


function menu_principal() {
    let dato = 0;
    let bucle = false;
    alert("Bienvenido, a su tienda de confianza :)");
    while (!bucle) {
        do {
            console.log("EL CLUB DEL MARKET\n\n");
            console.log("Opciones:\n");
            console.log("1. Productos");
            console.log("2. Servicios");
            console.log("3. Costo total");
            console.log("4. Salir\n\n");
            dato = parseInt(prompt("Digite la opcion: "));

            if (dato < 1 || dato > 4) {
                alert("datos de entrada fuera de los parametros");
                console.clear();
            }

        } while (!(dato >= 1 && dato <= 4));
        console.clear();
        switch (dato) {
            case 1:
                menu_Productos();
                break;
            case 2:
                menu_Servicios();
                break;
            case 3:
                costo_Total();
                break;
            case 4:
                alert("Usted ha finalizado su sesion");
                bucle = true;
                break;
        }
    }
}


// Logeo e inicio de sesion 

class User
{
    constructor(email = "", password = "")
    {
        this.email = email;
        this.password = password;
    }
    setEmail(email)
    {
        this.email = email;
    }
    setPassword(password)
    {
        this.password = password;
    }
    getEmail() 
    {
        return this.email;
    }
    getPassword()
    {
        return this.password;
    }
}

const usuarios = [
    new User("juancarlosbodoque@gmail.com", "1234566"),
    new User("lucianomundo@outlook.com", "737371"),
    new User("marianopereira@outlook.com", "377139"),
    new User("maricieloolivacruz@gmail.com", "23747499"),
    new User("juanbenitezcifuente@gmail.com", "38lsdkfl2"),
    new User("roblesdeortegaramos@gmail.com", "9388jfd"),
    new User("tavodelaguila@gmail.com", "alskjdflksjdf33"),
    new User("agustin2333@outlook.com", "ksdjfi348383"),
]

// menu inicio de sesion
function menu_iSesion()
{
    
    let dato = 0;
    let bucle = false;
    let email = "";
    let password = "";

    while (!bucle) {
        do {
            console.log("MENU INICIO DE SESION\n\n");
            console.log("1. Iniciar sesion")
            console.log("2. Olvide la contrasena");
            console.log("3. retroceder\n\n");
            dato = parseInt(prompt("Digite la opcion: "));

            if (dato < 1 || dato > 3) {
                alert("datos de entrada fuera de los parametros");
                console.clear();
            }

        } while (!(dato >= 1 && dato <= 3));
        switch (dato) {
            case 1:
                email = prompt("Digite su correo: "); 
                password = prompt("Digite su contrasena: ");
                for (let i = 0; i < usuarios.length; i++) {
                    if(usuarios[i]["email"] === email && usuarios[i]["password"] === password)
                    {
                        index_user = i;
                        console.clear();
                        menu_principal();
                        break;
                    }
                    else if(usuarios[i]["email"] === email && usuarios[i]["password"] !== password)
                    {
                        alert("Error al digitar la contrasena");
                        break;
                    }
                    if(i === usuarios.length - 1 && (usuarios[i]["email"] !== email && usuarios[i]["password"] !== password))
                    {
                        alert("No se encontraron registros de este usuario");
                        break;
                    }
                }
                break;
            case 2:
                email = prompt("Digite su correo: ");
                for (let i = 0; i < usuarios.length; i++)
                {
                    if(usuarios[i]["email"] === email)
                    {
                        alert("Su contrasena es: " + usuarios[i]["password"]);
                        break;
                    }
                    else if (i === usuarios.length - 1 && usuarios[i]["email"] !== email)
                    {
                        alert("No se ha podido identificar el correo :(");
                    }
                }
                break;
            case 3:
                bucle = true;
                break;
        }
        console.clear();
    }
}

function menu_registro()
{
    let respaldo = false;
    let dato = 0;
    let bucle = false;
    let email = "";
    let password = "";

    while (!bucle) {
        do {
            console.log("MENU REGISTRO DE USUARIO\n\n");
            console.log("1. Registrar nuevo usuario")
            console.log("2. retroceder\n\n");
            dato = parseInt(prompt("Digite la opcion: "));

            if (dato < 1 || dato > 2) {
                alert("datos de entrada fuera de los parametros");
                console.clear();
            }

        } while (!(dato >= 1 && dato <= 2));
        switch (dato) {
            case 1:
                email = prompt("Digite su correo: "); 
                password = prompt("Digite su contrasena: ");
                for (let i = 0; i < usuarios.length; i++) {
                    if(usuarios[i]["email"] === email)
                    {
                        alert("Este correo ya ha sido utilizado, pruebe con otro");
                        respaldo = true;
                        break;
                    }
                }
                if(!respaldo)
                {
                    usuarios.push(new User(email, password));
                    alert("Registro satisfactorio ;)");
                }
                respaldo = false;
                break;
            case 2:
                bucle = true;
                break;
        }
        console.clear();
    }
}

// menu para inicio de sesion o registro
function menu_inicio_registro()
{
    let dato = 0;
    let bucle = false;
    alert("Gracias por la confianza, inicie sesion para comprar los mejores productos :)");
    while (!bucle) {
        do {
            console.log("EL CLUB DEL MARKET INICIO\n\n");
            console.log("1. Inicio de sesion");
            console.log("2. Registro");
            console.log("3. Salir\n\n");
            dato = parseInt(prompt("Digite la opcion: "));

            if (dato < 1 || dato > 3) {
                alert("datos de entrada fuera de los parametros");
                console.clear();
            }

        } while (!(dato >= 1 && dato <= 3));
        console.clear();
        switch (dato) {
            case 1:
                menu_iSesion();
                break;
            case 2:
                menu_registro();
                break;
            case 3:
                alert("Usted ha salido del programa");
                bucle = true;
                break;
        }
    }
}

menu_inicio_registro();














/*
    FUNCIONALIDADES QUE AGREGAR
    - objetos -> done
    - arrays -> done
    - metodos de busqueda y filtrado sobre el array -> done
*/ 


