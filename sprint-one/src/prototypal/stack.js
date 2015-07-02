var Stack = function() {
	var stack = Object.create(stackMethods);
	stack.sizeOf = 0;
	return stack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
	size: function(){ return this.sizeOf; },
	push: function(value){ 
		this[this.sizeOf] = value;
		this.sizeOf++; 
		return value
	},
	pop: function(){ 
		if (this.sizeOf) {
			this.sizeOf--;
			var value = this[this.sizeOf];
			delete this[this.sizeOf];
			return value; 
		}
	}
};


