var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	this.children.push(Tree(value));
};

treeMethods.contains = function(target){
	var test = false;

	//refactor contains to be recursive

		for (var i=0; i<this.children.length; i++){ 						// we hate this code 
		if (this.children[i].value === target) { test = true; }			// but it works
			for (var j=0; j<this.children[i].children.length; j++){		// so we'll fix it later
				if (this.children[i].children[j].value === target) { test = true; }
			}
	}
	return test
};


/*
 * Complexity: What is the time complexity of the above functions?
 */