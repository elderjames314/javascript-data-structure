class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}


class LinkedList {
    //initialize item when object is created
    constructor(value) {
        const node = new Node(value);
        this.head = node;
        this.tail = this.head;
        this.length = 1;
    }
    //add item to the tail of the linkedlist
    push(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    //remove item from the last (tail)
    pop() {
       
        if(this.length==0) return undefined
        let temp = this.head;
        let prev = this.head;
        while(temp.next) {
            prev = temp;
            temp = temp.next
        }
        this.tail = prev;
        this.tail.next = null
        if(this.length == 1){
            this.head=null
            this.tail=null
        }
        this.length--;
        return temp
    
    }
    //add new node to the head
    unshift(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode
        this.length++
        return this
    }
    //remove an item from the head
    shift() {
        //first scenerio
        if(this.length == 0) return undefined
        else {
            const temp = this.head
            this.head = this.head.next
            temp.next = null
            this.length--;
            if(this.length == 1) this.tail = null
            return temp
        }
    }
    //get item by index
    get(index) {
        if(index < 0 || index >= this.length) return undefined 
        let temp = this.head
        for(let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }

    set(index, value) {
        let temp = this.get(index);
        if(temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if(index==0) return this.unshift(value)
        if(index==this.length) return this.push(value)
        if(index < 0 || index > this.length) return false
        const newNode = new Node(value);
        let temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++;
        return true;
    }

    remove(index) {
        if(index===0) return this.shift()
        if(index === this.length-1) return this.pop()
        if(index < 0 || index >= this.length) return undefined
        let before = this.get(index-1)
        let temp = before.next;
        before.next = temp.next;
        temp.next = null 
        this.length--
        return temp;
    }

    reverse() {
        //swap the head and tail
        let temp = this.head;
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null 
        for(let i = 0; i < this.length; i++) {
            next = temp.next 
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }

}

var linkedList = new LinkedList(4)
linkedList.push(10)
linkedList.push(20)

console.log(linkedList)
console.log(linkedList.reverse())

