/*JS1 Thiare Cerpa */

/* 1. Retornar un string*/
function devolverString(str){
    return str;   
}

/* 2. Retornar una suma */
function suma(x, y){
    return x+y;
}

/* 3. Retornar una resta */
function resta(x, y){
    return x-y; 
}

/*4. Retornar una multiplicación */
function multiplicar(x, y){
    return x*y;
}

/*5. Retornar una división */
function dividir(x, y){
    return x/y;
}

/*6. Comparar números */
function igualdad(x, y){
    if (x==y){
        return "true";
    } else {
        return "false";
    }
}

/*7. Comparar la longitud de dos strings */

function compararLongitud(str1, str2){
    let longitud1 = str1.length;
    let longitud2 = str2.length;
    if (longitud1 == longitud2){
        return "true";
    } else {
        return "false";
    }
}

/*8. Comparar un parámetro I*/
function menorQueNoventa(num){
    if (num<90){
        return "true";
    }else{
        return "false";
    }
}

/*9. Comparar un parámetro II*/
function mayorQueCincuenta(num){
    if (num>50){
        return "true";
    }else{
        return "false";
    }
}

/*10. Retornar el módulo o resto */
function obtenerResto(x, y){
    return x % y;
}

/*11. Comprobar si es par */
function esPar(num){
    if (obtenerResto(num,2)==0){
        return "true";
    }else{
        return "false";
    }
}
 
/*12. Comprobar si es impar */

function esImpar(num){
    if (obtenerResto(num,2)!=0){
        return "true";
    }else{
        return "false";
    }
}

/*13. Elevar un número al cuadrado */
function elevarAlCuadrado(num){
    return num*num; 
}

/*14. Elevar un número al cubo */
function elevarAlCubo(num){
    return num*num*num;
}

/*15. Elevar un número a un exponente */
function elevar(num, exponent){
    let producto = num;
    if (exponent==1){
        return num;
    } else{   
    for (let i=2; i<=exponent; i++){
       producto = producto*num;
    }
    return producto;
}
}

/*16. Redondear un número.*/
function redondearNumero(num){
     return Math.round(num);
}

/*17. Redondear un número hacia arriba*/
function redondearHaciaArriba(num){
    return Math.ceil(num); 
}

//18. Retornar un número aleatorio.//
function numeroRandom(){
    return Math.random()
}


//19. Comprar si un numero es positivo.//
function esPositivo(num){
    if (num > 0){
        return "Es positivo";
    } if (num < 0){
        return "Es negativo"
    } else {
        return "false"
    }
}

//20. Concatenar strings I.//
function agregarSimboloDeExclamacion(str){
    let resultado = str + "!";
    return resultado;
}

//21.Concatenar strings II.//
function combinarNombres(nombre, apellido){
    let resultado = nombre +" "+apellido;
    return resultado;
}


//22. Concatenar strings III.//
function retornarSaludo(nombre){
    let resultado = "Hola "+nombre+", ¿cómo estás?";
    return resultado;
}


//23. Operaciones matemáticas I.//
function areaDelRectangulo(alto, ancho){
    let area = alto*ancho;
    return area; 
}


//24. Operaciones matemáticas II.//
function perimetroDelCuadrado(lado){
    let perimetro = lado*4;
    return perimetro; 
}

//25. Operaciones matemáticas III.//
function areaDelTriangulo(base, altura){
    let area = (base*altura)/2;
    return area; 
}

//26. Operaciones matemáticas IV.//
function deEuroAdolar(euro){
    resultado = (1.2*euro).toFixed(1);
    return resultado;
    // Supongamos que 1 euro equivale a 1.20 dólares.
}

//27. Condicionales //
function esVocal(letra){
    let vocales = ["a", "e", "i", "o", "u"]
    if (letra.length ==1){
        for (let i=0; i< vocales.length; i++){
            if (letra === vocales[i]){
                return "Es vocal";
            }
    }
     return "No es vocal";

    } else {
        return "Dato incorrecto";
    }
}

