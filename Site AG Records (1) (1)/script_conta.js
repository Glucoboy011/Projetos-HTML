function novaconta(){
   var senha = document.getElementById("senha").value;
   var senha2 = document.getElementById("senha2").value;

   if (senha != senha2){
        alert ('As duas senhas são diferentes. Por favor, digite-as novamente.')
   }
}