

var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if (size > 0){
      size--;
      var value = storage[0];   
      delete storage[0]
      for(var key in storage){
        //console.log('key is : '+key)
        storage[key-1] = storage[key]
      }
      return value;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
