function addEventos(){
    document.querySelector(".salvar").addEventListener("click",checkIputs);
}
window.addEventListener("load", addEventos);

function checkIputs(){
    const name = nome.value;
    const mail = email.value;
    const tell = telefone.value;
    let checkIputs = false

    if(name != '' || mail != '' || tell != ''){
        checkIputs = true;
    }
    
    if(checkIputs){
        document.querySelector(".cadastro").style.display = "none";
        document.querySelector("#form").innerHTML = `
            <div class = "cadastrados">
                <h1>Cliente cadastrado</h1>
                <ul>
                    <li>
                        <h3>Cliente 1<h3>
                    </li>
                    <ul>
                        <li><p>Cleyton</p></li>    
                        <li><p>cleytonwide@gmail.com</p></li>   
                        <li><p>1100000000</p></li>    
                    </ul>
                    <li>
                        <h3>Cliente 2</h3>
                    <li>
                    <ul>
                        <li><p>${name}</p></li>
                        <li><p>${mail}</p></li>
                        <li><p>${tell}</p></li>
                    </ul>
                </ul>
            </div>

        `
    }
}
