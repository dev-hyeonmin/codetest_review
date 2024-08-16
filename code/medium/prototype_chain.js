var checkIfInstanceOf = function(obj, classFunction) {
    // !obj로 검사를 하였는데 Number.NaN까지 false로 판별되는 문제가 있어 null과 undefined로 추가
    if (obj === null || obj === undefined) { return false; }
    if (obj.constructor === classFunction) { return true; }

    // while문으로 할 필요없이 재귀함수로
    return checkIfInstanceOf(Object.getPrototypeOf(obj), classFunction);
};