$( document ).ready(function(){

    alert("ola");

});



/*
function ola() {
    $(".botao-menu").hasClass("on") ? $(".botao-menu").removeClass("on") : $(".botao-menu").addClass("on")
  }
*/



/*
$("#cep").blur(function(){
  var cep = this.value.replace(/[^0-9]/, "");

  if(cep.length != 8){
    return false;
  }

  var url = "https://viacep.com.br/ws/"+cep+"/json/";

  $.getJSON(url, function(dadosRetorno){
    try{
      $("#endereco").val(dadosRetorno.logradouro);
						$("#bairro").val(dadosRetorno.bairro);
						$("#cidade").val(dadosRetorno.localidade);
						$("#uf").val(dadosRetorno.uf);
					}catch(ex){}
				});
			});

*/









      function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
       
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
};
    
function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";
          

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};








function inicializa(){
var bt = document.getElementById("botao");
bt.onclick = abreURL;
}


function abreURL(){

var cep = document.getElementById("cep");
 if(cep.value == "" || cep.value.length != 9){
  alert("Preencha um CEP corretamente na caixa de texto");

  return; 
 }

 alert("Funciona ate aqui!");

var XHR = new XMLHttpRequestXMLHttpRequest();
XHR.onreadystatechange = function(){

	if(XHR.readyState == 4){
		var div = document.getElementById("resposta");
    
	if(XHR.status == 200){
		div.innerHTML = XHR.XHR.onreadystatechange = function(){

	if(XHR.readyState == 4){
		var div = document.getElementById("resposta");
    
	if(XHR.status == 200){
		var obj = JSON.parse(XHR.responseText);
		div.innerHTML = obj.logradouro + '' + obj.complemento + '-' + obj.bairro + '-' + obj.localidade +
		'-' + obj.uf;
	}else{

		div.innerHTML = "Erro ao consultar a API!";

	} 
 }
}
      }responseText;
       }else{
	div.innerHTML = "Erro ao consultar a API!";
	      }
      }
    

     var url = 'https://viacep.com.br/ws/' + cep.value + '/json';
     XHR.open("GET", url);
     XHR.send();
    }











