/* inicio do codigo do botão para voltar ao inicio da pagina*/
window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.botaotop')
        scroll.classList.toggle('active', window.scrollY > 450)
})

function backtop (){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
/*Final do codigo do botão para voltar ao inicio da pagina*/

/*codigo do header */

window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 380)
})

