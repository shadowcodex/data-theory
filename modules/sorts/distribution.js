/* eslint-env node */
var common = require('../common.js');
var simple = require('./simple.js');

module.exports = {
    'counting': function(a) {
        var i;
        var maxIndex = 0;
        for(i = 0; i < a.length; i++){
            if(a[i]> maxIndex)
                maxIndex = a[i];
        }
        var count = [];
        count.length = maxIndex + 1;
        for(i = 0; i < maxIndex + 1; i++){
            count[i] = 0;
        }
        for(i = 0; i < a.length; i++){
            count[a[i]] += 1;
        }
        
        var total = 0;
        var oldCount;
        for(i = 0; i < count.length; i++){
            oldCount = count[i];
            total += oldCount;
            count[i] = total;
        }
        
        var output = [];
        output.length = a.length;
        for(i = 0; i < a.length; i++) {
            output[count[a[i]]-1] = a[i];
            count[a[i]] -= 1;
        }
        
        common.copy(a, output);
    },
    'bucket': function(a, n) {
        var i,j,l=a.length,min=a[0],max=min,DEFAULT_N=5,bCount,b,blen;
        for (i=1;i<l;i++){
            min=a[i]<min?a[i]:min;
            max=a[i]>max?a[i]:max;
        }
        n=n||DEFAULT_N;
        bCount=Math.floor((max-min)/n)+1;
        b=new Array(bCount);
        blen=b.length;
        for(i=0;i<blen;i++){
            b[i]=[];
        }
        for(i=0;i<l;i++) {
            b[Math.floor((a[i]-min)/n)].push(a[i]);
        }
        var out=[];
        for(i=0;i<blen;i++){
            simple.insertion(b[i]);
            for(j=0;j<b[i].length;j++){
                out.push(b[i][j]);
            }
        }
        common.copy(a,out);
    },
    'radix': function(a) {
        //whatever
    }
};