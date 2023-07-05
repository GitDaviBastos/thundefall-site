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