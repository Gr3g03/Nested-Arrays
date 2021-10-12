var mySecondArray = [];

var myArray = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [10,11,12]]

function indofElement(){
    for (var i=0; i <  myArray.length; i++){
    const arrayLength = myArray[i].Length;

    for(var j =0; j <arrayLength; j++){
        if(myArray === 8){

        mySecondArray.push(i);
        mySecondArray.push(j);
        return[i,j];

        }
    }
    }
    }

indofElement()
console.log(indofElement());