
let numero = null;
let click = document.getElementById('clicks')
let clicks = 0
let temporizador = false;
let timer = numero;
let mostrarTiempo = document.getElementById('tiempo');
let tiempoRegresivo = null;
let contadorInicio = false;


const inicio = document.getElementById('comenzar');

inicio.addEventListener('click', comienzo);

//comenzar
function comienzo(){
    if(!contadorInicio && numero != 0){
    contadorInicio = true;
    contarTiempo();
    resetearClicks();
    resetearJuego();
    inicio.disabled = true;

    }else{
        alert('indique un numero positivo o mayor a 0')
    }
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

// Función principal
function darColor(id) {
    if(contadorInicio){
        const boton = document.getElementById(id);
        const botonSeleccionado = Array.from(document.querySelectorAll('.boton'));
        // Verifica si el botón actual ya tiene la clase 'boton-seleccionado'
        const tieneClaseSeleccionada = boton.classList.contains('boton-seleccionado');
        const indiceAleatorio = Math.floor(Math.random() * botonSeleccionado.length );
        const botonAleatorio = botonSeleccionado[indiceAleatorio];
        
        // Si el botón ya tiene la clase 'boton-seleccionado', quítala
        if (tieneClaseSeleccionada) {
            
                boton.classList.remove('boton-seleccionado');
                botonAleatorio.classList.add('boton-seleccionado')       
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



