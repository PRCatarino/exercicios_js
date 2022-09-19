// let cpfUser = prompt('digite seu cpf');

// let cpfValida = false

// function checkCpfUser() {
//     if(cpfUser.length == 11){
        
//         return cpfValida = true;
//     }
//     mascaraCpf()
// }
// function mascaraCpf(){
//     if(cpfValida == true){
//         console.log('rodou')
//     }else{
//         console.log('rodou n')
//     }
// }
// function exibeFunction(){
//     if(checkCpfUser() === true){
//         return;
//     }
// }
// checkCpfUser()
// console.log(exibeFunction(cpfUser))
// console.log(cpfValida)

{
    function recebeCPFUsuario(cpf) {
        if (cpf.length == 11) {
            return true;
        } else {
            return false;
        }
    }
    let recebeCPF = prompt('Digite seu CPF (apenas números): ');
    let cpfValido = recebeCPFUsuario(recebeCPF);
    function cpfFormatado(cpf,cpfVerdadeiro) {
        if (cpfVerdadeiro == true) {
            let parte1 = cpf.slice(0, 3);
            let parte2 = cpf.slice(3, 6);
            let parte3 = cpf.slice(6, 9);
            let parte4 = cpf.slice(9, 11);
            return cpf = `${parte1}.${parte2}.${parte3}-${parte4}`;
        } else {
            return('Digite um CPF válido!');
        }
    }
    alert(cpfFormatado(recebeCPF, cpfValido));
 
}
