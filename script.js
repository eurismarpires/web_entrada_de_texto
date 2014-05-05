var estados = [
  "Acre",
  "Alagoas",
  "Amazonas",
  "Amapá",
  "Bahia",
  "Distrito Federal",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Pernambuco",
  "Paraná",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Roraima",
  "Rondônia",
  "Santa Catarina",
  "São Paulo",
  "Sergipe", 
  "Tocantins"
];

//implementar depois para o Ctrl + Espaço trazer todos

function criarLista() 
{
  var busca = document.getElementById("txtBusca");
  var texto = busca.value;  
  var tamTexto = texto.length;
  
  var elem = document.getElementById("lista_de_estados");
    
  if(elem !== null){
     document.body.removeChild(elem);
  }
    
  if(tamTexto > 0){
    var x = document.createElement("SELECT");
    x.setAttribute("id", "lista_de_estados");
    x.setAttribute("size", "4");
    document.body.appendChild(x);
    

  for (var i = 0; i < estados.length; i++){
      var subEstado = estados[i].substr(0,tamTexto);
      if(texto.toLocaleUpperCase() == subEstado.toLocaleUpperCase()){
        var uf = document.createElement("option");
        uf.setAttribute("value", i);
        var nomeEstado = document.createTextNode(estados[i]);        
        uf.appendChild(nomeEstado);
        document.getElementById("lista_de_estados").appendChild(uf);
      }
    
  }
  }
}












function mensagem(){
  var busca = document.getElementById("txtBusca");
  var texto = busca.value;
  document.getElementById("teste").innerHTML=texto;

}

function percorrerLista(){
  var x = document.getElementById("mySelect").length;
  alert("vou percorre a lista de " + x + " elementos");
 
  var itens = document.getElementById("mySelect").options;
  for(var i = 0; i < x; i++) {
    alert(itens[i].text);
    
  }
}
 

 
