if (window.innerWidth >= 786){

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


    let header = document.querySelector('header');
    let navegador = document.querySelector('.navegador')
    console.log(navegador[0])
    
    window.addEventListener('scroll',()=>{

        if(window.scrollY>seccionBtnNav.offsetTop){
            header[0].style.display="none"
        }
    })
}

