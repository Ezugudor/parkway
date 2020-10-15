
/**
 * Gets the developer to be warned for the bad sweet
 * @param {integer} n the number of developers
 * @param {int} m the number of sweets
 * @param {int} s the chair number to begin passing out sweet from.
 * @returns {int}  Returns the chair no(developer) of the developer who receives aweful treat.
 */

let  warnTheDeveloper = (n, m, s)=>{

    for(let a = m; a >1 ; a--){
       
       if(s > n){
          s =1;
       }
       s++;
    
    }
    return s;
}

//manual testing the value (console log method)
let n = 7;
let m = 19;
let s = 2;

console.log(warnTheDeveloper(n , m, s));

// exporting the module for proper standard TDD
module.exports = warnTheDeveloper;