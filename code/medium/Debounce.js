/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer;

    return function(...args) {
        if (timer) {
            clearTimeout(timer); // 이전 타이머가 있으면 취소합니다.
        }

        // 새로운 타이머를 설정하고 t 밀리초 후에 fn을 실행합니다.
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

const log = debounce(console.log, 1000);
log('Hello1'); // cancelled
log('Hello2'); // cancelled
log('Hello3'); // Logged at t=100ms