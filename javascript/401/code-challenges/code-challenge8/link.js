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
    if (current !== null) {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(data);
    } else {
      let newNode = new Node(data);
      this.head = newNode;
    }
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
    for (let i = k; i > 0; i--) {
      current = current.next;
      if (!current) {
        return "Exception";
      }
    }
    while (current !== null) {
      current = current.next;
      count++;
      if (k === count - 1) {
        nBehindCurrent = nBehindCurrent.next;
      }

    }
    return nBehindCurrent.value;

  }


}

const zipLists = (ll1, ll2) => {
  if (ll1 && ll2) {
    const newll = new LinkedList();
    let list1 = ll1.head;
    let list2 = ll2.head;
    newll.insert(ll1.head ? ll1.head : ll2.head);

    while (list1 !== null || list2 !== null) {
      if (list2) {
        newll.append(list2);
        list2 = list2.next;
      }
      if (list1) {
        newll.append(list1);
        list1 = list1.next;
      }
    }
    return newll;
  } else {
    return null;
  }
};

module.exports = {
  LinkedList,
  zipLists,
};

