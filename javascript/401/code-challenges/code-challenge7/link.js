'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newHead = new Node(value);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      newHead.next = currentHead;
    }
    return newHead;
  }

  includes(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }

    }
    return false;
  }



  toString() {
    let current = this.head;
    let stringified = '';
    while (current !== null) {
      stringified = stringified + `{ ${current.value} } -> `;
      current = current.next;
    }
    stringified = stringified + 'NULL';
    return stringified;
  }

  append(data) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(data);
  }


  insertBefore(value, newValue) {
    let current = this.head;

    let node = new Node(newValue);
    let prev = null;

    while (current.value !== value) {

      prev = current;
      current = current.next;
    }
    if (prev === null) {
      this.head = node;
    }

    node.next = current;

    if (prev !== null) {
      prev.next = node; // a > z

    }
    return node;
  }

  insertAfter(value, newValue) {
    let node = new Node(newValue);
    let current = this.head;
    let temp;

    while (current) {
      if (current.value === value) {
        temp = current.next;
        current.next = node;
        node.next = temp;
        return;
      } else {
        current = current.next;
      }
    }
  }



  kFromEnd(k) {
    if (k < 1) {
      return "Exception";
    }
    let current = this.head;
    let nBehindCurrent = this.head;
    let count = 0;
    for (let i = 0; i < k - 1; i++) {
      current = current.next;
      if (!current) {
        return "Exception";
      }
    }
    while (current !== null) {
      current = current.next;
      count++;
      if (k === count - 1){
        nBehindCurrent = nBehindCurrent.next;
      }

    }
    return nBehindCurrent.value;

  }


  zipLists(ll1, ll2) {
    const newll = new LinkedList();
    let list1 = ll1.head;
    let list2 = ll2.head;

    if (ll1.head === null && ll2.head === null) return newll;
    if (ll1.head === null) {
      newll.head = ll2.head;
      return newll;
    }
    if (ll2.head === null) {
      newll.head = ll1.head;
      return newll;
    }

    while (list1 && list2) {
      newll.append(list1.value);
      newll.append(list2.value);
      list1 = list1.next;
      list2 = list2.next;
    }
    if (list1) {
      while (list1) {
        newll.append(list1.value);
        list1 = list1.next;
      }
    }
    if (list2) {
      while (list2) {
        newll.append(list2.value);
        list2 = list2.next;
      }
    }
    return newll;
  }
}
module.exports = LinkedList;
