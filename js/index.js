import { contenido } from './contenido.js';
import { navegadorDesktop } from './desktop/navegador/navegadorDesktop.js';
import { animacionNavDesktop } from './desktop/navegador/animacionNavDesktop.js';
import { mainDesktop } from './desktop/main/mainDesktop.js'

if (window.innerWidth >= 768){
    navegadorDesktop(contenido)
    mainDesktop(contenido)

    animacionNavDesktop()
}