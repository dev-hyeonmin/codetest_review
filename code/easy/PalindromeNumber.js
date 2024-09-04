/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // const arr = x.toString().split('');
    // return arr.toString() === arr.reverse().toString();

    if(x < 0 ) return false;
    if(-1 < x && x < 9) return true;
    if(x % 10 === 0) return false;

    let reverseNumber = 0;

    while(reverseNumber < x){
        reverseNumber = (reverseNumber * 10) +  (x % 10);
        x = Math.floor(x / 10);
    }

    return x === reverseNumber || x === Math.floor(reverseNumber / 10);
};

isPalindrome(121);