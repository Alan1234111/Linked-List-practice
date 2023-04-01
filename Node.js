export default class Node {
  constructor(value, next) {
    this.value = value || null;
    this.nextNode = next || null;
  }
}
