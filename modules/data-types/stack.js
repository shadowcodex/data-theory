/**
 * This is the constructor for the Stack class.
 * @return  {Array}     empty stack
 * @example
 *      var stack = new dt.Stack();
 */
var Stack = function(){
        // Initialize the stack as a single array
        this.values = [];
};

/**
 * This function takes the input value and adds it to the top of the stack
 * @param   object     data to insert
 * @example
 *      var stack = new dt.Stack();
 * 
 *      console.log(stack);
 *      //=>  
 *      // |       |
 *      // |       |
 *      // |       |
 * 
 *      stack.push('hello');
 *
 *      console.log(stack);
 *      //=>  
 *      // |       |
 *      // |       |
 *      // | hello |
 */
Stack.prototype.push = function(value) {
    // Simply add the value to the top of the stack
    this.values[this.values.length] = value;
};


/**
 * This function both removes the item from the top of the stack and returns it.
 * @return  object     data at the top of the stack
 * @example
 *      console.log(stack);
 *      //=>  
 *      // |       |
 *      // | world |
 *      // | hello |
 * 
 *      stack.pop();
 *
 *      console.log(stack);
 *      //=>  
 *      // |       |
 *      // |       |
 *      // | hello |
 */
Stack.prototype.pop = function() {
    // Set return value if stack is empty
    var value = -1;
    
    // check to make sure stack is not empty
    if(this.values.length > 0){
        // set return value of the top of the stack
        value =  this.values[this.values.length -1];
        // remove the item from the top of the stack
        this.values.splice(this.values.length - 1, 1);
    }
    //return final value
    return value;
};

/**
 * Export functions out to the calling code
 */
module.exports = Stack;