function firstWord(s) {
  // your code here
let store = s.trim().split(' ');
 
return store[0]
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
