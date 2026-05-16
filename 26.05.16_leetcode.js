// 2026.05.16力扣网刷题
// 面试题 03.04.化栈为队——栈、设计、队列——简单
// 实现一个MyQueue类，该类用两个栈来实现一个队列。
// 示例：
// MyQueue queue = new MyQueue();
// queue.push(1);
// queue.push(2);
// queue.peek();  // 返回 1
// queue.pop();   // 返回 1
// queue.empty(); // 返回 false
// 说明：
// 你只能使用标准的栈操作 -- 也就是只有 push to top, peek / pop from top, size 和 is empty 操作是合法的。
// 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
// 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.pushStack = [];
    this.popStack = [];
    this.pushTop = -1;
    this.popTop = -1;
};

MyQueue.prototype.transform = function (stack1, stack2, top) {
    while (top[0] !== -1) {
        top[1] += 1;
        stack2.push(stack1.pop());
        top[0] -= 1;
    }
    return top;
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    const [top1, top2] = this.transform(this.popStack, this.pushStack, [
        this.popTop,
        this.pushTop,
    ]);
    this.popTop = top1;
    this.pushTop = top2;
    this.pushTop += 1;
    this.pushStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    const [top1, top2] = this.transform(this.pushStack, this.popStack, [
        this.pushTop,
        this.popTop,
    ]);
    this.pushTop = top1;
    this.popTop = top2;
    this.popTop -= 1;
    return this.popStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    const [top1, top2] = this.transform(this.pushStack, this.popStack, [
        this.pushTop,
        this.popTop,
    ]);
    this.pushTop = top1;
    this.popTop = top2;
    return this.popStack[this.popTop];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.pushTop === -1 && this.popTop === -1;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
