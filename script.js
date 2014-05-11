var teclou_control = false;
var itemSelecionado;
window.onload = function(){

  document.getElementById("txtBusca").onkeypress = function(){
     if (event.ctrlKey && event.keyCode == 32) {
      listar();
      teclou_control = true;
      return false;
    }
  }
  document.getElementById("txtBusca").onkeyup = function(){
    var busca = document.getElementById("txtBusca");
    var texto = busca.value;
    var tamTexto = texto.length;
    
     if (event.ctrlKey && event.keyCode == 32) {
      listar();
      //criarParagrafo("vou tentar aki.............................");
      teclou_control = true;
      return false;
    }    
    
  /*  
    if(tamTexto > 0 && teclou_control){
      listar();
      return false;
    }
  */  
    
    
    if(event.keyCode == 27) //tecla Esc
    {
      limparLista();
      teclou_control = false;
     // criarParagrafo("condição verdadeira");
    }else{
      //criarParagrafo("condição falsa");
    }    
    
  } 
  document.getElementById("txtBusca").onkeydown = function(){
    var divEstados = document.getElementById("lista_de_estados"); 
    
    
     if (event.ctrlKey && event.keyCode == 32){
      teclou_control = true;
      return false;
    }    
    
    
    if(event.keyCode == 38){ //seta p/ cima
      if(itemSelecionado != divEstados.firstElementChild){
        itemSelecionado = itemSelecionado.previousSibling;
        posicionar(divEstados);
      }
    }
    if(event.keyCode == 40){ //seta para baixo
      if(itemSelecionado != divEstados.lastElementChild){
        itemSelecionado = itemSelecionado.nextSibling;
        posicionar(divEstados);
      }
    }
    if(event.keyCode == 13){
      document.getElementById("txtBusca").value = itemSelecionado.innerHTML;
      limparLista();
      teclou_control = false;
     // return false;
    }
  
  
  
  
  
  
  
  
   // var textarea = document.getElementById("txtBusca");  
  //  var pos = textarea.selectionStart;
//    criarParagrafo(pos);
      
      
      
      
      
      
      
      
      
     
  }   
  document.getElementById("txtBusca").onclick = function(){
    // criarParagrafo("onclick");
  } 
  document.getElementById("lista_de_estados").onkeydown = function(){
    if(event.keyCode == 13) 
     criarParagrafo("teclou enter......");
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
function criarParagrafo(txt){
  var p = document.createElement("p");
  p.innerHTML = txt;
  p.style.top = 300;
  document.body.appendChild(p); 
}
function selecionarItem(obj){
  var busca = document.getElementById("txtBusca");
  busca.value = obj.innerHTML;
  limparLista();
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
    var busca = document.getElementById("txtBusca");
    var texto = busca.value;
    
    
    
    
    var tamTexto = texto.length;
    tamTexto = busca.selectionStart;
    
    
    
    
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
    document.getElementById("lista_de_estados").firstElementChild.className = "atual";
    itemSelecionado = document.getElementById("lista_de_estados").firstElementChild;
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

  

  





 
