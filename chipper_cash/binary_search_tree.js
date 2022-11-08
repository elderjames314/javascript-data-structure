class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
       this.root = null;
    }

    contains(value) {
        if(!this.root) return false;
        let temp = this.root;
        if(temp.value === value) return true;
        while(temp) {
            if(value < temp.value) temp = temp.left;
            else if(value > temp.value) temp = temp.right;
            else return true;
        }
        return false;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root==null)  {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
            while(true) {
                if(newNode.value === temp.value) return undefined;
                if(newNode.value < temp.value) {
                    //left
                    if(temp.left === null) {
                        temp.left = newNode;
                        return this;
                    } 
                    temp = temp.left;

                }else{
                    //right
                    if(temp.right === null) {
                        temp.right = newNode;
                        return this;
                    } 
                    temp = temp.right;

                }
            }
    }
}


const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(56);
binarySearchTree.insert(34);
binarySearchTree.insert(75);
binarySearchTree.insert(89);
console.log(binarySearchTree.contains(705));