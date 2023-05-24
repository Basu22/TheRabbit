import * as data from './navegador/contenido_nav.js';

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


    for (const e in data.contenidoInicio) {

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
            <a href="#"><span id="${cantidad}">${data.contenidoInicio[e].nombreNav}</span></a>
        </article>
        `)
        //agregamos un style de Grid Area por cada linea de navegador.
        document.querySelector(`#btn${cantidad}`).style.gridArea = `btn${cantidad}`
        cantidad++
    }
}else{

    document.querySelector('.containerImg').remove()
    document.querySelector('.btnNav').remove()

    navegador.insertAdjacentHTML('beforeend',`
        <section class="menuHamb">
            <article class="circulo">
                    /*circulo*/
            </article>
        </section>
    `)

    let seccionNav = document.createElement('section')

    for (const e in data.contenidoInicio) {

        //insertamos HTML armando desde archivo JS
        seccionNav.insertAdjacentHTML('beforeend',
        `            
        <article class="btnNav" id="btn${cantidad}">
            <a href="#"><span id="${cantidad}">${data.contenidoInicio[e].nombreNav}</span></a>
        </article>
        `)
        //agregamos un style de Grid Area por cada linea de navegador.
/*         document.querySelector(`#btn${cantidad}`).style.gridArea = `btn${cantidad}` */
        cantidad++
    }

    document.body.childNodes[1].childNodes[1].appendChild(seccionNav).classList.add('navHamb')


}