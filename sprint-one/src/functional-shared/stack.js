function extend(to, from){
	for(var key in from){
		to[key]=from[key]
	}
}
var Stack = function() {
var stack = {};
//stack.storage = {};
stack.sizeOf = 0;

// stack.0 = 'a'

//Stack.size = stackMethods.size;
extend(stack, stackMethods);

//debugger;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //console.log(typeof stack.size)
  //console.log(stack);
  return stack;
};

// stackMethods.size = function(){
// 	return 0;
// }

var stackMethods = {
	size : function (){return this.sizeOf; },
	push : function(value){ 
		this[this.sizeOf] = value;
		this.sizeOf++;
		return this[this.sizeOf];
		},
	pop : function() { 
		if (this.sizeOf) {
		this.sizeOf--;
		var value = this[this.sizeOf];
		delete this[this.sizeOf];
		return value;
		} 
	}
};