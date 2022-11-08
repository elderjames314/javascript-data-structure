class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }


    enqueue(value) {
        const newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }else {
           let temp = this.last;
           temp.next = newNode;
           this.last = newNode
           
        }
        this.length++;
        return this;
    }
    
    dequeue() {
        if(!this.first) return undefined;
        let temp = this.first;
        this.first = temp.next;
        temp.next = null;
        this.length--;
        if(this.length === 0) {
            this.first = null;
            this.last = null;
        }
        return temp;
    }
}

const queue = new Queue(45);
queue.enqueue(56);
queue.enqueue(100);
queue.enqueue(200);


console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())