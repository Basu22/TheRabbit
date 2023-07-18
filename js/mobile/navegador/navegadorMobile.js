
export const navegadorMovile = ()=>{
    
    let header = document.querySelector('.header')
    let navegador = document.querySelector('.navegador')
    let cantidad = 1
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

    for (const itemsNav in contenido[0]) {

        //insertamos HTML armando desde archivo JS
        navHamb.insertAdjacentHTML('beforeend',
        `            
        <article class="btnNav" id="btn${cantidad}">
            <a href="#"><span id="${cantidad}">${itemsNav}</span></a>
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

