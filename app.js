let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está registrado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}
//Función chat gpt
function actualizarLista() { 
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = amigo;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "x";
        botonEliminar.onclick = function() { eliminarAmigo(index); };

        elementoLista.appendChild(botonEliminar);
        lista.appendChild(elementoLista);
    });
}

function eliminarAmigo(indice) {
    amigos.splice(indice, 1);
    actualizarLista();
}
//función comparando tamaño mínimo del array como condicional if
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoDeTodos = amigos[indiceSorteado];

    mostrarResultado(amigoDeTodos);
}

function mostrarResultado(amigoDeTodos) {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    let elementoLista = document.createElement("li");
    elementoLista.textContent = `🎉 ¡El amigo secreto es: ${amigoDeTodos}! 🎁`;

    resultadoLista.appendChild(elementoLista);
}

//faltaría botón

function reiniciarRegistro() {
    amigos.length = 0;
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
    asignarTextoElemento("p", "Agrega amigos y sortea uno al azar.");
}
