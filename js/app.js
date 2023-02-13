const resultado = document.querySelector('#resultados');
const resultado2 = document.querySelector('#resultados');
/* VARIABLES */
const equipo = document.querySelector('#equipo');
const marca = document.querySelector('#marca');
const modelo = document.querySelector('#modelo');
const precio = document.querySelector('#precio');
const color = document.querySelector('#color');
const garantia = document.querySelector('#garantia');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;


/* CREANDO OBJETO */
const datosRellenar = {
    equipo: '',
    marca: '',
    modelo: '',
    precio: '',
    color: '',
    garantia: '',
    year: ''
}


document.addEventListener("DOMContentLoaded", () => {

    mostarEquipos(equipoTecnologico);
    llenarYear();
});
/* EVENTOS CAMBIO CHANGE */
equipo.addEventListener('change', e => {
    datosRellenar.equipo = e.target.value;
    filtrarTodosEquipos();
})

marca.addEventListener('change', e => {
    datosRellenar.marca = e.target.value;
    filtrarTodosEquipos();
})

modelo.addEventListener('change', e => {
    datosRellenar.modelo = e.target.value;
    filtrarTodosEquipos();
})

precio.addEventListener('change', e => {
    datosRellenar.precio = parseInt(e.target.value);
    filtrarTodosEquipos();
})

color.addEventListener('change', e => {
    datosRellenar.color = e.target.value;
    filtrarTodosEquipos();
})

garantia.addEventListener('change', e => {
    datosRellenar.garantia = parseInt(e.target.value);
    filtrarTodosEquipos();
})

year.addEventListener('change', e => {
    datosRellenar.year = parseInt(e.target.value);
    filtrarTodosEquipos();
})

/* FUNCIONES */
function mostarEquipos(equipoTecnologico) {
    limpiarHTML();
    equipoTecnologico.forEach((equipos) => {
        const { equipo, marca, modelo, year, precio, color, garantia, img } = equipos;
        /* CREANDO EL DIV PADRE */
        const contenidoTotal = document.createElement("DIV");
        contenidoTotal.classList.add("tecnologia");
        /* CREANDO EL IMG IMG */
        const contenido_imagen = document.createElement('DIV');
        contenido_imagen.classList.add("imagen");
        const imagenMostrar = document.createElement('IMG');
        imagenMostrar.src = `${img}`;
        imagenMostrar.alt = "Imagen equipos";
        /* CREANDO EL TEXTO */
        const contenido_texto = document.createElement('DIV');
        contenido_texto.classList.add("contenido_texto");
        const contenido_texto_1 = document.createElement('DIV')
        const contenido_texto_2 = document.createElement('DIV')
        contenido_texto_1.classList.add("texto1");
        contenido_texto_2.classList.add("texto1");
        contenido_texto_1.innerHTML = `<p>${equipo}<p>marca: ${marca}<p>modelo: ${modelo}<p>año: ${year}`;
        contenido_texto_2.innerHTML = `<p>precio: S/. ${precio}<p>color: ${color}<p>garantia: ${garantia} año`;

        contenido_texto.append(contenido_texto_1, contenido_texto_2);
        contenido_imagen.append(imagenMostrar);
        contenidoTotal.append(contenido_imagen, contenido_texto);
        resultado.appendChild(contenidoTotal)
    });
}

/* RELLENAR EL SELECT HTML DE AÑO */
function llenarYear() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

/* FILTRANDO LOS EQUIPOS CON EL METODO FILTER */
function filtrarTodosEquipos() {
    const resultado = equipoTecnologico.filter(filtrarEquipo).filter(filtrarMarca).filter(filtrarModelo).filter(filtrarYear).filter(filtrarPrecio).filter(filtrarColor).filter(filtrarGarantia);
    /* console.log(resultado); */
    if (resultado.length == 1) {
        resultado2.classList.remove("mostrar");
        resultado2.classList.add("mostrar1");
        console.log(resultado.length);
        mostarEquipos(resultado);
        return
    } if (resultado.length) {
        resultado2.classList.remove("mostrar1");
        resultado2.classList.add("mostrar")
        mostarEquipos(resultado);
    } else {
        noResultado();
    }

}
/* SI NO HAY RESULTADOS */
function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'NO HAY RESULTADOS';
    resultado.appendChild(noResultado);
}


/* FILTROS */
function filtrarEquipo(equipos) {
    const { equipo } = datosRellenar;
    if (equipo) {
        return equipos.equipo === equipo;
    }
    return equipos;
}

function filtrarMarca(equipos) {
    const { marca } = datosRellenar;
    if (marca) {
        return equipos.marca === marca;
    }
    return equipos;
}

function filtrarModelo(equipos) {
    const { modelo } = datosRellenar;
    if (modelo) {
        return equipos.modelo === modelo;
    }
    return equipos;
}

function filtrarYear(equipos) {
    const { year } = datosRellenar;
    if (year) {
        return equipos.year === year;
    }
    return equipos;
}

function filtrarPrecio(equipos) {
    const { precio } = datosRellenar;
    if (precio) {
        return equipos.precio === precio;
    }
    return equipos;
}

function filtrarColor(equipos) {
    const { color } = datosRellenar;
    if (color) {
        return equipos.color === color;
    }
    return equipos;
}


function filtrarGarantia(equipos) {
    const { garantia } = datosRellenar;
    if (garantia) {
        return equipos.garantia === garantia;
    }
    return equipos;
}


/* LIMPIAR HTML */
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}