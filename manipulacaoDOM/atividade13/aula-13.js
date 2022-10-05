let btnCalcular = document.getElementById('calcular');
let btnLimpar = document.getElementById('limpar');  
let numero = document.getElementById('numero');
let arrValores = [];
let resultadoDiv = document.getElementById('resultado');
let calculado = 0;
let preenchido = true;

function addEvent(){
    document.getElementById('limpar').addEventListener('click',()=>{
        limpar(resultadoDiv)
    })
    document.getElementById('calcular').addEventListener('click',()=>{
        adicionaArr()
    })
}

function limpar(arr,){
    arr.innerHTML = '';
    arrValores = [];
}

function adicionaArr(){
    if(numero.value > 0){
        arrValores.push(numero.value);
        calculado = calculaTriplo(arrValores);
        resultadoDiv.innerHTML = calculado
    }
}
function calculaTriplo(arr){

    let arrValoresTriplo = arr.map(function(arr){
        return arr * 3
    })
    return arrValoresTriplo;
}

addEvent()



