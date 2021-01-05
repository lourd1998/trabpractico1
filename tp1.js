//alert ('un mensaje')
//document.write ('hello world')
//let suma = 5+3 
//document.write (suma)
//let nombre= prompt ('ingrese un nombre de usuario')
//alert ('usted ah ingresado '+ nombre +' como nombre de usuario')
//let numeroA = 12.15
//let numeroB = 15.05
//let resultado = parseInt( numeroA + numeroB)
//console.log (resultado)
/*let comparacion = prompt ('por favor ingrese un nuemero para ser comparado')
let comparacion2 = prompt ('ingrese otro numero')
if (comparacion >comparacion2){
    document.write (`el numero ${comparacion} es mayor`)
}else if (comparacion2> comparacion){
    document.write(`el numero ${comparacion2} es mayor`)
}else if (comparacion==comparacion2){
    document.write('los numeros ingresados son de igual valor')
}*/

/*let esMayor= parseInt (prompt ('ingrese el primer numero para ser comparado'))
let esMayor2= parseInt (prompt('ingrese un segundo numero'))
let esMayor3= parseInt (prompt('ingrese un ultimo numero'))

if ( esMayor > esMayor2 && esMayor> esMayor3){
    document.write(`el numero ${esMayor} es el mayor`)
} else if( esMayor2> esMayor && esMayor2 > esMayor3){
    document.write(`el numero ${esMayor2} es es mayor`)
} else if (esMayor3> esMayor && esMayor3>esMayor2) {
    document.write(`el numero ${esMayor3} es el mayor`)
}*/

/*function paridad (){
let esPar= parseInt(prompt ('ingrese un numero para verificar si es par'))
let div= ( esPar% 2)=== 0;
if (div) {
    document.write ('el numeroingresado es par')
} else {
    document.write ('el numero ingresado no es par')
}
}
paridad()*/

let frase= prompt('por favor ingrese una frase')
for(let i=0; i< frase.length; i++){
    if(frase.substr(i,1)== 'a'||frase.substr(i,1)== 'e'|| frase.substr(i,1)=='i'||frase.substr(i,1)=='o'||frase.substr(i,1)=='u'){
        document.write (frase.substr(i,1))
    }
}
 //fin