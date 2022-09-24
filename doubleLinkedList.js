class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++;
        return this
    }

    pop() {
        if(this.length===0) return undefined
        let temp = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }else {
            this.tail = this.tail.prev
            this.tail.next = null 
            temp.prev = null
        }
        this.length--;
        return temp
    }
    //add item to the head
    unshift(value) {
        const newNode = new Node(value)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        }
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    //remove item from the head
    shift() {
        if(this.length === 0) return undefined
        let temp = this.head
        this.head = temp.next
        temp.next = null
        this.head.prev = null
        if(this.length === 1) {
            this.head = null
            this.temp = null
        }
        this.length--;
        return temp
    }

    get(index) {
        if(index < 0 || index > this.length) return undefined
        let temp = this.head
        if(index < this.length/2) {
            for(let i = 0; i < index; i++) {
                temp = temp.next
            }
        }else {
            temp = this.tail
            for(let i = this.length -1; i > index; i--) {
                temp = temp.prev
            }
        }
        return temp;
    }

    set(index, value) {
        if(this.length === 0) return false
        if(index < 0 || index > this.length) return false
        let temp = this.head;
        if(index < this.length/2) {
            for(let i = 0; i < index; i++) {
                temp = temp.next
            }
        }else {
            temp = this.tail
            for(let i =  this.length - 1; i > index; i--) {
                temp = temp.prev 
            }
            temp.value = value
        }
      
        temp.value = value
        return true
    }

    insert(index, value) {
        if(index==0) this.unshift(value)
        else if(index===this.length - 1) this.push(value)
        else {
            const newNode = new Node(value)
            let before = this.get(index - 1)
            if(before) {
                let current = before.next
                current.prev = newNode
                before.next = newNode
                newNode.next = current
                newNode.prev = before
            }
        }
       
        this.length++;
        return this

    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        else if(index === this.length - 1) return this.pop()
        else {
            let current = this.get(index)
            let before = current.prev
            let next = current.next
            before.next = next
            next.prev = before
            current.next = null 
            current.prev = null
            this.length--
            return current
        }

    }
}

let doubleLinkedList = new DoubleLinkedList(10)
doubleLinkedList.push(56)
doubleLinkedList.push(6)
console.log(doubleLinkedList.remove(2))
console.log(doubleLinkedList)