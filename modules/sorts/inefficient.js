/* eslint-env node */
var common = require('../common.js');
module.exports = {
    'bogo': function(a) {
        while(!common.isSorted(a)){
            common.shuffle(a);
        }
    },
    'stooge': function(a) {
        var stoogeSort = function(a, i, j) {
            if(a[j]< a[i]) {
                common.swap(a, i, j);
            }
            if((j - i + 1) > 2) {
                var t = Math.floor((j - i + 1) / 3);
                stoogeSort(a, i, j-t);
                stoogeSort(a, i+t, j);
                stoogeSort(a, i, j-t);
            }
        };
        stoogeSort(a, 0, a.length - 1);
    }
};