export default class Example {
  constructor(el) {
    this.el = el
    console.log(el.textContent, '- From the example module')

    // Testing to see if it supports object spread/rest. (It does).
    const x = {a: 1, b: 2, c: 3};
    const {a, ...bc} = x;
    console.log(a, bc);
  }
}
