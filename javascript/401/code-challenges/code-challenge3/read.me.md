# Insert to Middle of an Array
<!-- Description of the challenge -->

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

```js
let binarySearch = (arr, val) => {
  let middle = arr.length%2===0 ? arr.length/2 :arr.length/2 - .5;
  let value = arr[middle];
  let midUp = arr.length - middle;
  while (value !== val){
    //if higher
    console.log(middle);
    if (value < val) {
      middle = midUp + (middle%2===0 ? middle/2 :middle/2 - .5);
      value=arr[middle]; 
    }
     // if lower
    else if (value > val) {
      middle = middle - (middle%2===0 ? middle/2 :middle/2 + .5);
      value=arr[middle]; 
    };
  
  };
  return middle;
};

```
