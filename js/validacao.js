
$(document).ready(function(){
  //controlar o envio do formulario
  $("#formulario").submit(function(event){

    //para cada campo obrigatorio
    $(".obrigatorio").each(function(){

      //armaza o valor do campo
      var valor = $(this).val();
      if(valor==""){
        //coloca uma mensagem no span
        $(this).next("span").text("Campo obrigatório!");

        //parar o envio do Formulários
        event.preventDefault();
      }

    });//fim do each


  });//fim do submit

});//fim do ready
