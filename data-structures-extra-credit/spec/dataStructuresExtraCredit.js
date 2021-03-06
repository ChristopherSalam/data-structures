/* global dataStructuresExtraCredit, describe, it, expect, should */

describe('dublinkedList', function() {
  var dublinkedList;

  beforeEach(function() {
    dublinkedList = dubLinkedList();
  });

  it('should have a head and tail', function() {
    expect(dublinkedList).to.have.property("head");
    expect(dublinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(dublinkedList.addToTail).to.be.a("function");
    expect(dublinkedList.removeHead).to.be.a("function");
    expect(dublinkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    dublinkedList.addToTail(4);
    expect(dublinkedList.tail.value).to.equal(4);
    dublinkedList.addToTail(5);
    expect(dublinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    dublinkedList.addToTail(4);
    dublinkedList.addToTail(5);
    expect(dublinkedList.head.value).to.equal(4);
    dublinkedList.removeHead();
    expect(dublinkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    dublinkedList.addToTail(4);
    expect(dublinkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added to tail", function(){
    dublinkedList.addToTail(4);
    dublinkedList.addToTail(5);
    expect(dublinkedList.contains(4)).to.equal(true);
    expect(dublinkedList.contains(5)).to.equal(true);
    expect(dublinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    dublinkedList.addToTail(4);
    dublinkedList.addToTail(5);
    dublinkedList.removeHead();
    expect(dublinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of dublinkedList

  it("should contain a value that was added to head", function(){
    dublinkedList.addToHead(4);
    dublinkedList.addToHead(5);
    expect(dublinkedList.contains(4)).to.equal(true);
    expect(dublinkedList.contains(5)).to.equal(true);
    expect(dublinkedList.contains(6)).to.equal(false);
  });

  it('should remove the tail from the list when removeTail is called', function(){
    dublinkedList.addToHead(4);
    dublinkedList.addToHead(5);
    expect(dublinkedList.tail.value).to.equal(4);
    dublinkedList.removeTail();
    expect(dublinkedList.tail.value).to.equal(5);
  });
});

//Double linked List
describe('Parentlinkedtree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

});
