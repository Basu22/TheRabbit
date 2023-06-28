export const animacionNavDesktop = ()=>{
    // cambio de video por clic en boton titulo
    let video = 2;
    let totalVideos = 10;
    let botonTitulo = document.querySelector('.botonTitulo');
    let videoNavegador = document.querySelector('.seccionVideo video')
    
    botonTitulo.addEventListener('click',()=>{
        if (video<totalVideos){
            videoNavegador.src = `./video/video_therabbit${video}.mp4`
            ++video;
        }else{
            videoNavegador.src = `./video/video_therabbit${video}.mp4`
            video=1;
        }

    })

    //Seccion Navegador Scroll
    
    window.addEventListener('scroll',()=>{
        
        if(document.querySelector('.header').getBoundingClientRect().bottom===0){
  
              document.querySelector('.seccionNavScroll').style.opacity="1"
              document.querySelector('.seccionNavScroll').style.transform="translateY(0%)"
              document.querySelector('.seccionNavScroll').style.transition="all 1s"
           }else if (document.querySelector('.header').getBoundingClientRect().bottom>0) {
              document.querySelector('.seccionNavScroll').style.opacity="0"
              document.querySelector('.seccionNavScroll').style.transform="translateY(-50%)"
              document.querySelector('.seccionNavScroll').style.transition="all 1s"
           }
      })
  
      let btnOverScroll = document.querySelectorAll('.btnNavScroll')
  
      btnOverScroll.forEach(btn => {
          btn.addEventListener("mouseover",()=>{      
              btn.style.backgroundColor="rgb(120, 180, 185)";
              btn.style.transition= "all 1s";
          })
  
          btn.addEventListener("mouseout",()=>{      
              btn.style.backgroundColor="rgb(0, 0, 0)";
              btn.style.transition= "all 1s";
          })
      });
}