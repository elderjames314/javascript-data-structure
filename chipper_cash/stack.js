class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
        }else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }
    pop() {
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        temp.next = null
        this.length--;
        if(this.length===0) this.head = null;
        return temp;
    }
}

const stack = new Stack(23);
stack.push(342);
stack.push(22);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
