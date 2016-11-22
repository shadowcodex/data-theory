var Stack = function(){
        this.values = [];
};

Stack.prototype.push = function(value) {
    this.values[this.values.length] = value;
};

Stack.prototype.pop = function() {
    var value = -1;
    if(this.values.length > 0){
        value =  this.values[this.values.length -1];
        this.values.splice(this.values.length - 1, 1);
    }
    return value;
};

module.exports = Stack;