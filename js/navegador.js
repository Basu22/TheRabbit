console.log(window.innerWidth)
if (window.innerWidth < 768){

    document.querySelector('.containerImg1').remove()
    document.querySelector('.containerImg2').remove()
    document.querySelector('.containerImg3').remove()
    document.querySelector('.btnEntrar').remove()
    document.querySelector('.btnEntrar2').remove()
    document.querySelector('.btnEntrar3').remove()

    let navegador = document.querySelector('.navegador')
    navegador.insertAdjacentHTML('beforeend',`
        <section class="menuHamb">
            <article class="circulo">
                    /*circulo*/
            </article>
        </section>
    `)

    let seccionNav = document.createElement('section')
    seccionNav.innerHTML=`
    <article class="btnEntrar">
        <a href="#"><span id="1" class="btnNav">Quienes Somos</span></a>
    </article>
    <article class="btnEntrar2">
        <a href="#"><span id="2" class="btnNav">Donde vamos</span></a>
    </article>
    <article class="btnEntrar3">
        <a href="#"><span id="3" class="btnNav">Contactanos</span></a>
    </article>
    `

    document.body.childNodes[1].childNodes[1].appendChild(seccionNav).classList.add('navHamb')


}