
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
var addNumber = 0;
var addString = 0;
  for (i = 0; i < mixedElements.length ; i++){
    if (param[i].length == undefined){
      addNumber = param[i] + addNumber;
      } else{
        addString = param[i].length + addString
      }
  }
  console.log(addNumber);
  console.log(addString);
}

averageWord(mixedElements);
