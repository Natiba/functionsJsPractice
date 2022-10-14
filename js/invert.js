
let myArray = [];

function invert (array) {
    for (let i = 0; i < array.length; i++) {
        myArray.push([i]);
        myArray.reverse(array);
        console.log(myArray)
        return myArray;
    }
   
}

invert([1, 2, 3])