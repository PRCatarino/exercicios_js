// {
//    let recebeLetra = prompt('Digite uma letra do alfabeto:').toLowerCase();
//    let letraValida;
//    letraValida = !isNaN(recebeLetra) ? false : true;

//    if(letraValida && recebeLetra.length == 1){
//       if(recebeLetra=='a' || recebeLetra=="e" || recebeLetra=="i"|| guardaLetra == 'o' || guardaLetra == 'u'){
//          alert('A letra digitada é uma vogal');
//       }else{
//          alert('A letra digitada é uma consoante');
//       }
//    }else{
//       alert("Você deve digitar uma letra")
//    }
// }
{
   let recebeLetra = prompt('Digite uma letra do alfabeto').toLowerCase();
   let letraValida = !isNaN(recebeLetra) ? false : true;
   console.log(letraValida)

   switch (recebeLetra){
      case 'a' || 'e' || 'i' || 'o' || 'u':
         alert('É uma vogal');
         break;
   }
}
