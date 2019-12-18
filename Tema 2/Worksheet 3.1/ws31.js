function validateCreditCard(cCard){
    if(cCard.length != 16)
        return false;
    let contadorDiferentes = 1;
    for(let i = 0; i < 15; i++){
        if(cCard.charAt(i)!=cCard.charAt(i+1)){
            contadorDiferentes++;
        }
    }
    if(contadorDiferentes < 2){
        return false;
    }
    if(parseInt(cCard.charAt(15)%2) != 0){
        return false;
    }
    for
}
