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


window.onload = function()
{
	document.getElementById("txtBusca").onkeypress = function(){
	  if (event.ctrlKey && event.keyCode == 32) {
      criarLista();
	  }
    if (event.ctrlKey)
    return false;	 	  
	}
	document.getElementById("lista_de_estados").onkeypress = function(){
	  //if (event.keyCode == 13) {
      alert("você teclou enter....");
	  //}
	}	
/*	document.getElementById("txtBusca").onkeyup = function(){
	  criarLista();
	}
	
*/	
}

function criarLista() 
{
  var busca = document.getElementById("txtBusca");
  var texto = busca.value;  
  var tamTexto = texto.length;
  
  var elem = document.getElementById("lista_de_estados");
    
  if(elem !== null){
     document.body.removeChild(elem);
  }
    var x = document.createElement("SELECT");
    x.setAttribute("id", "lista_de_estados");
    x.setAttribute("size", "10");
    x.setAttribute("onkeypress","selecionar()");
    document.body.appendChild(x);
    
    
      for (var i = 0; i < estados.length; i++){
        if(tamTexto > 0){
        var subEstado = estados[i].substr(0,tamTexto);
        if(texto.toLocaleUpperCase() == subEstado.toLocaleUpperCase()){
          var uf = document.createElement("option");
          uf.setAttribute("value", i);
          var nomeEstado = document.createTextNode(estados[i]);        
          uf.appendChild(nomeEstado);
          document.getElementById("lista_de_estados").appendChild(uf);
        }
          
        }else{
          var uf = document.createElement("option");
          uf.setAttribute("value", i);
          var nomeEstado = document.createTextNode(estados[i]);        
          uf.appendChild(nomeEstado);
          document.getElementById("lista_de_estados").appendChild(uf);          
          
        }
      }
  }
 
function selecionar(){
  var x = document.getElementById("lista_de_estados").selectedIndex;
  var y = document.getElementById("lista_de_estados").options;
  //alert("Index: " + y[x].index + " is " + y[x].text);
  var txtBusca = document.getElementById("txtBusca");
  txtBusca.innerHTML = y[x].text;
}
    
    
  
  

  





 
