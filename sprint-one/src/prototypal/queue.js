var Queue = function() {
	var queue = Object.create(queueMethods)
	queue.sizeOf = 0;
	return queue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
	size : function(){return this.sizeOf},
	enqueue : function(value){
		this[this.sizeOf]=value;
		this.sizeOf++
		return value
	},
	dequeue : function(){
		if(this.sizeOf){
			this.sizeOf--;
			var value = this[0];
			delete this[0];
			for(var i =0;i<this.sizeOf;i++){
				this[i] = this[i+1]
			}
			return value
		}
	}
};


