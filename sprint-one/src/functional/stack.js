var Stack = function(){
  var size = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[size]=value
    size++
  };

  someInstance.pop = function(){
    if(size>0){
      //not so intuitive, but reduces the length of the collection, then removes the last key of the collection
      size--
      var resultOfPop = storage[size];
      delete storage[size]
      return resultOfPop
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
