/*EJERCICIO 1: Crea una función llamada "sumar" que reciba 2 números por 
parámetros y retorne el resultado de la suma.*/ 

function suma(a,b){
    console.log(a+b);
}

suma(3,4);

/*EJERCICIO 2: Crea una función llamada "multiplicar" que reciba 2 números 
    por parámetros y retorne el resultado de la multiplicación. 
 Además, verifica si ambos parámetros son números; si alguno no lo es, 
 debe devolver el siguiente mensaje: "Ambos parámetros deben ser números." */

function multiplicar(a,b){
    console.log(a*b);
}

multiplicar(3,4);

/**EJERCICIO 3: Crea una función llamada "esInvierno" que reciba por 
 * parámetro el mes y devuelva `true` si es un mes de invierno 
 * o `false` en caso contrario. Meses de invierno: junio, julio, agosto.*/

/*opción simple*/
function esInvierno(m){
    if (m == "junio" || m == "julio" || m == "agosto"){
            console.log(true);
        }
        else{
            console.log(false);
        }
};

esInvierno("septiembre")

/*opción mejorada*/

function esInvierno2(m) {
    const mesesDeInvierno = ["junio", "julio", "agosto"];
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  
    if (!meses.includes(m)){
        console.log(m + " no es un mes");
    }

    else{ if(!mesesDeInvierno.includes(m)){
        console.log(m + " no es un mes de invierno");
    } else{
        console.log(m + " es un mes de invierno");
    }
    }
}

esInvierno2("agua");
esInvierno2("junio");
esInvierno2("septiembre");

/*EJERCICIO 4 Crea una función llamada "esCovid" que reciba por parámetro
 dos arrays: uno con los síntomas que posee el paciente y otro con los
 síntomas del COVID-19. Si coinciden 2 o más síntomas, debe retornar
  `true`, indicando que es COVID-19; de lo contrario, retorna `false`.*/

  let sintomasCovid = ["fiebre", "dolor muscular", "pérdida de gusto"];
  let sintomasPaciente = new Array()
  let covid = false;



function esCovid(primerSintoma, segundoSintoma, tercerSintoma){
    
    sintomasPaciente.push(primerSintoma, segundoSintoma, tercerSintoma);
    let coincidencia = new Array();

    for (let i=0; i<3;i++){
        for(let n=0; n<3; n++){
        if(sintomasPaciente[i]==sintomasCovid[n]){
            coincidencia.push(sintomasPaciente[i]);
            }
        }
    }
    if (coincidencia.length < 2){
        console.log(covid);
    }

    else{
        covid =  !covid;
        console.log(covid);
    }
    
}

esCovid("vómitos", "fiebre", "dolor muscular");

/*EJERCICIO 5: Crea la función "horarioCursada" que recibe por 
parámetro la materia y debe devolver el día y la hora en que se cursa. 
En caso de que la materia no se encuentre en el sistema, retorna 
el mensaje "MATERIA NO ENCONTRADA." */

let materiasCursada = ["Matemática", "Lengua", "Geografía", "Programación"];
let horario = ["Jueves 8:30 hrs", "Lunes 10:00 hrs", "Viernes 13:30 hrs", "Miércoles 17:00 hrs"];
let encontrado = false;

function horarioCursada(materia){
    for (let i = 0; i <=4; i++){
        if (materiasCursada[i] == materia){
            console.log("la materia " + materia + " tiene el siguiente horario: " + horario[i]);
            encontrado = true;
        }
       }
    if(encontrado == false){
    console.log("Materia no encontrada");
    }
    encontrado = false;
} 



horarioCursada("Lengua");
horarioCursada("Programación");
horarioCursada("Arte");