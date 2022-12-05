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

/*Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. 
Imprime en un console log el array. Puedes usar este array: */

const placesToTravel = [
  {id: 5, name: 'Japan'}, 
  {id: 11, name: 'Venecia'},
  {id: 23, name: 'Murcia'},
  {id: 40, name: 'Santander'}, 
  {id: 44, name: 'Filipinas'}, 
  {id: 59, name: 'Madagascar'}
]


for (let i=0; i<placesToTravel.length; i++){
  if (placesToTravel[i].id == 11 || placesToTravel[i].id ==40)
  {
    placesToTravel.splice(i, 1);
  }
}

console.log(placesToTravel)


/*Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
 Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array: */

 const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ]

  for (let value of toys){
    if(value.name.includes('gato')){
      toys.splice(3, 2)
    }
  }
  console.log(toys)

