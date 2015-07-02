function extend(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var Queue = function(){
	var queue = {};
	queue.sizeOf = 0;
	extend(queue, queueMethods);
	return queue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
	size: function(){ return this.sizeOf; },
	enqueue: function(value){ 
		this[this.sizeOf] = value;
		this.sizeOf++;
		return value; 
	},
	dequeue: function(){ 
		if (this.sizeOf){
			this.sizeOf--; 
			var value = this[0];
			delete this[0];
			for (var i=0; i<this.sizeOf; i++){ // for (var key in this){ // 
				this[i]=this[i+1];
			}
			return value;
		}
	}
};



