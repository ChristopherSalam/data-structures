var Stack = function() {
	this.sizeOf = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.size = function(){return this.sizeOf}
Stack.prototype.push = function(value){
	this[this.sizeOf]=value;
	this.sizeOf++
	return value
};

Stack.prototype.pop = function(){
	if(this.sizeOf){
	this.sizeOf--;
	var value = this[this.sizeOf]
	delete this[this.sizeOf]
	return value
	}
};


