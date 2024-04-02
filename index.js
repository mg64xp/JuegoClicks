// Obtiene todos los elementos con la clase 'boton' y los convierte en un array
const botonSeleccionado = Array.from(document.querySelectorAll('.boton'));

const inicio = document.getElementById('comenzar');
inicio.addEventListener('click', comienzo);


let numero = null;
let click = document.getElementById('clicks')
let clicks = 0
let temporizador = false;
let timer = numero;
let mostrarTiempo = document.getElementById('tiempo');
let tiempoRegresivo = null;
let contadorInicio = false;



//comenzar
function comienzo(){
    if(!contadorInicio && numero != 0){
    
    contadorInicio = true;
    contarTiempo();
    resetearClicks();
    resetearJuego();
    inicio.disabled = true;
    colorInicial();
    }else{
        alert('indique un numero positivo o mayor a 0')
    }
}
function seleccionarBotonAleatorio(){

}
//contar tiempo
function contarTiempo(){

    tiempoRegresivo = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} Segundos`;
        if(timer == 0){
            clearInterval(tiempoRegresivo);
            terminado();
            document.getElementById('guardarTiempo').disabled = false
           
        }else{

        }
    },1000);
}

//ingresar tiempo del cronometro

function guardar() {
    let cronometro = document.getElementById('cronometro').value;
    numero = parseInt(cronometro); // Actualizamos 'numero' con el valor del cronometro

    if (numero > 0) {
        document.getElementById('tiempo').textContent = `Tiempo restante: ${numero} Segundos`;
        document.getElementById('comenzar').disabled = false
        document.getElementById('guardarTiempo').disabled = true
    } else {
        alert("Por favor, ingresa un número positivo válido en el campo de cronómetro.");
    }
}
function colorInicial(){
    
    const botones = Array.from(document.querySelectorAll('.boton'));
    const indiceAleatorio = Math.floor(Math.random() * botones.length);
    botones[indiceAleatorio].classList.add('boton-seleccionado');
}


// Función principal
function darColor(id) {
    // Verifica si el contadorInicio es verdadero
    if (contadorInicio) {
        // Obtiene el elemento del DOM con el ID proporcionado
        const boton = document.getElementById(id);
        
        // Genera un índice aleatorio para seleccionar un botón aleatorio de la lista
        const indiceAleatorio = Math.floor(Math.random() * botonSeleccionado.length);

        // Verifica si el botón actual ya tiene la clase 'boton-seleccionado'
        const tieneClaseSeleccionada = boton.classList.contains('boton-seleccionado');

        const botonAleatorio = botonSeleccionado[indiceAleatorio];

        // Si el botón ya tiene la clase 'boton-seleccionado', quítala
        if (tieneClaseSeleccionada) {
            boton.classList.remove('boton-seleccionado');
            botonAleatorio.classList.add('boton-seleccionado');
            
            // Incrementa el contador de clics
            clicks++;
            click.innerHTML = `clicks: ${clicks}`;
        }
    }
}

function terminado(){
    contadorInicio = false;
    inicio.disabled = false;
    alert(`hiciste ${clicks} clicks `);

    // esto es para tratar de eliminar el boton al reiniciar//
    const boton = document.getElementById(id);
    boton.classList.remove('boton-seleccionado')
  
}

function resetearJuego(){
    timer = numero;
    mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
    resetearClicks();
}

function resetearClicks(){
    clicks = 0;
    click.innerHTML = `clicks: ${clicks}`
}

// funcion de anuncio

function ocultar(){
    document.getElementById('inicio').style.display = 'none';
}

