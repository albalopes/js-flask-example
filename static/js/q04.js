function trocarImagem(){
    var imagem = document.querySelector("img");
    var forma = document.getElementById("forma").value;
    if (forma=="circulo" || forma =="Circulo" || forma=="Círculo"){
        imagem.src="/static/imgs/circulo.avif";
    }
}
