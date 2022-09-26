form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name1 = nome1.value;
    const name2 = nome2.value;
    const name3 = nome3.value;
    let checkIputs = false

    if(name1.length > 0 && name2.length > 0 && name3.length > 0){
        checkIputs = true;
    }
    
    if(checkIputs){
         document.querySelector('.nome1Pre').innerHTML = `Nome : ${name1}`
         document.querySelector('.nome2Pre').innerHTML = `Nome : ${name2}`
         document.querySelector('.nome3Pre').innerHTML = `Nome : ${name3}`
    }
})