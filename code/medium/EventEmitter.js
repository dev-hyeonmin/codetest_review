class EventEmitter {
    constructor() {
        // 이벤트를 저장할 객체
        this.events = {};
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        // eventName이 존재하지 않으면 초기화
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        // 콜백을 이벤트 배열에 추가
        this.events[eventName].push(callback);

        // 이벤트를 제거할 unsubscribe 메서드 반환
        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        // 해당 이벤트에 구독된 콜백이 없으면 빈 배열 반환
        if (!this.events[eventName]) return [];

        // 구독된 콜백을 호출하고 결과를 배열로 반환
        return this.events[eventName].map(callback => callback(...args));
    }
}

/**
 * Example usage:
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * console.log(emitter.emit('onClick')); // [99]
 * sub.unsubscribe(); // Removes the onClickCallback from the 'onClick' event
 * console.log(emitter.emit('onClick')); // []
 */

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);

console.log(emitter.emit('onClick')); // [99]
sub.unsubscribe(); // Removes the onClickCallback from the 'onClick' event
console.log(emitter.emit('onClick')); // []