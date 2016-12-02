var common = require('../common.js');

var isPrime = (n) => {
    //-n, 0, 1 not allowed
    if (n < 2) return false
    
    // if even not prime
    if (n % 2 == 0) return false
        
    //check for single digit primes
    if (common.inArray(n, [2, 3, 5, 7])) return true

    //prime numbers end in 1, 3, 7 or 9 no matter how long they are
    //we know we are using only o0d numbers so check if it ends in 5. If so false.
    if (String(n).substr(-1) == 5) return false
    
    
    // check if it is divisible by the any of the numbers below it
    for (var i = 3; i <= Math.sqrt(n); i+=2) 
            if (n % i == 0) return false           
    
    //num is prime - divisible by itself and 1 only
    return true
}



/**
 * Export functions out to the calling code
 */
module.exports = isPrime;