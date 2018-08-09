class Deque {

    constructor() {
        this._deque = [];
    }

    /**
     * Inserts at the front of the queue.
     *
     * @param data {*} - data to be inserted.
     */
    addFirst(data) {
        this._deque.unshift(data);
    }

    /**
     * Inserts at the rear of the queue.
     *
     * @param data {*} - data to be inserted.
     */
    addLast(data) {
        this._deque.push(data);
    }

    /**
     * Returns true if the deque contains the specified element.
     *
     * @param data
     * @return {Boolean} -
     */
    contains(data) {
        this._deque.includes(data)
    }

    /**
     * Retrieves, but does not remove, the first element of deque.
     *
     * @return {*} - the first element or undefined if deque is empty
     */
    getFirst() {
        return this._deque[0];
    }

    /**
     * Retrieves, but does not remove, the last element of deque.
     *
     * @return {*} - the last element or undefined if deque is empty
     */
    getLast() {
        return this._deque[this._deque.length - 1];
    }

    /**
     * Retrieves and removes the first element of this deque, or returns null if this deque is empty.
     *
     * @return {*} - first element from deque
     */
    removeFirst() {
        return this._deque.shift();
    }

    /**
     * Retrieves and removes the last element of this deque, or returns null if this deque is empty.
     *
     * @return {*} - last element from deque.
     */
    removeLast() {
        return this._deque.pop();
    }

    /**
     * Returns the number of elements in deque.
     *
     * @return {Number} - deque size.
     */
    size() {
        return this._deque.length;
    }


    /**
     * Checks if the deque is empty,
     *
     * @return {Boolean} - true if is empty, false otherwise.
     */
    isEmpty() {
        return this._deque.length === 0;
    }

    /**
     * Console logs the entire deque.
     */
    log() {
        console.log(this._deque);
    }
}

export { Deque as default }