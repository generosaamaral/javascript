function BuscarId() {
    var id = document.getElementById("IDusuario").value;
    console.log("bucar id" + id);



    var URL = "https://jsonplaceholder.typicode.com/users/" + id;
    console.log("Montei a URL...");
    console.log(URL);

    fetch(URL, { method: "GET" })
        .then(response => response.json())
        .then(json => preencheHTML(json));
}

function preencheHTML(json) {
    var result = document.getElementById("result");
    result.innerHTML += json.id + "<br/>";
    result.innerHTML += json.name + "<br/>";
    result.innerHTML += json.username + "<br/>";
    result.innerHTML += json.address.street + "<br/>";
    result.innerHTML += json.address.suite + "<br/>";
    result.innerHTML += json.address.city + "<br/>";
    result.innerHTML += json.address.zipcode + "<br/>";
    result.innerHTML += json.phone + "<br/>";
    result.innerHTML += json.website + "<br/>";
    result.innerHTML += json.company.name + "<br/>";
    result.innerHTML += json.company.catchPhrase + "<br/>";
    result.innerHTML += json.company.bs + "<br/>";

}