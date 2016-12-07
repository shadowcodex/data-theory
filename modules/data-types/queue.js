/**
 * This is the constructor for the Queue class.
 * @return  {Array}     empty queue
 * @example
 *      var queue = new dt.Queue();
 */
var Queue = function(){
        // Initialize the queue as a single array
        this.values = [];
};

/**
 * This function takes the input value and adds it to the back of the queue
 * @param   object     data to insert
 * @example
 *      var queue = new dt.Queue();
 * 
 *      console.log(queue);
 *      //=> []  
 * 
 *      queue.enqueue('hello');
 *      queue.enqueue('world');
 *
 *      console.log(queue);
 *      //=>  ['world','hello']
 */
Queue.prototype.enqueue = function(value) {
    // Simply add the value to the back of the queue
    this.values.unshift(value);
};


/**
 * This function both removes the item from the front of the queue and returns it.
 * @return  object     data at the front of the queue
 * @example
 *      console.log(queue);
 *      //=>  ['world','hello']  
 * 
 *      queue.dequeue();
 *
 *      console.log(queue);
 *      //=>  ['world']
 */
Queue.prototype.dequeue = function() {
    // Set return value if queue is empty
    var value = -1;
    
    // check to make sure queue is not empty
    if(this.values.length > 0){
        // set return value of the front of the queue
        value =  this.values[this.values.length -1];
        // remove the item from the front of the queue
        this.values.splice(this.values.length - 1, 1);
    }
    //return final value
    return value;
};


/**
 * This function does not remove the item at the front of the queue, but does return it.
 * @return  object     data at the front of the queue
 * @example
 *      console.log(queue);
 *      //=>  ['world','hello']  
 *      
 *      console.peak(queue);
 *      //=>  'hello'
*/
Queue.prototype.peak = function() {
    // Set return value if queue is empty
    var value = -1;
    
    // check to make sure queue is not empty
    if(this.values.length > 0){
        // set return value of the front of the queue
        value =  this.values[this.values.length -1];
    }
    //return final value
    return value;
};

/**
 * Export functions out to the calling code
 */
module.exports = Queue;