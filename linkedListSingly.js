// node class
class Node{
    constructor(data, next){
        this.data = data
        this.next = next
    }
}

const node1 = new Node('Erica')
const node3 = new Node('Amanda')
const node2 = new Node('Kasem')

node1.next = node2

console.log(node1)
console.log(node2)

// singly linkedLiss Class

