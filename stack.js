class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if(this.length === 0) {
            this.top = newNode
        }else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++;
        return this
    } 
    //remove the last node
    pop() {
        if(this.length === 0) return undefined
        const temp = this.top
        if(this.length === 1) {
            this.top = null
        }else{
            this.top = this.top.next 
            temp.next = null
        }
        this.length--;
        return temp

    }
}

const myStack = new Stack(4)
myStack.push(78)
myStack.push(34)
console.log(myStack.pop())