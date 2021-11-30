//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
   let total = numbers.reduce((sum, current) => sum + current, 0);
   let promedio = total/numbers.length;
   console.log(promedio);
}

average(numbers);



   
