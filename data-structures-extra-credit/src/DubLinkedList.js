/*! dataStructuresExtraCredit v0.0.0 - MIT license */
'use strict';

var dubLinkedList = function(){
  var list = [];
  list.head = null;
  list.tail = null;
//refactor not done
   
   list.defineManeTail = function (){
    list.tail=list[list.length-1] // <--- is repeated later && could be a method/function
    list.head=list[0]
  };

  list.addToTail = function(value){
    list.push(Node(value))
    list.defineManeTail()			// <--- called here 
  };

  list.removeHead = function(){
    var oldHead = list.shift();
    list.defineManeTail()			// <--- called here 
    return oldHead.value;
  };

  list.contains = function(target){
  var test = false;
    for (var i = 0;i<list.length;i++){
      if (list[i].value === target) { test = true }
    } return test;
  };

  list.addToHead = function(value){
	list.unshift(Node(value))
	//list.push(Node(value))
	list.defineManeTail()			// <--- called here 
  };

  list.removeTail = function(){
    var oldTail = list.pop();
    list.defineManeTail()			// <--- called here 
    return oldTail.value;
  };

  return list;
};

//extra functionanilty

//original content of node below
var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};