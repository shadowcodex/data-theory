/* eslint-env node */
var cstuff = require('../common.js');
module.exports = {
    'insertion': function(a) {
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
    },
    'selection': function(a) {
        var i,j;
        for(j=0;j<a.length-1;j++) {
            var iMin = j;
            for(i=j+1;i<a.length;i++){
                if(a[i] < a[iMin]) {
                    iMin = i;
                }
            }
            if(iMin != j) {
                a = cstuff.swap(a, j, iMin);
            }
        }
        return a;
    }
}