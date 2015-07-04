var BinarySearchTree = function(value){
	var obj = Object.create(binaryMethods)
	obj.value = value;
	obj.left = null;
	obj.right = null;
	//console.log(obj)
	return obj;
};

var binaryMethods = {};
binaryMethods.insert = function(val){
	//var this.value = this.value
	//if val is this.value, we stop
	if (val===this.value){
		return
	}
	//else if value is greater than this.value we go right
	else if(val > this.value){
		//is right not empty?
		if(this.right){
			this.right.insert(val);
		}
		//if right is empty
		else if(!this.right){
			//console.log('this.right does exist')
			this.right = BinarySearchTree(val);
			return
		}
	}
	//else if value is less than this.value we go left
	else if(val < this.value){
		//is left not empty
		if(this.left){	
			//console.log('this.left does exist')
			this.left.insert(val);
		}
		//if left is empty
		else if(!this.left) {
			this.left = BinarySearchTree(val);
			return
		}
	}
	//in case nothing is right
	else {return null && console.log('this ',this)}
	
}
binaryMethods.contains= function(val){
	if (val === this.value || val === this.left.value || val === this.right.value){
		return true;
	}
	if (!this.left){ this.right.contains(val); }
	if (!this.right){ this.left.contains(val); }
	return false;
}

binaryMethods.depthFirstLog= function(callBack){
	//_.each()
	//iterate through the tree, using left/right guidance
	//while .left !== null, call back on .value 
	if (this.value){
		console.log('this value',this.value);
		callBack(this.value);
	}
	if (this.left){ this.left.depthFirstLog(callBack); }
	if (this.right){ this.right.depthFirstLog(callBack); }
	//return false;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
