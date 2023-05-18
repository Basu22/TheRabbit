if (window.innerWidth >= 786){

    let btnOver = document.querySelectorAll('.btnNav')
    btnOver.forEach(btn => {
        btn.addEventListener("mouseover",()=>{
            
            let imgEquipo =  document.querySelector(`.containerImg${btn.id} img`);  
            imgEquipo.style.opacity = 1;
            imgEquipo.style.transform="translateY(0%)"
            imgEquipo.style.filter="grayscale(100%)"
            imgEquipo.style.transition= "all 2s"
            btn.style.textShadow="2px 3px 5px rgba(255,174,0,1)"
            btn.style.transition= "all 1s"
    
        })
    });
    
    btnOver.forEach(btn => {
        btn.addEventListener("mouseout",()=>{
            
            let imgEquipo =  document.querySelector(`.containerImg${btn.id} img`);  
            imgEquipo.style.opacity = 0;
            imgEquipo.style.transform="translateY(25%)"
            imgEquipo.style.transition= "all 2s"
            btn.style.textShadow="0px 0px 0px rgba(255,174,0,1)"
            btn.style.transition= "all 1s"
    
        })
    });

}

