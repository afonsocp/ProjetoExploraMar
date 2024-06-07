var tipo = document.getElementById("Tipo");
var descricao = document.getElementById("Descricao");
var especie = document.getElementById("Especie");
var habitat = document.getElementById("Habitat");
var populacao = document.getElementById("Populacao");
var risco = document.getElementById("Risco");
var anterior = document.getElementById("Anterior");
var proximo = document.getElementById("Proximo");
var imagem = document.getElementById("Imagem");
var controle = 1;
setInterval(trocarInfo,1);
function trocarInfo(){
    if (controle == 1){
        imagem.src = "../Images/tartaruga1.png";
        tipo.innerText = "Tartaruga";
        descricao.innerText = "A tartaruga é um réptil com casco protetor, encontrado em diversos habitats. Alimenta-se de vegetais, pequenos animais e frutas, sendo conhecida por sua longevidade e movimentos lentos.";
        especie.innerText = "Espécie: Tartaruga-Verde";
        habitat.innerText = "Habitat: Oceano Pacifico";
        populacao.innerText = "População: 1.5 Bilhões";
        risco.innerText = "Risco: Ameaçada";
        anterior.style.display = "none";
        proximo.style.display = "block";
    }else if(controle == 2){
        imagem.src = "../Images/depositphotos_46032899-stock-photo-blue-whale.jpg";
        tipo.innerText = "Baleia";
        descricao.innerText = "A baleia azul é um mamifero chegando a um comprimento maximo confirmado de até 29.9 metros e pesando até 199 toneladas, é o maior animal já ter existido.";
        especie.innerText = "Espécie: Baleia Azul";
        habitat.innerText = "Habitat: Essa espécie é encontrada em todos os oceanos do planeta";
        populacao.innerText = "População: estimado entre 5000 e 15000 indivíduos em 2018";
        risco.innerText = "Risco: Sim";
        anterior.style.display = "block";
        proximo.style.display = "none";
    }
}
function proxi(){
    controle++;
}
function anteriorr() {
    controle--;
}