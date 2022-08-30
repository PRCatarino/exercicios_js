let guardaLetra = prompt('Digite uma letra do alfabeto:').toLowerCase();


if(guardaLetra == 1 || guardaLetra == 2 || guardaLetra == 3 || guardaLetra == 4 || guardaLetra == 5 || guardaLetra == 6 || guardaLetra == 7 || guardaLetra == 8 || guardaLetra == 9 || guardaLetra == 0 ){
   alert('Deve digitar uma letra do alfabeto para obter o resultado')
}else{
   if(guardaLetra =='a' || guardaLetra == 'e' || guardaLetra == 'i' || guardaLetra == 'o' || guardaLetra == 'u'){
      alert("Letra digitada é uma vogal")
   }else{
      alert("Letra digitada é uma cosoante")
   }
}



