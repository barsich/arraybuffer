export default class ArrayBufferConverter {
  constructor() {
    this.arrayBuffer = [];
  }

  load(buffer) {
    this.arrayBuffer = buffer;
  }

  toString() {
    return String.fromCharCode(...new Uint16Array(this.arrayBuffer));
  }
}
