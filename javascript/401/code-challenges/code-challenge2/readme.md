# Insert to Middle of an Array
<!-- Description of the challenge -->

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

code challenge 2 Code for whiteboard
```js
let insertShiftArray = (arr,val) => {
  let newArr =[];
  let middle = arr.length%2 === 0 ? arr.length/2 : arr.length/2 +.5;
  console.log(middle);
    for (let i = 0; i < arr.length ; i++) {
      i === middle? newArr[i] = val:
      newArr[i] = arr[i];       
    }    
   return newArr;
}

let arr = [1,2,3,4];
let arr2 = [1,2,3,4,5];

console.log(insertShiftArray(arr,5));
console.log(insertShiftArray(arr2,6));
```
