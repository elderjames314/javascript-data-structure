class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        //ideally at the time of creating binary tree
        //is not necessary to create a node
        this.root = null
        this.length = 0
        this.rightLength = 0
    }

    insert(value) {
        const newNode = new Node(value)
        if(this.root===null) {
            this.root = newNode
            this.length++;
            this.rightLength++;
            return this
        }
        let temp = this.root
        while(true) {
            if(newNode.value === temp.value) return false
            if(newNode.value < temp.value) {
                if(temp.left == null) {
                    temp.left = newNode
                    this.length++
                    return this;
                }
                temp = temp.left
            }else {
                if(temp.right == null) {
                    temp.right = newNode
                    this.length++
                    return this;
                }
                temp = temp.right
                this.rightLength++;
            }
           
        }
    }

    insert2(value) {
        //create new node
        const newNode = new Node(value)
        //consider if there is nothing in the tree,
        //that is the tree is actually empy
        if(this.root===null) {
            this.root = newNode
            return this
        }

        let temp = this.root
        while(true) {
            if(newNode.value < temp.value) {
                if(temp.left==null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            }else {
                if(temp.right==null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right 
            }
        }
    }
}

const tree = new BST()
tree.insert(76)
tree.insert(18)
tree.insert(52)
tree.insert(82)
tree.insert(27)
console.log(tree)