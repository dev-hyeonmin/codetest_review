/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    function* getInnerValues(value) {
        if (Array.isArray(value)) {
            for (const item of value) {
                yield* getInnerValues(item);
            }
        } else {
            yield value;
        }
    }

    yield* getInnerValues(arr);
};


// flat version
var inorderTraversalFlat = function*(arr) {
    const flattenArr = arr.flat(Infinity);

    for (const value of flattenArr) {
        yield value;
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */

const gen = inorderTraversalFlat([[]]);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3