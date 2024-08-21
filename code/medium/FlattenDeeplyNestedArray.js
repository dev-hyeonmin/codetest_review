/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) {
        return arr;
    }

    const result = [];
    const flatten = (arr, n) => {
        arr.forEach((value, index) => {
            if (Array.isArray(value) && n > 0) {
                flatten(value, n-1)
                return;
            }

            result.push(value);
        });
    }

    flatten(arr, n);
    return result;
};

const arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]];
const result = flat(arr, 1);
console.log(result);