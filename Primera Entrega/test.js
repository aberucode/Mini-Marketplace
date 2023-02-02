//test 1 
//calculadora

function suma(a,b)
{
    return a + b;
}
function resta(a,b)
{
    return a - b;
}
function dividir(a,b)
{
    return a/b;
}
function multiplicar()
{
    return a*b;
}


function main()
{
    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;
    let bucle = false; 
    let dato;
    while(!bucle)
    {
        do 
        {
            console.log("CALCULADORA\n\n");     
            console.log("Opciones:\n");
            console.log("1. Sumar dos numeros");
            console.log("2. Restar dos numeros");
            console.log("3. Dividir dos numeros");
            console.log("4. Multiplicar dos numeros");
            console.log("5. Salir\n\n");
            dato = parseInt(prompt("Digite la opcion: "));
            
            if(dato < 1 || dato > 5)
            {
                alert("datos de entrada fuera de los parametros");
                console.clear();
            }

        } while (!(dato >= 1 && dato <= 5));
        switch(dato)
        {
            case 1:
                console.log("\nSuma\n");
                console.log("Digite dos numeros:\n"); 
                numero1 = parseInt(prompt("a: ")); 
                numero2 = parseInt(prompt("b: "));
                resultado = suma(numero1,numero2);
                console.log("\nResultado: " + resultado);
                break;
            case 2:
                console.log("\nResta\n");
                console.log("Digite dos numeros:\n"); 
                numero1 = parseInt(prompt("a: ")); 
                numero2 = parseInt(prompt("b: "));
                resultado = resta(numero1,numero2);
                console.log("\nResultado: " + resultado);
                break;
            case 3:
                console.log("\nDivision\n");
                console.log("Digite dos numeros:\n"); 
                numero1 = parseInt(prompt("a: ")); 
                numero2 = parseInt(prompt("b: "));
                resultado = dividir(numero1,numero2);
                console.log("\nResultado: " + resultado);
                break;
            case 4:
                console.log("\nMultiplicacion\n");
                console.log("Digite dos numeros:\n"); 
                numero1 = parseInt(prompt("a: ")); 
                numero2 = parseInt(prompt("b: "));
                resultado = multiplicar(numero1,numero2);
                console.log("\nResultado: " + resultado);
                break;
            case 5:
                alert("Usted ha salido del programa");
                bucle = true;
                break;
        }
    }
}

main();






