/* eslint-env node */
module.exports = {
    'swap': function(a, j, i) {
        var x = a[j];
        a[j] = a[i];
        a[i] = x;
        return a;
    }
}