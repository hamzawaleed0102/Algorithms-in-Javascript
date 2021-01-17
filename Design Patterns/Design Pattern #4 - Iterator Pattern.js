// What is the Iterator design pattern?

// The Iterator pattern is a pattern that allows you to effectively loop over a collection of objects.
// A common programming task is to traverse and manipulate a collection of objects.
// These collections may be stored as an array or perhaps something more complex, such as a tree or graph structure.
// In addition, you may need to access the items in the collection in a certain order, such as, front to back, back to front, depth first (as in tree searches), skip evenly numbered objects, etc.
// The Iterator design pattern solves this problem by separating the collection of objects from the traversal of these objects by implementing a specialized 'iterator'!

const items = [1, 2, 3];

function Iterator(items) {
  this.index = 0;
  this.items = items;
}

Iterator.prototype = {
  hasNext() {
    return this.index < this.items.length;
  },

  next() {
    return this.items[this.index++];
  },
};

const itr = new Iterator(items);

while (itr.hasNext()) {
  let val = itr.next();
  console.log("val: ", val);
}
