const suma = (numero1, numero2) => {
    let resultado;
    resultado = numero1 + numero2;
    return resultado;
}
console.log(suma(5,10));

const divicion = (numero1, numero2) => {
    let resultado;
    resultado = numero1 / numero2;
    return resultado;
}
console.log(divicion(20,2));
console.log(divicion(20,0));

const filtroNumeros = (numeros) =>{
    const numeroMasGrande = numeros.reduce((maximo, numero) => {
        if (numero > maximo) {
          return numero;
        } else {
          return maximo;
        }
      });
      return numeroMasGrande;

}
console.log(filtroNumeros([2,8,9,7,5,6]));