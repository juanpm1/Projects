/*
const sumar = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const multiplicar = (num1, num2)=>{
    return parseInt(num1) * parseInt(num2);
}
const dividir = (num1, num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const raizCuadrada = (num1)=>{
    return Math.sqrt(num1);
}
const raizCubica = (num1)=>{
    return Math.cbrt(num1);
}
const potencia = (num1, num2)=>{
    let numero = num1
    for (var i = 1; i < num2 ; i++){
        numero = num1*numero
    }
    return numero;
}

function calculadora(){
    alert('Ingrese que operacion quiere realizar');
    let operacion = prompt('1 SUMA, 2 RESTA, 3 MULTIPLICA, 4 DIVIDE, 5 RAIZ CUADRADA, 6 RAIZ CUBICA, 7 POTENCIA')
    if (operacion == 1){
        let numero1 = prompt('Ingrese primer numero a sumar');
        let numero2 =prompt('Ingrese segundo numero a sumar');
        let resultado = sumar(numero1,numero2);
        alert(`El resultado es ${resultado}`);
    }
    else if (operacion == 2){
        let numero1 = prompt('Ingrese primer numero a restar');
        let numero2 =prompt('Ingrese segundo numero a restar');
        let resultado = restar(numero1,numero2);
        alert(`El resultado es ${resultado}`);
    }
    else if (operacion == 3){
        let numero1 = prompt('Ingrese primer numero a multiplicar');
        let numero2 =prompt('Ingrese segundo numero a multiplicar');
        let resultado = multiplicar(numero1,numero2);
        alert(`El resultado es ${resultado}`);
    }
    else if (operacion == 4){
        let numero1 = prompt('Ingrese primer numero a dividir');
        let numero2 =prompt('Ingrese segundo numero a dividir');
        let resultado = dividir(numero1,numero2);
        alert(`El resultado es ${resultado}`);
    }
    else if (operacion == 5){
        let numero1 = prompt('Ingrese numero');
        let resultado = raizCuadrada(numero1);
        alert(`El resultado es ${resultado}`);
    }
    else if (operacion == 6){
        let numero1 = prompt('Ingrese numero');
        let resultado = raizCubica(numero1);
        alert(`El resultado es ${resultado}`);
    }
    else if (operacion == 7){
        let numero1 = prompt('Ingrese base');
        let numero2 =prompt('Ingrese potencia');
        let resultado = potencia(numero1,numero2);
        alert(`El resultado es ${resultado}`);
    }
    else{
        alert('ingrese un numero valido');
    }
}


function obtenerInformacion (materia){
    materias= {
        fisica: ['pedro', 'juan'],
        matematica:['pedro', 'juan','cofla']
    }
    if (materias[materia] !==undefined){
        return [materias[materia] , materia, materias];
    }
    else{
        return materias
    }
}

function mostrarInformacion (materia){
    let informacion = obtenerInformacion (materia);

if(informacion !== false){
    let materia = informacion[1]
    let alumnos = informacion[0]
    document.write(`alumnos presentes en ${materia}: ${alumnos}`);
}
}
function cantidadDeClases (alumno) {
    let informacion = obtenerInformacion();
    let nroClases = 0;
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            nroClases ++
        }
    }
    return nroClases
}
*/

/*
class juego {
    constructor (nroJuego, cantidadDescargas, puntuacion, peso){
        this.nroJuego = nroJuego;
        this.cantidadDescargas = cantidadDescargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalado = false;
        this.iniciada = false;
        }
        instalar(){
            if(this.instalado == false){
                alert('aplicacion instalada correctamente')
                this.instalado = true
            }
            else {
                alert('aplicacion ya instalada')
            }
        }
        desinstalar(){
            if(this.instalado == true){
                alert('aplicacion desinstalada correctamente')
                this.instalado = false
            }
            else{
                alert('aplicacion ya desinstalada')
            }
        }
        abrirJuego(){
            if(this.instalado == true && this.iniciada == false){
                alert('aplicacion iniciada')
                this.iniciada = true
            }
            else if(this.instalado == false){   
                alert('aplicacion no instalada')
            }
            else{
                alert('aplicacion ya iniciada')
            }
        }
        cerrarJuego(){
            if(this.instalado == true && this.iniciada == true){
                alert('juego cerrado')
                this.iniciada = false
            }
            else if (this.instalado == false){
                alert('aplicacion no instalada')
            }
            else{
                alert('aplicacion ya cerrada')
            }
        }
        appInfo(){
            return  `
                    Juego Nro: <b>${this.nroJuego}</b><br>
                    Cantidad descargas: <b>${this.cantidadDescargas}</b> descargas<br>
                    Puntuacion: <b>${this.puntuacion}</b> estrellas <br>
                    Peso: <b>${this.peso}</b> GB 
                    `
        }

}

const juego1 = new juego (1,10000, 4.3, 3);
const juego2 = new juego (2,100000, 4.9, 1);
const juego3 = new juego (3,9000, 3, 0.3);
const juego4 = new juego (4,1000000, 4.5, 2.1);
const juego5 = new juego (5,540232, 4.6, 1.74);
const juego6 = new juego (6,73492, 4, 0.95);
const juego7 = new juego (7,20398832, 4.8, 10);

document.write(`
${juego1.appInfo()}<br><br>
${juego2.appInfo()}<br><br>
${juego3.appInfo()}<br><br>
${juego4.appInfo()}<br><br>
${juego5.appInfo()}<br><br>
${juego6.appInfo()}<br><br>
${juego7.appInfo()}<br><br>
`)


juego1.instalar();
juego1.abrirJuego();
juego1.cerrarJuego();
juego1.cerrarJuego();
juego1.desinstalar();
juego1.desinstalar();
juego1.instalar();
juego1.instalar();
juego1.abrirJuego();
juego1.abrirJuego();

*/
/*
const materias = {
    fisica: [90,6,3,'Fisica'],
    matematica: [95,9,4,'Matematica'],
    biologia: [100,10,2,'Biologia'],
    algebra: [34,2,0,'Algebra'],
    progrmacion: [76,8,3,'Programacion'],
    quimica: [87,6,2,'Quimica'],
    proyecto: [90,9,4,'Proyecto'],
}

function mostrasResultados(){
    for (materia in materias){
        let asistencia = materias[materia][0];
        let puntaje = materias[materia][1];
        let trabajos = materias[materia][2];
        let trabajosPorcentaje = (materias[materia][2] * 100)/ 4;
        let asignaturas = materias[materia][3];
        
        if (asistencia >= 90){
            console.log(`${asignaturas}`);
            console.log(`%c    Asistencia: ${asistencia}%`, `color:green`);
        }
        else {
            console.log(`${asignaturas}`);
            console.log(`%c    Asistencia: ${asistencia}%`, `color:red`);
        }
        if (puntaje>= 7){
            console.log(`%c    Puntaje: ${puntaje}`, `color:green`);
        }
        else {
            console.log(`%c    Puntaje: ${puntaje}`, `color:red`);
        }
        if(trabajos>=3){
            console.log(`%c    Trabajos: ${trabajosPorcentaje}%`, `color:green`);
        }
        else {
            console.log(`%c    Trabajos: ${trabajosPorcentaje}%`, `color:red`);
        }
    }
}
*/




 