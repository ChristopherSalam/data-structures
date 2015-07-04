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