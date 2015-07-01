var Queue = function(){
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value
    size++
  };

  someInstance.dequeue = function(){
    if(size>0){
      size--
      var value = storage[size]
      delete storage[size]
      return value
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
