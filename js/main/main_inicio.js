import * as data from '../navegador/contenido_nav.js';
import { animacionInicio } from './animacionInicio.js'

if (window.innerWidth >= 768){
    let seccionInicio = document.createElement('section');
    seccionInicio.classList.add('seccionInicio');

    seccionInicio.insertAdjacentHTML('beforeend',`
        <article class="artTitulo">
            <article class="tituloInicio">
                <h1>${data.contenido[0].titulo1}</h1>
            </article>
        </article>
        <article class="artTexto">
            <article class="textoInicio">
                <article class="artParrafo">
                    <p class"texto1">${data.contenido[0].copy1_t1}</p>
                </article>
                <article class="artParrafo">
                    <p class"texto2">${data.contenido[0].copy2_t1}</p>
                </article>    
                <article class="artParrafo">
                    <p class"texto3">${data.contenido[0].copy3_t1}</p>
                </article>
            </article>
        </article>
    `)

    

    document.querySelector('main').appendChild(seccionInicio)

    animacionInicio()

}
