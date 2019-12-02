var numFilme = 0;

function tocaAnterior(){
     numFilme--;
     if (numFilme < 0){
         numFilme = 2;
        
     }
     document.getElementById("myvideo").src = "./musica" + numMusica + ".mp3";
     document.getElementById("myvideo").play();   

}

function tocaAtual(){
     console.log("atual = " + document.getElementById("myvideo").src);

     document.getElementById("myvideo").play();   
     console.log("ah... chato");
}

function paraTudo(){
    document.getElementById("myvideo").pause();      


}