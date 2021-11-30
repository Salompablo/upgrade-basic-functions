const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

function repeatCounter(word) {
    let counter = 0;
    for (let i = 0; i < counterWords.length; i++) {
        if (word == counterWords[i]){
            counter += 1;
        }
    }
    console.log('La palabra' + ' ' + word + ' se repite ' + counter + ' veces');
}
repeatCounter("code");