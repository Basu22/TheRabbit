import * as data from '../contenido_nav.js';
import * as animacion from './animacionInicio.js'

if (window.innerWidth >= 768){
    let seccionInicio = document.createElement('section');
    seccionInicio.classList.add('seccionInicio');

    seccionInicio.insertAdjacentHTML('beforeend',`
        <article class="artInicio">
            <article class="tituloInicio">
                <h1>${data.contenido[0].titulo1}</h1>
            </article>
            <article class="textoInicio">
                <p>${data.contenido[0].copy1_t1}</p>
                <p>${data.contenido[0].copy2_t1}</p>
                <p>${data.contenido[0].copy3_t1}</p>
            </article>
        </article>
    `)

    document.querySelector('main').appendChild(seccionInicio)

    animacion.animacionInicio()

}
