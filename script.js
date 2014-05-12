var itemSelecionado;
var p = new Pilha();
var tecla_control_ativa = false;
window.onload = function(){
  document.getElementById("txtBusca").onkeydown = function(){
    if( event.which === 90 && event.ctrlKey){
      if(p.size() > 1)
        document.getElementById("txtBusca").value = p.pop(); //armazena os caracters na pilha
        
    }else if( event.which === 32 && event.ctrlKey ){   //ctrl + espaço
        tecla_control_ativa = true;
        listar();
        return false;
    }else if(event.keyCode == 27){ //tecla Esc
      limparLista();
      teclou_control = false;
    }else{
          var txt = document.getElementById("txtBusca").value;
          p.push(txt);            
          var divEstados = document.getElementById("lista_de_estados"); 
          if(event.keyCode == 38){ //seta p/ cima
            tecla_control_ativa = false;
            if(itemSelecionado != divEstados.firstElementChild){
              itemSelecionado = itemSelecionado.previousSibling;
                posicionar(divEstados);
              }
            }else
            if(event.keyCode == 40){ //seta para baixo
              tecla_control_ativa = false;
              if(itemSelecionado != divEstados.lastElementChild){
                 //criarParagrafo("seta para baixo" + itemSelecionado.innerHTML);
                itemSelecionado = itemSelecionado.nextSibling;
                posicionar(divEstados);
              }
            }else
            if(event.keyCode == 13){
              tecla_control_ativa = false;
              var txtEstado = document.getElementById("txtBusca").value;
              var posFin = txtEstado.lastIndexOf(" ") + 1;
              txtEstado = txtEstado.substr(0,posFin);
             
             
              document.getElementById("txtBusca").value =txtEstado + itemSelecionado.innerHTML;
              
              
              
              limparLista();
              return false;
          }else{
            // listar();
            // tecla_control_ativa = false;
            
          }
     }
  }   
  
  
  document.getElementById("txtBusca").onkeyup = function(){
    if(tecla_control_ativa == true){
      listar();
    }
  } 
  


}

function posicionar(divEstados){
  itemSelecionado.className = "atual";
  for(var i = 0; i < divEstados.childNodes.length; i++){
    var divUF = divEstados.childNodes[i];
    if(divUF != itemSelecionado)
      divUF.className = "";
  }     
   
}

function selecionarItem(obj){
  var busca = document.getElementById("txtBusca");
  busca.value = obj.innerHTML;
  limparLista();
  
  
  
  /*
            
              var txtEstado = document.getElementById("txtBusca").value;
              var posFin = txtEstado.lastIndexOf(" ") + 1;
              txtEstado = txtEstado.substr(0,posFin);
             
             
              document.getElementById("txtBusca").value =txtEstado + obj.innerHTML;
              
              
              
              limparLista();
                
  */
  
  
  
  
}
function mouseEntrar(obj){
  obj.className = "atual";
}
function mouseSair(obj){
  var divEstados = document.getElementById("lista_de_estados");
  for(var i = 0; i < divEstados.childNodes.length; i++){
    var divUF = divEstados.childNodes[i];
    divUF.className = "";
  }
}

function listar(){
    console.log(tecla_control_ativa);
    var busca = document.getElementById("txtBusca");
    var texto = busca.value;
    texto = texto.substr(0,busca.selectionStart);
   
    var posIni = texto.lastIndexOf(" ") + 1;
    var posFin = texto.length - posIni;
    
    if(posIni != -1){
      texto = texto.substr(posIni,posFin);
    }
   // var tamTexto = busca.selectionStart;
    var tamTexto = texto.length;
   
    limparLista();
    //adiciona a div principal
    var divPrincipal = document.createElement("DIV");
    divPrincipal.setAttribute("id","lista_de_estados");
    divPrincipal.setAttribute("class","suggestions");
    document.body.appendChild(divPrincipal);
    //adiciona os estados na div principal
    for(var i = 0; i < estados.length; i++){
      if(tamTexto > 0){
        
        var subEstado = estados[i].substr(0,tamTexto);
        if(texto.toLocaleUpperCase() == subEstado.toLocaleUpperCase()){
          criarItens(i);
        }
      }
      else{
        criarItens(i);
      }
    }
    itemSelecionado = document.getElementById("lista_de_estados").firstElementChild;
   // console.log(itemSelecionado.innerHTML);
    if(itemSelecionado !== null)
     itemSelecionado.className = "atual";
   
}
function criarItens(i){
  var divUF = document.createElement("DIV");
  divUF.setAttribute("id",i);
  divUF.setAttribute("onclick","selecionarItem(this)");
  divUF.setAttribute("onmouseover","mouseEntrar(this)");
  divUF.setAttribute("onmouseout","mouseSair(this)");
  txtUF = document.createTextNode(estados[i]);
  divUF.appendChild(txtUF);
  document.getElementById("lista_de_estados").appendChild(divUF);  
}
function limparLista(){
    var elem = document.getElementById("lista_de_estados");
    if(elem !== null){
      document.body.removeChild(elem);
    }  
}

function Pilha(){
  this.vetor = new Array();
  this.ponteiro = 1;
        
  this.isEmpty = function (){
    if(this.ponteiro == -1){
      return true;
    }
    return false;
  }
  this.size = function(){
    if(this.isEmpty()){
      return 0;
    }
    return this.ponteiro;
  }
  this.pop = function(){
    if(this.isEmpty()){
      return null
    }
    return this.vetor[--this.ponteiro];
  }
  this.push = function(v){
    return this.vetor[this.ponteiro++] = v;
  }        
  this.top = function(){
    return this.vetor[this.ponteiro];
  }
}
