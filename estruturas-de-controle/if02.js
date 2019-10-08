function teste1(num) {
    if(num > 7)
        console.log(num)

    console.log('Final') // sempre sera executada
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); // o ";" encerra a sentença, não usar ele nas estruturas de controle 
    
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)