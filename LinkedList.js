import Node from "./Node.js";

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  prepend(value) {
    let tmp = this.head;
    tmp = new Node(value);
    tmp.nextNode = this.head;
    this.head = tmp;
  }

  append(value) {
    if (this.head == null) this.prepend(value);
    else {
      let tmp = this.head;
      while (tmp.nextNode != null) tmp = tmp.nextNode;
      tmp.nextNode = new Node(value);
    }
  }

  size() {
    let count = 0;
    let tmp = this.head;

    while (tmp.nextNode != null) {
      count++;
      tmp = tmp.nextNode;
    }

    return count;
  }

  listHead() {
    return this.head.nextNode;
  }

  tail() {
    let tmp = this.head;

    while (tmp.nextNode != null) {
      if (tmp.nextNode == null) {
        return tmp;
      }
      tmp = tmp.nextNode;
    }

    return tmp;
  }

  at(index) {
    let tmp = this.head;

    for (let i = 0; i < index; i++) {
      tmp = tmp.nextNode;
    }

    return tmp;
  }

  pops() {
    let cur = this.head;
    let prev = null;
    while (cur.nextNode != null) {
      prev = cur;
      cur = cur.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    let tmp = this.head;

    while (tmp != null) {
      if (tmp.value == value) {
        return true;
      }

      tmp = tmp.nextNode;
    }

    return false;
  }

  find(value) {
    let tmp = this.head;
    let index = 0;

    while (tmp != null) {
      if (tmp.value == value) {
        return index;
      }
      index++;
      tmp = tmp.nextNode;
    }

    return tmp;
  }

  toString() {
    let tmp = this.head;

    let fullText = "";

    while (tmp != null) {
      if (tmp.nextNode == null) {
        fullText += `( ${tmp.value} )`;
      } else {
        fullText += `( ${tmp.value} ) -> `;
      }
      tmp = tmp.nextNode;
    }

    return fullText;
  }

  insertAt(value, index) {
    let tmp = this.head;
    let count = 0;

    while (tmp != null && count != index) {
      tmp = tmp.nextNode;
      count++;
    }

    if (tmp != null) {
      tmp.nextNode = new Node(value, tmp.nextNode);
    }
  }

  removeAt(index) {
    if (this.head == null) throw new Error("cannot delete");

    let count = 0;

    if (count == index) {
      this.head = this.head.nextNode;
      return;
    }

    let cur = this.head;
    let prev = null;

    while (cur != null && count != index) {
      count++;
      prev = cur;
      cur = cur.nextNode;
    }

    if (cur == null) throw new Error("cannot delete");

    prev.nextNode = cur.nextNode;

    console.log(this.head);
  }
}

let node1 = new Node(1);

let list = new LinkedList(node1);
list.append(2);
list.prepend(3);
list.size();
list.listHead();
list.tail();
list.at(2);
list.pops();
list.contains(3);
list.find(4);
list.toString();
list.pops();
list.insertAt(9, 1);
list.removeAt(0);
