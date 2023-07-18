export const navegadorDesktop = (contenido)=>{
    
    let header = document.querySelector('.header')
    let navegador = document.querySelector('.navegador')
    let cantidad = 1
        
        let seccionLogo = document.createElement('section');
        seccionLogo.classList.add('seccionLogo');
    
        //---------- LOGO DEL HEADER-----------//
        let logo = document.createElement('img');
        logo.src = './img/logoTexto/letrasTheRabbitWhite.png'
        seccionLogo.appendChild(logo)
        navegador.appendChild(seccionLogo)
            
    /*     let seccionName = document.createElement('section');
        seccionName.classList.add('seccionName');
    
        let name = document.createElement('img');
        name.src = './img/logoTexto/therabbitTextWhite.png';
        seccionName.classList.add('seccionName');
        seccionName.appendChild(name)
        navegador.appendChild(seccionName) 
    */
        
        //---------- VIDEO DEL HEADER-----------//
        let seccionVideo = document.createElement('section')
        seccionVideo.classList.add('seccionVideo')
        
        let videoNavegador = document.createElement('video')
        videoNavegador.src = "./video/video_therabbit2.mp4"
        videoNavegador.autoplay = 'autoplay'
        videoNavegador.loop = 'loop'
        videoNavegador.muted='muted'
        header.appendChild(seccionVideo).appendChild(videoNavegador)
    
        //---------- TITULO Y BOTON DEL HEADER-----------//
        let seccionTitulo = document.createElement('section');
        seccionTitulo.classList.add('seccionTitulo');
        
        let textoTitulo = document.createElement('h1')
        textoTitulo.insertAdjacentText('beforeend',contenido[0].Inicio.titulo1)
        seccionTitulo.appendChild(textoTitulo)
        
        let botonTitulo = document.createElement('button');
        botonTitulo.classList.add('botonTitulo');
        botonTitulo.insertAdjacentText('beforeend',contenido[0].Inicio.cta_t1);
        seccionTitulo.appendChild(botonTitulo)
    
        navegador.appendChild(seccionTitulo)
        
        //---------- NAVEGADOR SCROLL-----------//
        let seccionNavScroll = document.createElement('section')
        seccionNavScroll.classList.add('seccionNavScroll')
        navegador.appendChild(seccionNavScroll)
    
        for (const itemsNav in contenido[0]) {
    /*         console.log(data.contenido[1].Inicio) */
            //agregamos el navegador scroll
            seccionNavScroll.insertAdjacentHTML('beforeend',
            `
            <article class="btnNavScroll" id="btnScroll${cantidad}">
                <a href="#"><span id="${cantidad}">${itemsNav}</span></a>
            </article>
            `)
            //agregamos un style de Grid Area por cada linea de navegador.
            document.querySelector(`#btnScroll${cantidad}`).style.gridArea = `btn${cantidad}`
            
            cantidad++
        }
    
        let seccionLogoScroll = document.createElement('section')
        seccionLogoScroll.classList.add('seccionLogoScroll')
        //le inserto la imagen del Logo
        seccionLogoScroll.insertAdjacentHTML('beforeend',`
            <img src="./img/logo/TheRabbitBlack.png" alt="">
            `)
        seccionNavScroll.appendChild(seccionLogoScroll)
        
    

}
