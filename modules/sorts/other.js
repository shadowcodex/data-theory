/**
 * Contains needed items to do th swap method in selection
 */
var common = require('../common.js');


/**
 * Sort array data (numbers, characters, strings) using randome algorithm sort. 
 * I am sure it has a name but I don't know what the name is...
 * @param   {Array}     data to sort
 * @return  {Array}     sorted data
 * @example
 *      var dt = require('data-theory');
 *      var sorted = dt.other.codexSort([ 1, 5, 7, 2, 43, 6, 26, 7, 2356, 7, 346, 1, 42, 0 ]);
 *      console.log(sorted);
 *      //=> [ 0, 1, 1, 2, 5, 6, 7, 7, 7, 26, 42, 43, 346, 2356 ]
 */
var codexSort = function(a) {
    // a is an array of integers...
    
    // temp holds count of integers
    var temp = [];
    
    // b becomes sorted data
    var b = [];
    
    // get count of numbers in each position...
    for(var i = 0; i < a.length; i++) {
        if(typeof temp[a[i]] == 'undefined') {
            // if the index position has not been initialized, initialize it.
            temp[a[i]] = 1;
        } else {
            // if the index position is initialized, increment it.
            temp[a[i]] += 1;    
        }
    }
    
    // loop through temp array.
    for(var x = 0; x < temp.length; x++) {
        // if temp array index position is initialized, loop as many times as
        // indicated by the value in that index position.
        for(var y = 0; y < temp[x]; y++) {
            // push the temp index array position as a value to the b array.
            b.push(x);
        }
    }
    common.copy(a, b);
};

/**
 * Export functions out to the calling code
 */
module.exports = {
    'codexSort': codexSort
};