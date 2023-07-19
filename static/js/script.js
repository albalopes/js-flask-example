
function mensagem(e){
    alert(e.innerHTML);
}

links = document.querySelectorAll("a");
links.forEach(el => {
    el.addEventListener('click', () => mensagem(el) )
});
