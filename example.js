import Deque from 'deque.js';

const deque = new Deque();

deque.addFirst(1);
deque.addLast(2);
deque.addLast(3);
deque.addFirst(5);

console.log('Deque contains 3?: ' + deque.contains(3));

console.log('First element: ' + deque.getFirst());

console.log('Last element: ' + deque.getLast());

console.log('Size: ' + deque.size());

deque.log();

deque.removeFirst();

deque.log();

deque.removeLast();

deque.log();
