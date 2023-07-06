export const animacionInicio = ()=>{

    window.addEventListener('scroll',()=>{

        let artInicio = document.querySelector('.textoInicio')

        if(artInicio.getBoundingClientRect().top<window.scrollY){
            document.querySelector('.textoInicio').style.opacity = "1";
            document.querySelector('.textoInicio').style.transform="translateX(0%)";
            document.querySelector('.textoInicio').style.transition="all 1s";
        }else{
            document.querySelector('.textoInicio').style.opacity = "0";
            document.querySelector('.textoInicio').style.transform="translateX(2%)";
            document.querySelector('.textoInicio').style.transition="all 2s";
        }

    })

} 