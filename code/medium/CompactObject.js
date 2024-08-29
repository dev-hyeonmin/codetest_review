/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).reduce((acc, key) => {
            const value = compactObject(obj[key]);
            if (Boolean(value)) {
                return {...acc, ...{[key]: value}};
            }

            return acc;
        }, {});
    }

    return obj;
};

// compactObject([null, 0, false, 1]);
// compactObject({"a": null, "b": [false, 1]});
// compactObject([null, 0, 5, [0], [false, 16]]);
console.log(compactObject({"a": 1, "b": 1, "c": null, "d": "false", "e": 0}));