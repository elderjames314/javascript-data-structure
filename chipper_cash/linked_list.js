class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}


class LinkedList {

    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value);
        if(this.head == null) {
            this.head = newNode;
            this.tail = this.head;
            this.length = 1
        }else {
            this.tail.next = newNode;
            this.tail = newNode;       
        }
        this.length++;
        return this;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        if(this.head==null) return undefined;
        if(this.length==1){
            const firstNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return firstNode;
        }else {
            const firstNode = this.head;
            this.head = firstNode.next;
            firstNode.next = null
            this.length--;
            return firstNode
        }
    }

    insert(index, value) {
       if(index === 0) return this.unshift(value);
       if(index === this.length) return this.push(value);
       if(index < 0 || index > this.length) return false;
       const newNode = new Node(value);
       let temp = this.get(index - 1);
       newNode.next = temp.next;
       temp.next = newNode
       this.length++;
       return this;

    }

    set(index, value) {
        // if(index < 0 || index >= this.length) return undefined;
        // if(!this.head) return undefined;
        // let temp = this.head;
        // for(let i = 0; i < index; i++) {
        //     temp = temp.next;
        // }
        // temp.value = value;
         
        // return this;

        let setNode = this.get(index);
        setNode.value = value
        return this;


    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(!this.head) return undefined;
        let temp = this.head;
        for(let i = 0;  i< index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail
        this.tail = temp;
        let pre = null
        let next = temp.next
        for (let index = 0; index < this.length; index++) {
              next = temp.next
              temp.next = pre
              pre = temp
              temp = next   
        }
        return this;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index == 0) return this.shift();
        if(index===this.length - 1) return this.pop()
        let item_before = this.get(index-1);
        let temp = item_before.next;
        item_before.next = temp.next
        temp.next = null
        this.length--;
        return temp;
    }

    pop() {
        //if the linked list is empty
        if(this.head == null) return "linked list is empty";
        if(this.length==1) {
            const lastNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return lastNode;
        }else{
            //third edge cases
            let temp = this.head;
            let pre = this.head;
            while(temp.next != null) {
                pre = temp;
                temp = temp.next;
            }
            const lastNode = this.tail;
            this.tail = pre
            this.tail.next = null
            this.length--;
            return lastNode
        }    
    }
        

}

const linkedList = new LinkedList(4);
linkedList.push(78);
linkedList.unshift(56);
linkedList.push(23);

console.log(linkedList)
console.log(linkedList.reverse())

//console.log(linkedList.get(2))
//console.log(linkedList)

//console.log(linkedList.length)


//console.log(linkedList)

//console.log(linkedList.length)