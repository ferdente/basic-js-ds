const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      let currentNode = this.rootNode;
      while (true) {
        if (data < currentNode.data) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else if (data > currentNode.data) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        } else {
          break;
        }
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;
    while (currentNode !== null) {
      if (data === currentNode.data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode !== null) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }
      const minNode = this.findMinNode(node.right);
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  min() {
    let currentNode = this.rootNode;
    while (currentNode !== null && currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode !== null ? currentNode.data : null;
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode !== null && currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode !== null ? currentNode.data : null;
  }
}

module.exports = {
  BinarySearchTree
};