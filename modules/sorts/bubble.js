/* eslint-env node */
var common = require('../common.js');
module.exports = {
    'bubble': function(a) {
        var n = a.length, swapped;
        do {
            swapped = false;
            for(var i = 1; i< n; i++) {
                if(a[i-1] > a[i]) {
                    common.swap(a, i-1, i);
                    swapped = true;
                }
            }
        }while(swapped == true);
    },
    'shell': function(a) {
        var gaps = [701,301,132,57,23,10,4,1], temp, n = a.length;
        gaps.forEach(function(gap){
            if(gap < n){
                for(var i = gap; i < n; i++) {
                    temp = a[i];
                    for(var j = i; j>=gap && a[j-gap] > temp; j-=gap) {
                        a[j] = a[j-gap];
                    }
                    a[j] = temp;
                }
            }
        });
    },
    'comb': function(a) {
        var n = a.length, gap = n, shrink = 1.3, temp, swapped, ignorePass1 = true;
        do {
            gap = Math.floor(gap/shrink);
            if(gap < 1)
                gap = 1;
            var i = 0
            swapped = false;
            do{
                if(a[i] > a[i+gap]) {
                    common.swap(a, i, i+gap);
                    swapped = true;
                    ignorePass1 = false;
                }
                i++;
            }while(i+gap < n);
        }while((gap > 1 && swapped == true) || ignorePass1);
    },
    // 'comb2': function(a) {
    //     var gap = a.length;
    //     var shrink = 1.3;
    //     var swapped = true;
        
    //     while(gap != 1 && swapped) {
    //         gap = parseInt(gap / shrink);
            
    //         if(gap < 1) {
    //             gap = 1;
    //         }
            
    //         var i = 0;
    //         swapped = false;
            
    //         while(i+gap < a.length) {
    //             if(a[i] < a[i+gap]) {
    //                 common.swap(a, i, i+gap);
    //                 swapped = true;
    //             }
    //             i++;
    //         }
    //     }
    // }
}