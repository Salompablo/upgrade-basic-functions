const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(param) {
    for (var i = 0 ; i < param.length ; i++){
        for (var z = i + 1 ; z < param.length ; z++){
            if (param[i] == param[z]){
                param.splice(z,1)
            }
        }
    }
    return(param)
  }
  var resultado = removeDuplicates(duplicates);
  console.log(resultado);
  