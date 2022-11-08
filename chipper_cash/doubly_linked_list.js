class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
       
    }

    pop() {
        if(!this.head) return undefined;
        let temp = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null
        temp.prev = null;
        this.length--;
        if(this.length===0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined
        if(!this.head) return undefined;
        let temp = this.head;
        if(index < this.length/2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        }else {
            temp = this.tail;
            for (let i = this.length - 1; i >  index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    insert(index, value) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.unshift(value);
        if(index === this.length - 1) return this.push(value);
        let temp = this.get(index);
        const newNode = new Node(value);
        let tempPrev = temp.prev;
        newNode.next = temp;
        temp.prev = newNode;
        tempPrev.next = newNode;
        newNode.prev = tempPrev;
        this.length++;
        return this;
        
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let temp = this.get(index);
        let tempPrev = temp.prev;
        tempPrev.next = temp.next
        temp.next.prev = tempPrev;
        temp.next = null;
        temp.prev = null;
        this.length--;
        return temp
        
    }

    set(index, value) {
        let temp = this.get(index)
        if(temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    
    shift() {
        if(this.length === 0) return undefined;
        let shiftItem = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            let temp = this.head.next;
            shiftItem.next = null;
            temp.prev = null;
            this.head = temp;
        }
        this.length++;
        return shiftItem;
    }
}


const doubleLinkedList = new DoublyLinkedList(34);
doubleLinkedList.push(109);
doubleLinkedList.push(909);



console.log(doubleLinkedList.remove(1))

