// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - 
// comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(name) {
    for (i = 0; i < nameFinder.length ; i++){
        if (name == nameFinder[i]) {
          name = nameFinder.indexOf(name);
          console.log(true , name);
        } else {
          console.log(false);
        }
    }
  }
  finderName("Bruce");
        