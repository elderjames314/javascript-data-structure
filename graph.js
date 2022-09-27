class Graph {
    constructor() {
        this.adjacentList = {}
    }

    addVertex(vertex) {
        //we cannot have duplicate vertext
        if(!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = []
            return true
        }
        return false
    }

    addEdges(vertex1, vertex2) {
        //before you create connection between those
        //they must be exist
        if(this.adjacentList[vertex1] && this.adjacentList[vertex2]) {
            this.adjacentList[vertex1].push(vertex2)
            this.adjacentList[vertex2].push(vertex1)
            return true
        }
        return false
    }

    removeEdge(vertex1, vertex2) {
        //you can only remove the connection of existing vertex
        if(this.adjacentList[vertex1] && this.adjacentList[vertex1]) {
            this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(x => x !== vertex2)
            this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(x => x !== vertex1)
            return true
        }
        return false
    }

    removeVertex(vertex) {
        //before you can remove vertex
        //you must first remove the connection/edges
        if(!this.adjacentList[vertex]) return undefined
        while(this.adjacentList[vertex].length) {
            let temp = this.adjacentList[vertex].pop()
            this.removeEdge(vertex, temp)
        }
        delete this.adjacentList[vertex]
        //return the graph
        return this
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdges("A", "B")
graph.addEdges("B","C")
graph.addEdges("C","A")

graph.removeVertex("A")


console.log(graph)