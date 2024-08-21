/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
        return [];
    }

    const result = new Array(rowsCount).fill(null).map(() => []);
    let index = 0;

    for (let i=0; i<colsCount; i++) {
        for (let j=0; j<rowsCount; j++) {
            if (i % 2 === 0) {;
                result[j].push(this[index]);
            } else {
                result[rowsCount - j - 1].push(this[index]);
            }

            index++;
        }
    }

    return result;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
console.log(arr.snail(5,4))