/*Haz un bucle y muestra por consola todos aquellos valores del array que incluyan 
la palabra "Camiseta". Usa la función .includes de javascript. */

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
for (let i=0; i<products.length; i++){
  console.log(products[i].includes('Camiseta'));
}

/* Comprueba en cada uno de los usuarios que tenga al menos dos
 trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log. */

 
const alumns = [
  {name: 'Ana Gomes', T1: false, T2: true, T3: true}, 
  {name: 'Melissa Ridente', T1: true, T2: true, T3: true},
  {name: 'Jose Castillo', T1: false, T2: false, T3: true},
  {name: 'Luis Lopez', T1: true, T2: false, T3: false},
  {name: 'Raquel Benito', T1: true, T2: true, T3: false}
]


var isApproved = false;
for (var i=0; i<alumns.length; i++){
  if (alumns[i].T1 == true && alumns[i].T2 == true && alumns[i].T3 == true){
    isApproved == true;
    console.log("Está aprobado.")
  }else
  console.log("No está aprobado.")
} 



/* Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores. Puedes usar este array: */

const placesToTravell = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (let value of placesToTravell){
  console.log(value)
}

/*Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:*/

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

for (let value in alien){
  console.log(alien[value])
}

