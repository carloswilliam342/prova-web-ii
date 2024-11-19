
var alf = [];

// function criptografia(mensagem, chave, converter){
//     for (i = )
// }

 export  function cifraLetra(letra, chave){
    alf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    letra = alf[chave];
    console.log(letra);
}

// cifraLetra("a", 4);

export  function decifraLetra(letra, chave) {
   
    const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");

    
    let indice = alfabeto.indexOf(letra.toLowerCase());


    if (indice === -1) return letra;

   
    let novoIndice = (indice - chave) % alfabeto.length;

  
    if (novoIndice < 0) novoIndice += alfabeto.length;

    let letraDecifrada = alfabeto[novoIndice];

 
    if (letra === letra.toUpperCase()) {
        return letraDecifrada.toUpperCase();
    } else {
        return letraDecifrada;
    }
}

// console.log(decifraLetra("s", 3)); 

