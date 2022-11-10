const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const AmountOfTimesToMove = 3;

for (let i = 0; i < AmountOfTimesToMove; i++) {
  let temp1 = myArray[0];
  myArray.splice(0, 1);
  myArray.push(temp1);
}

console.log(myArray);

for (let num = 2; num <= 16; num = num + 2) {
  console.log(num);
}

const myArray2 = ["a", "b", "c", "d", "e"];

for (let i = 0; i < myArray2.length; i++) {
  console.log(myArray[i]);
}
