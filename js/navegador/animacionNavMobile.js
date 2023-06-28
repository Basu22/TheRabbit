export const animacionNavMobile = ()=>{

    let btnHamb = document.querySelector('.btnHamb button')
    let flag=true

    btnHamb.addEventListener('click',()=>{
        if (flag){
            document.querySelector('.lineaSuperior').style.transform="translateY(2px) rotate(45deg) ";
            document.querySelector('.lineaSuperior').style.backgroundColor="#ffffff";
            document.querySelector('.lineaSuperior').style.transition="all 2s";
            
            document.querySelector('.lineaMedia').style.opacity="0";
            document.querySelector('.lineaMedia').style.transition="all 2s";
            
            document.querySelector('.lineaInferior').style.transform="translateY(-12px) rotate(-45deg)";
            document.querySelector('.lineaInferior').style.backgroundColor="#ffffff";
            document.querySelector('.lineaInferior').style.transition="all 2s";

            document.querySelector('.navHamb').style.transform="translateX(0%)";
            document.querySelector('.navHamb').style.transition="all 2s";

            document.querySelector('.seccionLogo img').style.width="50%";
            document.querySelector('.seccionLogo img').style.transform="translateX(50%)";
            document.querySelector('.seccionLogo img').style.transition="all 2s";


            flag=false;
        }else{
            document.querySelector('.lineaSuperior').style.transform="translateY(0px) rotate(0deg) ";
            document.querySelector('.lineaSuperior').style.backgroundColor="#000000";
            document.querySelector('.lineaSuperior').style.transition="all 1s";
            
            document.querySelector('.lineaMedia').style.opacity="1";
            document.querySelector('.lineaMedia').style.backgroundColor="#000000";
            document.querySelector('.lineaMedia').style.transition="all 1s";
            
            document.querySelector('.lineaInferior').style.transform="translateY(0px) rotate(0deg)";
            document.querySelector('.lineaInferior').style.backgroundColor="#000000";
            document.querySelector('.lineaInferior').style.transition="all 1s";

            document.querySelector('.navHamb').style.transform="translateX(-100%)";
            document.querySelector('.navHamb').style.transition="all 1s";

            document.querySelector('.seccionLogo img').style.width="100%";
            document.querySelector('.seccionLogo img').style.transform="translateX(0%)";
            document.querySelector('.seccionLogo img').style.transition="all 1s";

            flag=true
        }
    })

}