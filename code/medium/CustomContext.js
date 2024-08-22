/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    const fnSymbol = Symbol(); // 고유한 Symbol 생성

    context[fnSymbol] = this; // 함수(this)를 context 객체에 메서드처럼 추가

    const result = context[fnSymbol](...args); // 함수 호출: this는 context가 됨

    delete context[fnSymbol];

    return result;
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */

function increment() { console.log(this); this.count++; return this.count; }
increment.callPolyfill({count: 1}); // 2


function add(b) { return this.a + b; }
add.callPolyfill({a: 5}, 7); // 2

function keys() { return Object.keys(this); }
keys.callPolyfill({"x": 1, "y": 2});