
var decimal = z =>{
    var d = 0
    while(z.length){
        d=1/(d+z.pop())
    }
    return d;
}

var reducedFraction = z => {
    var d = decimal(z);
    var e = 1.0E-15
    var h, f, j, k, l, m, a, x
    x = d
    a = ~~x
    f = 1
    l = 0
    h = a
    k = 1
    while (x-a > e*k*k) {
        x = 1/(x-a)
        a = ~~x
        j = f 
        f = h
        m = l
        l = k
        h = j + a*f
        k = m + a*l
    }
    return h+'/'+k
}

var product = z => {
    var rf = reducedFraction(z);
    rf = rf.split('/');
    return rf[0] * rf[1];
}

module.exports = {
    'product': product,
    'reducedFraction': reducedFraction,
    'decimal': decimal
};