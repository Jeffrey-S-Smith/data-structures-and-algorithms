'use strict';

class Node {
  constructor() {
    this.value;
    this.left;
    this.right;
  }
}

class BinaryTree {
  constructor () {
    this.root = null;
  }

  preOrder() {
    let results = [];

    if (!this.root) return 'Empty binary tree';

    let traverse = (node) => {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    let traverse = (node) => {
      if (node.left) traverse(node.left);

      results.push(node.value);

      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      results.push(node.value);
    };

    traverse(this.root);
    return results;
  }
}

class BST extends BinaryTree {
  add(value) {
    if (typeof (value) !== 'number') return 'Expected a number';

    let node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      let traverse = true;
      while (traverse) {
        if (node.value < current.value && current.left) {
          current = current.left;
        } else if (node.value < current.value) {
          current.left = node;
          traverse = false;
        }
        if (node.value >= current.value && current.right) {
          current = current.right;
        } else if (node.value >= current.value) {
          current.right = node;
          traverse = false;
        }
      }
    }
  }

  contains(value) {
    if (typeof (value) !== 'number') return 'EXPECTED NUMBER';
    if (this.root === null) return 'EMPTY TREE';

    let current = this.root;
    let traverse = true;
    while (traverse) {
      if (value === current.value) return true;
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      }
      if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      }
    }
  }
}

module.exports = {
  BinaryTree,
  BST
};
