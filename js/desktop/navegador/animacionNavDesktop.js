export const animacionNavDesktop = ()=>{

    document.querySelector('.seccionNavScroll').style.opacity="1"
    document.querySelector('.seccionNavScroll').style.transform="translateY(0%)"
    document.querySelector('.seccionNavScroll').style.transition="all 1s"

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