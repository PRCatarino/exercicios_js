form.addEventListener('submit', function(event) {
    event.preventDefault();

    const sobrenome = lastName.value;
    const name = nome.value;
    const cpfNumber = cpf.value;
    let digitaTela = document.getElementById('feedback');
    let camposPreenchidos = false;
    let cpfCorreto = false;
    
    if(name.length > 0){

        camposPreenchidos = true;
    }else{
        digitaTela.style.color = "#790202b0"
        digitaTela.innerHTML = 'Nome não preenchido'
        return;
    }

    if (camposPreenchidos && sobrenome.length > 0){

        camposPreenchidos = true;
    }else{
        digitaTela.style.color = "#790202b0"
        digitaTela.innerHTML = 'Sobrenome não preenchido'
        return;
    }


    if(camposPreenchidos && cpfNumber.length > 0) {

        camposPreenchidos = true;
    }else{
        digitaTela.innerHTML = 'Cpf não preenchido' 
        return;
    }

    if(cpfNumber.length == 11){
        digitaTela.innerHTML = 'cpf está certo'
        cpfCorreto = true;
    }else{
        digitaTela.innerHTML = 'Cpf incorreto'
        return;
    }

    if(camposPreenchidos && cpfCorreto){
        digitaTela.style.color = "Blue"
        digitaTela.innerHTML = 'Tudo está correto'
    }
})