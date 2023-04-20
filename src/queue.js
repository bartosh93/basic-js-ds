const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    
    this.storage = {};
  }
  
  getUnderlyingList() {
    return this.storage
  }

  enqueue(value) {
    if (!this.storage.value) {
      this.storage.value = value
      this.storage.next = null
  } else {
    getValue(this.storage)
  }
  function getValue(obj) {
      getProp(obj)
      function getProp(o) {
             if(o.next===null) {
              o.next = {};
              o.next.value = value;
              o.next.next = null;
             }  else {
                  getProp(o['next'])
                }
       }
   }
    
  }

  dequeue() {
    let deletedData = this.storage['value'];
    this.storage = this.storage['next'];
    
    return deletedData;
  }
}

module.exports = {
  Queue
};
