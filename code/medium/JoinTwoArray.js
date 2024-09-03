/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = new Map ();

    arr1.forEach(value => map.set(value.id, value));

    arr2.forEach(value => {
        if (map.has(value.id)) {
            map.set(value.id, {...map.get(value.id), ...value});
        } else {
            map.set(value.id, value);
        }
    });

    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};


console.log(join([{"id": 1,"x": 1},{"id": 2,"x": 9}], [{"id": 3,"x": 5}]));
console.log(join([{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}], [{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}]));
console.log(join([{"id":1,"b":{"b": 94},"v":[4,3],"y":48}], [{"id":1,"b":{"c": 84},"v":[1,3]}]));
console.log(join([{"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}], [{"id":2,"o":48,"z":84,"y":61}]));




