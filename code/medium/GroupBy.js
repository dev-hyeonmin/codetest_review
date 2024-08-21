/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const groupMap = {};
    this.forEach(value => {
        const key = fn(value);

        if (groupMap[key]) {
            groupMap[key].push(value);
            return;
        }

        groupMap[key] = [value];
    });

    console.log(groupMap);
    return groupMap;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
[1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
const idArr = [{"id":"1"},{"id":"1"},{"id":"2"}];
idArr.groupBy((item) => item.id);