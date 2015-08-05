function UndirectedGraphNode(label) {
	this.label = label;
	this.neighbors = [];   // Array of UndirectedGraphNode
}
 

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    var node;
    var nodeMap = {};
    if (!graph) return graph;
    nodeMap[graph.label] = new UndirectedGraphNode(graph.label);
    var stack = [];
    stack.push(graph);
    while (stack.length > 0) {
        node = stack.pop();
        node.neighbors.forEach(function(n) {
            if (!(n.label in nodeMap)) {
                nodeMap[n.label] = new UndirectedGraphNode(n.label);
                stack.push(n);
            }
            nodeMap[node.label].neighbors.push(nodeMap[n.label]);
        });
    }
    return nodeMap[graph.label];
};

var cloneGraphRecursive = function(graph) {
    var nodeMap = {};
    return clone(graph);
    
    function clone(graph) {
        if (!graph) return graph;
        if (!(graph.label in nodeMap)) {
            nodeMap[graph.label] = new UndirectedGraphNode(graph.label);
            graph.neighbors.forEach(function(n) {
               nodeMap[graph.label].neighbors.push(clone(n)); 
            });
        }
        return nodeMap[graph.label];
    }
}