
import { animacionInicio } from './animacionInicioDesktop.js';
import { carouselInicio } from './carouselDesktop.js';

export const mainDesktop = (contenido)=>{

        let seccionInicio = document.createElement('section');
        seccionInicio.classList.add('seccionInicio');
        
        let artTitulo = document.createElement('article');
        artTitulo.classList.add('artTitulo');
        
        artTitulo.insertAdjacentHTML('beforeend',`
        <article class="tituloInicio">
        <h1>${contenido[0].Inicio.titulo1}
        </article>
        `)
    
        seccionInicio.appendChild(artTitulo)    
    
        
    
        let artCarousel = document.createElement('article');
        artCarousel.classList.add('artCarousel');
        let cajaCarousel = document.createElement('article');
        cajaCarousel.classList.add('cajaCarousel');
        
        Object.entries(contenido[0].Inicio.Carrousel)
        .forEach(carrousel=>{
            cajaCarousel.insertAdjacentHTML('beforeend',`
            <article class="contenedorCarouselTexto">
                <p class="cajaCarouselTexto">${carrousel[1].texto}</p>
                <h4 class="cajaCarouselTitulo">${carrousel[1].titulo}</h4>
                <img class="cajaCarouselIcono" src="${carrousel[1].icono}"/>
            </article>
            `)
        })
    
        let flechaCarouselIzquierda = document.createElement('img')
        flechaCarouselIzquierda.classList.add('flechaCarouselIzquierda')
        flechaCarouselIzquierda.src = './img/iconos/chevron-left.svg'
        
        seccionInicio.appendChild(flechaCarouselIzquierda)
        
        let flechaCarouselDerecha = document.createElement('img')
        flechaCarouselDerecha.classList.add('flechaCarouselDerecha')
        flechaCarouselDerecha.src = './img/iconos/chevron-right.svg'
        seccionInicio.appendChild(flechaCarouselDerecha)
        
        
        artCarousel.appendChild(cajaCarousel)
        seccionInicio.appendChild(artCarousel)
    
        document.querySelector('main').appendChild(seccionInicio)
    
        animacionInicio()
        carouselInicio()

}
