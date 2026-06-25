let arreglo = {
    input_name : "jhonathan",
    input_old : "18",
    input_email : "pedrazajhonathan9@Gmail.com"
}

function hola(target){
    arreglo = {...arreglo,
        [target.name] : target.value
    }
}


function mandar(){
    
    console.log(arreglo)    
}