/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    for (let i=0; i<s.length; i++) {
        const value = s[i];
        const nextValue = s[i+1];

        if ((value === 'C' && (nextValue === 'D' || nextValue === 'M'))
            || (value === 'X' && (nextValue === 'L' || nextValue === 'C'))
            || (value === 'I' && (nextValue === 'V' || nextValue === 'X'))) {
            result += roman[nextValue] - roman[value];
            i++;
            continue;
        }

        result += roman[value];
    }

    console.log(result);
    return result;
};

romanToInt("III");