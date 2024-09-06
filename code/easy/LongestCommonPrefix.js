/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";

    if (strs.lenght === 0) {
        return prefix;
    }

    for (let i=0; i<strs[0].length; i++) {
        const keyword = strs[0][i];
        let sameKeywordCnt = 0;

        for (let j=0; j<strs.length; j++) {
            // console.log(strs[j][i]);
            if (strs[j][i] === keyword) {
                sameKeywordCnt++;
            }
        }

        if (sameKeywordCnt === strs.length) {
            prefix = `${prefix}${keyword}`;
        } else {
            return prefix;
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));