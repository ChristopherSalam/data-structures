var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, val){
  var i = getIndexBelowMaxForKey(key, this._limit);
  this._storage[key]=val
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var returnableKey = this._storage[key]
  return returnableKey !== undefined ? returnableKey : null

};

HashTable.prototype.remove = function(key){
  delete this._storage[key]
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
