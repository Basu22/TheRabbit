export function animacionNav(){

    if (window.innerWidth >= 786){
    
        //Seccion Navegador Fijo
        
        let btnOver = document.querySelectorAll('.btnNav')
    
        btnOver.forEach(btn => {
            btn.addEventListener("mouseover",()=>{      
    
                let imgEquipo =  document.querySelector(`#imgNav${btn.childNodes[1].childNodes[0].id} img`);  
                imgEquipo.style.filter =' blur(0px) grayscale(0%)';
                imgEquipo.style.transform="translateX(-10%)";
                imgEquipo.style.transition= "all 2s";
                btn.style.backgroundColor="rgb(120, 180, 185)";
                btn.style.transition= "all 1s";
        
            })
        });
        
        btnOver.forEach(btn => {
            btn.addEventListener("mouseout",()=>{
                
                let imgEquipo =  document.querySelector(`#imgNav${btn.childNodes[1].childNodes[0].id} img`);  
                imgEquipo.style.filter =' blur(10px) grayscale(100%)';
                imgEquipo.style.transform="translateX(0%)";
                imgEquipo.style.transition= "all 2s";
                btn.style.backgroundColor="rgb(0, 0, 0)";
                btn.style.transition= "all 1s";
        
            })
        });
    
    
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
}


