/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = false;
        let hasRejected = false;

        functions.forEach((fn, index) => {
            fn().then(res => {
                results[index] = res;
                completed++;

                if (completed === functions.length && !hasRejected) {
                    resolve(results);
                }
            }).catch(err => {
                if (!hasRejected) {
                    hasRejected = true;
                    reject(err);
                }
            })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

const promise = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(4), 50)), () => new Promise(resolve => setTimeout(() => resolve(10), 150)), () => new Promise(resolve => setTimeout(() => resolve(16), 100))])
promise.then(console.log); // [42]