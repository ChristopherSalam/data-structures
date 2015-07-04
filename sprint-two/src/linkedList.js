var LinkedList = function(){
  var list = [];
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    list.push(Node(value))
    list.tail=list[list.length-1] // <--- is repeated later && could be a method/function
    list.head=list[0]
  };

  list.removeHead = function(){
    var oldHead = list.shift();
    list.tail=list[list.length-1];
    list.head=list[0];
    return oldHead.value;
  };

  list.contains = function(target){
  var test = false;
    for (var i = 0;i<list.length;i++){
      if (list[i].value === target) { test = true }
    } return test;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
