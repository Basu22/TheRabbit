export const carouselInicio = ()=>{

    const articuloCarousel = document.querySelector('.artCarousel');
    const cajaCarousel = document.querySelector('.cajaCarousel');
    const contenedorCarousel = document.querySelectorAll('.contenedorCarouselTexto');
    const flechaCarouselIzquierda = document.querySelector('.flechaCarouselIzquierda');
    const flechaCarouselDerecha = document.querySelector('.flechaCarouselDerecha');
    const gap_column_css = 15
    
    
    const propiedadesCarousel = articuloCarousel.getBoundingClientRect()
    
    contenedorCarousel.forEach(caja=>{
        caja.style.width = ((propiedadesCarousel.width/3)-20)+'px'
    })
    
    //ubicacion flecha izquierda
    flechaCarouselIzquierda.style.left = (propiedadesCarousel.left - 50)+'px'
    flechaCarouselIzquierda.style.top = ((propiedadesCarousel.bottom - propiedadesCarousel.top)+propiedadesCarousel.height/2)+'px'
    
    flechaCarouselIzquierda.addEventListener('click',()=>{
      
        if ((cajaCarousel.getBoundingClientRect().right-gap_column_css) > articuloCarousel.getBoundingClientRect().right){
            cajaCarousel.style.transform += `translateX(-${(propiedadesCarousel.width/3-5)}px)` 
            cajaCarousel.style.transition = 'transform 0.3s'
            flechaCarouselIzquierda.style.opacity = '1'
            flechaCarouselDerecha.style.opacity = '1'
        }else{
            flechaCarouselIzquierda.style.opacity = '0'
        }   
    })

    flechaCarouselDerecha.addEventListener('click',()=>{
        if ((cajaCarousel.getBoundingClientRect().left+gap_column_css) < articuloCarousel.getBoundingClientRect().left){
            cajaCarousel.style.transform += `translateX(${(propiedadesCarousel.width/3-5)}px)`
            flechaCarouselDerecha.style.opacity = '1'
            flechaCarouselIzquierda.style.opacity = '1'
        }else{

            flechaCarouselDerecha.style.opacity = '0'
        }
      })

    //ubicacion flecha derecha
    flechaCarouselDerecha.style.left =(propiedadesCarousel.width+propiedadesCarousel.left)+'px'
    flechaCarouselDerecha.style.top = ((propiedadesCarousel.bottom - propiedadesCarousel.top)+propiedadesCarousel.height/2)+'px'
    

    console.log(cajaCarousel.getBoundingClientRect(), propiedadesCarousel)

}