/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const resultMap = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        const exist = resultMap.has(key);

        if (exist) {
            return resultMap.get(key);
        }

        const result = fn(...args);
        resultMap.set(key, result);
        return result;
    }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
