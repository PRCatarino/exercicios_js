let recebeCPF = prompt('Digite cpfs');
let listaCpf = recebeCPF.split(',')
console.log(listaCpf);

function checkCpfs(){
    for(brakeList of listaCpf){
        if(brakeList.length == 11){
            console.log('true');
        }
    }
}
console.log(checkCpfs(listaCpf));
