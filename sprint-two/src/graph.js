

var Graph = function(){
	this.nodes={};
};

Graph.prototype.addNode = function(nodeValue){
	//should add a new node to the graph
	//should contain a value
	//this.node[nodeValue] = nodeValue;
	this.nodes[nodeValue] = {node: nodeValue, edges : []}
	//console.log(this)
	//should give newNode an edge array
	//this.node[node].arrayEdges = [];
	//this.nodes.arrayEdges = [];
};

Graph.prototype.contains = function(nodeValue){
	if(this.nodes[nodeValue]){return true}
	return false
};

Graph.prototype.removeNode = function(nodeValue){
	delete this.nodes[nodeValue];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	for(var i=0;i<this.nodes[fromNode].edges.length;i++){
	//console.log(this.nodes[fromNode].edges[i])
		if(this.nodes[fromNode].edges[i] === toNode){
			return true
		}
	}
	//console.log(this)
	return false
};

Graph.prototype.addEdge = function(fromNode, toNode){
	//console.log(this); //this.toNode.arrayEdges.push(fromNode);
	this.nodes[fromNode].edges.push(toNode)
	this.nodes[toNode].edges.push(fromNode)
	//console.log(this.nodes[toNode])
	//console.log(this.nodes[toNode])
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	console.log(this.nodes)
	// for(var i=0;i<this.nodes[fromNode].edges.length;i++){
	// console.log(this.nodes[fromNode].edges[i])
	// 	if(this.nodes[fromNode].edges[i] === toNode){
	// 		 this.nodes[fromNode].edges.slice(i,1)
	// 	}
	//}
};

Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes, function(val){
		//console.log(val.node)
		return cb(val.node)
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



