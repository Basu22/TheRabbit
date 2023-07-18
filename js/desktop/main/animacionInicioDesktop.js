export const animacionInicio = ()=>{

    window.addEventListener('scroll',()=>{

        let artInicio = document.querySelector('.cajaCarouselTexto')

        if(artInicio.getBoundingClientRect().top<window.scrollY){
            document.querySelector('.contenedorCarouselTexto').style.opacity = "1";
            document.querySelector('.contenedorCarouselTexto').style.transform="translateX(0%)";
            document.querySelector('.contenedorCarouselTexto').style.transition="all 1s";
        }else{
            document.querySelector('.contenedorCarouselTexto').style.opacity = "0";
            document.querySelector('.contenedorCarouselTexto').style.transform="translateX(2%)";
            document.querySelector('.contenedorCarouselTexto').style.transition="all 2s";
        }

    })

} 