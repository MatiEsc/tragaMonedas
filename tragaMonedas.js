//Declaro las variables
const nombre = prompt("Ingrese tu nombre:");
const images = [
    "../imagenes/rick.jpg",
    "../imagenes/morty.jpg",
    "../imagenes/jerry.png",
];
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const spinButton = document.getElementById("spin");

//Agrego un evento al hacer click que se ejecute la funcion spin "elemento.addEventListener(evento, función);"
spinButton.addEventListener("click", spin);

// Funcion imagenAleatoria() es una función que genera un número aleatorio y luego utiliza ese número para seleccionar una imagen de la matriz images.
// math.random devuelve un numero aleatorio entre 0-1 y se multiplica por las imagenes cargadas, luego math.floor aplica redondeo hacia abajo
function imagenAleatoria() {
    const suerteLoca = Math.floor(Math.random() * images.length);
    return images[suerteLoca];
}

//Se establece la funcion spin
//Se declara las variables dentro de la funcion
function spin() {
    const image1 = imagenAleatoria();
    const image2 = imagenAleatoria();
    const image3 = imagenAleatoria();

    slot1.innerHTML = `<img src="${image1}" alt="Imagen 1">`;
    slot2.innerHTML = `<img src="${image2}" alt="Imagen 2">`;
    slot3.innerHTML = `<img src="${image3}" alt="Imagen 3">`;

    //condicionales si las imagenes son iguales sale cartel e imagen de ganador, sino sigue intentando

    if (image1 === image2 && image2 === image3) {
        document.getElementById("imagenGanador").style.display = "block";
        setTimeout(function () {
            alert("Hey " + nombre + ". Ganaste!!!");
        }, 300);
    } else {
        document.getElementById("imagenGanador").style.display = "none";
    }
}
