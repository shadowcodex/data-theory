/* eslint-env node */
module.exports = {
    'swap': function(a, j, i) {
        var x = a[j];
        a[j] = a[i];
        a[i] = x;
        return a;
    },
    'shuffle': function(a){
        var n = a.length;
        var m = n - 1;
        for(var i = m; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            if(j > n)
                j = j - n;
            var temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    },
    'isSorted': function(a){
        var sorted = true, n=a.length;
        for(var i = 1;i<n;i++){
            if(a[i] < a[i-1] && a[i] !== a[i-1]){
                sorted = false;
            }
        }
        return sorted;
    },
    'copy': function(a, b){
        for(var i = 0; i < a.length; i++){
            a[i] = b[i];
        }
    }
};