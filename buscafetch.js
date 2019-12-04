function buscarTodas(){
         fetch("http://www.professorisidro.com.br/tarefas.php", {"method" : "GET"})
         .then(response => response.json())
         .then(json => exibeTodas(json));

}

function exibeTodas(json){
    var result = document.getElementById("resultado");

    for (i=0;i<json.length;i++){
        result.innerHTML+=json[i].nome+"</br>";
        
        
    }

}

var numTarefa = 0;

function criarTarefa(){
    numTarefa++;
    var textoTarefa = document.getElementById("tarefa").value;
    var tarefaDOM = document.createElement("div");
    tarefaDOM.setAttribute("id","t"+numTarefa);
    tarefaDOM.setAttribute("draggable","true");
    tarefaDOM.setAttribute("class","itemtarefa");
    tarefaDOM.setAttribute("ondragstart","pegaItem(event);");
    tarefaDOM.innerHTML = textoTarefa;
    
    document.getElementById("pendentes").appendChild(tarefaDOM);
}

function pegaItem(evt){                  