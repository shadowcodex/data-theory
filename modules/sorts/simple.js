/**
 * Contains needed items to do th swap method in selection
 */
var common = require('../common.js');

/**
 * Sort array data (numbers, characters, strings) using the insertion sort.
 * @param   {Array}     data to sort
 * @return  {Array}     sorted data
 * @example
 *      var dt = require('data-theory');
 *      var sorted = dt.simple.insertion(['a','c','e','b','d');
 *      console.log(sorted);
 *      //=> ['a', 'b', 'c', 'd', 'e']
 */
var insertion = function(a) {
    for(var i=1; i < a.length; i++) {
        var x = a[i];
        var j = i-1;
        while(j>=0 && a[j] > x) {
            a[j+1] = a[j];
            j = j -1;
        }
        a[j+1] = x;
    }
    return a;
};

/**
 * Sort array data (numbers, characters, strings) using the selection sort.
 * @param   {Array}     data to sort
 * @return  {Array}     sorted data
 * @example
 *      var dt = require('data-theory');
 *      var sorted = dt.simple.selection(['a','c','e','b','d');
 *      console.log(sorted);
 *      //=> ['a', 'b', 'c', 'd', 'e']
 */
var selection = function(a) {
    var i,j;
    for(j=0;j<a.length-1;j++) {
        var iMin = j;
        for(i=j+1;i<a.length;i++){
            if(a[i] < a[iMin]) {
                iMin = i;
            }
        }
        if(iMin != j) {
            a = common.swap(a, j, iMin);
        }
    }
    return a;
};

/**
 * Export functions out to the calling code
 */
module.exports = {
    'insertion': insertion,
    'selection': selection
};