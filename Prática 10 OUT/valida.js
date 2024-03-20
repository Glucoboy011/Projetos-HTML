senha = prompt("Digite a sua senha: (Digite 'sair' para cancelar)","");
    if (senha =="abc123"){
        document.getElementById('pagina').style.display = 'block';
    }else if(senha ==""){
        alert("Campo Obrigatório"); window.location = "index.html"
        }else if(senha =="sair"){
            alert("Cancelado."); window.location = "https://clickjogos.com.br"
    }else{
        alert("Senha Errada"); window.location = "index.html"
    }