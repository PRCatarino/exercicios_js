let arrMercado = ["Sem cadastro","Leite","Ovo","Farinha","Milho","Cagé"];

let codProduto = prompt('Digite o codigo do produto');

let encontrarProduto = ''

if(encontrarProduto = arrMercado[codProduto] === undefined && codProduto != '' && codProduto !=0){
  prompt(`Deseja adicionar produto ${codProduto}`, 'Sim');
  arrMercado.push(codProduto);
  alert(`Seu produto foi adicionado ${codProduto}`);
}else{
  encontrarProduto = arrMercado[codProduto];

  if(encontrarProduto != '' && codProduto !=0){
    alert(encontrarProduto);

  }else if(codProduto == '0') {
    alert('Deve digitar um numero maior que 0');
  }else{
    alert('Deve digitar um numero');
  }

}


