window.onload = function() {

const listUsuarios = [
{
    id:1,
    nome:"Thiago Pereira",
    sexo:"Masculino",
    idade:20,
    email:"fulanodetal@termail.com"
},
{
    id:2,
    nome:"Thaís Lins",
    sexo:"Feminino",
    idade:19,
    email:"thaisdetal@gtemail.com"
},
{
    id:3,
    nome:"Mariana Ferreira",
    sexo:"feminino",
    idade:25,
    email:"marianaferreira@tailme.com"
},
{
    id:4,
    nome:"Pedro Ivo Silva",
    sexo:"Masculino",
    idade:28,
    email:"manueltrait@gtepmail.com"
}

]
function listarUsuarios(listUsuarios) { 
    listUsuarios.forEach(function(listUsuarios) {
        document.querySelector('#resultado').innerHTML += `
        <tr>
            <td>${listUsuarios.id}</td>
            <td>${listUsuarios.nome}</td>
            <td>${listUsuarios.sexo}</td>
            <td>${listUsuarios.idade}</td>
            <td>${listUsuarios.email}</td>
        </tr>`        
    });
}
listarUsuarios(listUsuarios)
}