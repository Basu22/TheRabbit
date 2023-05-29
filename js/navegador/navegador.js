import * as data from '../contenido_nav.js';
import * as animacionNav from './animacionNav.js';
import * as animacionNavMobile from './animacionNavMobile.js';

let navegador = document.querySelector('.navegador')
let cantidad = 1

if (window.innerWidth >= 768){
    
    //creo el contenedor del logo del navegador.
    let seccionLogo = document.createElement('section')
    seccionLogo.classList.add('seccionLogo')
    //le inserto la imagen del Logo
    seccionLogo.insertAdjacentHTML('beforeend',`
        <img src="./img/TheRabbitIso-04.png" alt="">
        `)
    navegador.appendChild(seccionLogo)

    //creo la seccion de la botonera del navegador
    let seccionBtnNav = document.createElement('section')
    seccionBtnNav.classList.add('seccionBtnNav')
    navegador.appendChild(seccionBtnNav)

    //creo la seccion de las imagenes del navegador
    let seccionImgNav = document.createElement('section')
    seccionImgNav.classList.add('seccionImgNav')
    navegador.appendChild(seccionImgNav)

    //creo la seccion del navegador cuando scrolleo para abajo
    let seccionNavScroll = document.createElement('section')
    seccionNavScroll.classList.add('seccionNavScroll')
    navegador.appendChild(seccionNavScroll)


    for (const e in data.contenido) {

        seccionImgNav.insertAdjacentHTML('beforeend',`
        <article class="containerImg" id="imgNav${cantidad}">
            <img src="./img/Equipo${cantidad}.jpg" alt="">
        </article>
        `)
        document.querySelector(`#imgNav${cantidad}`).style.gridArea = `img${cantidad}`

        //insertamos HTML armando desde archivo JS
        seccionBtnNav.insertAdjacentHTML('beforeend',
        `
        <article class="btnNav" id="btn${cantidad}">
            <a href="#"><span id="${cantidad}">${data.contenido[e].nombreNav}</span></a>
        </article>
        `)
        //agregamos un style de Grid Area por cada linea de navegador.
        document.querySelector(`#btn${cantidad}`).style.gridArea = `btn${cantidad}`
        
        //agregamos el navegador scroll
        seccionNavScroll.insertAdjacentHTML('beforeend',
        `
        <article class="btnNavScroll" id="btnScroll${cantidad}">
            <a href="#"><span id="${cantidad}">${data.contenido[e].nombreNav}</span></a>
        </article>
        `)
        //agregamos un style de Grid Area por cada linea de navegador.
        document.querySelector(`#btnScroll${cantidad}`).style.gridArea = `btn${cantidad}`
        
        cantidad++
    }

    let seccionLogoScroll = document.createElement('section')
    seccionLogoScroll.classList.add('seccionLogoScroll')
    //le inserto la imagen del Logo
    seccionLogoScroll.insertAdjacentHTML('beforeend',`
        <img src="./img/TheRabbitIso-04.png" alt="">
        `)
    seccionNavScroll.appendChild(seccionLogoScroll)
    
    //ejecuto la aninación del Navegador solo si estoy en Desktop
    animacionNav.animacionNav()

}else{

    //LOGO
    //creo el contenedor del logo del navegador.
    let seccionLogo = document.createElement('section')
    seccionLogo.classList.add('seccionLogo')
    //le inserto la imagen del Logo
    seccionLogo.insertAdjacentHTML('beforeend',`
        <img src="./img/TheRabbitIso-04.png" alt="">
        `)
    navegador.appendChild(seccionLogo)


    //MENU HAMBURGUESA
    let navHamb = document.createElement('section')
    navHamb.classList.add('navHamb')

    for (const e in data.contenido) {

        //insertamos HTML armando desde archivo JS
        navHamb.insertAdjacentHTML('beforeend',
        `            
        <article class="btnNav" id="btn${cantidad}">
            <a href="#"><span id="${cantidad}">${data.contenido[e].nombreNav}</span></a>
        </article>
        `)
        //agregamos un style de Grid Area por cada linea de navegador.
        /* document.querySelector(`#btn${cantidad}`).style.gridArea = `btn${cantidad}` */
        cantidad++
    }
    navegador.appendChild(navHamb)

    //BOTON HAMBURGUESA
    let btnHamb = document.createElement('section')
    btnHamb.classList.add('btnHamb')
    
    btnHamb.insertAdjacentHTML('beforeend',`
        <button>
            <span class="lineaSuperior"></span>
            <span class="lineaMedia"></span>
            <span class="lineaInferior"></span>
        </button>
    `)
    navegador.appendChild(btnHamb)

    animacionNavMobile.animacionNavMobile()
}