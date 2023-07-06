import * as data from './contenido_nav.js';
import { animacionNavDesktop } from './animacionNavDesktop.js';
import { animacionNavMobile } from './animacionNavMobile.js';

let header = document.querySelector('.header')
let navegador = document.querySelector('.navegador')
let cantidad = 1

if (window.innerWidth >= 768){
    
    let seccionLogo = document.createElement('section');
    seccionLogo.classList.add('seccionLogo');

    //---------- LOGO DEL HEADER-----------//
    let logo = document.createElement('img');
    logo.src = './img/logo/TheRabbitAqua.png'
    seccionLogo.appendChild(logo)
    navegador.appendChild(seccionLogo)
        
    let seccionName = document.createElement('section');
    seccionName.classList.add('seccionName');

    let name = document.createElement('img');
    name.src = './img/logoTexto/therabbitTextWhite.png';
    seccionName.classList.add('seccionName');
    seccionName.appendChild(name)
    navegador.appendChild(seccionName)
    


    //---------- VIDEO DEL HEADER-----------//
    let seccionVideo = document.createElement('section')
    seccionVideo.classList.add('seccionVideo')
    
    let videoNavegador = document.createElement('video')
    videoNavegador.src = "./video/video_therabbit2.mp4"
    videoNavegador.autoplay = 'autoplay'
    videoNavegador.loop = 'loop'
    videoNavegador.muted='muted'
    header.appendChild(seccionVideo).appendChild(videoNavegador)

    //---------- TITULO Y BOTON DEL HEADER-----------//
    let seccionTitulo = document.createElement('section');
    seccionTitulo.classList.add('seccionTitulo');
    
    let textoTitulo = document.createElement('h1')
    textoTitulo.insertAdjacentText('beforeend',data.contenido[0].copy1_t1)
    seccionTitulo.appendChild(textoTitulo)
    
    let botonTitulo = document.createElement('button');
    botonTitulo.classList.add('botonTitulo');
    botonTitulo.insertAdjacentText('beforeend',data.contenido[0].cta_t1);
    seccionTitulo.appendChild(botonTitulo)

    navegador.appendChild(seccionTitulo)
    
    //---------- NAVEGADOR SCROLL-----------//
    let seccionNavScroll = document.createElement('section')
    seccionNavScroll.classList.add('seccionNavScroll')
    navegador.appendChild(seccionNavScroll)

    for (const e in data.contenido) {
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
        <img src="./img/logo/TheRabbitBlack.png" alt="">
        `)
    seccionNavScroll.appendChild(seccionLogoScroll)
    
    //ejecuto la aninación del Navegador solo si estoy en Desktop
    animacionNavDesktop()

}else{

    //LOGO
    //creo el contenedor del logo del navegador.
    let seccionLogo = document.createElement('section')
    seccionLogo.classList.add('seccionLogo')
    //le inserto la imagen del Logo
    seccionLogo.insertAdjacentHTML('beforeend',`
        <img src="./img/TheRabbitIso-celeste.png" alt="">
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

    animacionNavMobile()
}