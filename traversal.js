class Node {
    constructor(value) {
        this.value = value
        this.left = null 
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if(this.root == null) this.root = newNode
        let current = this.root
        while(true) {
            if(newNode.value == current.value) return false
            if(newNode.value < current.left) {
                //go left
                if(current.left == null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            }else {
                if(current.right == null) {
                    current.right = newNode
                    return this
                }
            
                current = current.right
            }
        }
    }

    bst() {
        let queue = []
        let result = []
        let current = this.root
        queue.push(current)
        while(queue.length) {
            const node = queue.shift();
            result.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return result
    }
}



const bst = new BinarySearchTree()
bst.insert(47)
bst.insert(21)
bst.insert(76)
bst.insert(18)
bst.insert(27)
bst.insert(52)
bst.insert(82)

console.log(bst.bst())