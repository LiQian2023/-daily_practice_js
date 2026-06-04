// 2026.06.05力扣网刷题
// 面试题 03.01.三合一 —— 栈、设计、数组——简单
// 三合一。描述如何只用一个数组来实现三个栈。
// 你应该实现push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum)方法。stackNum表示栈下标，value表示压入的值。
// 构造函数会传入一个stackSize参数，代表每个栈的大小。
// 示例 1：
// 输入：
// ["TripleInOne", "push", "push", "pop", "pop", "pop", "isEmpty"]
// [[1], [0, 1], [0, 2], [0], [0], [0], [0]]
// 输出：
// [null, null, null, 1, -1, -1, true]
// 说明：当栈为空时`pop, peek`返回 - 1，当栈满时`push`不压入元素。
// 示例 2：
// 输入：
// ["TripleInOne", "push", "push", "push", "pop", "pop", "pop", "peek"]
// [[2], [0, 1], [0, 2], [0, 3], [0], [0], [0], [0]]
// 输出：
// [null, null, null, null, 2, 1, -1, -1]
// 提示：
// 0 <= stackNum <= 2

/**
 * @param {number} stackSize
 */
var TripleInOne = function (stackSize) {
    this.stack = new Array(stackSize * 3).fill(-1);
    this.stackSize = stackSize;
    this.stackIndex = [0, stackSize, 2 * stackSize];
    this.top = [0, stackSize, 2 * stackSize];
};

/**
 * @param {number} stackNum
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function (stackNum, value) {
    if (this.top[stackNum] === this.stackIndex[stackNum] + this.stackSize) {
        return;
    }
    this.stack[this.top[stackNum]] = value;
    this.top[stackNum]++;
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function (stackNum) {
    if (this.top[stackNum] === this.stackIndex[stackNum]) {
        return -1;
    }
    let value = this.stack[this.top[stackNum] - 1];
    this.stack[this.top[stackNum] - 1] = -1;
    this.top[stackNum]--;
    return value;
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function (stackNum) {
    if (this.top[stackNum] === this.stackIndex[stackNum]) {
        return -1;
    }
    return this.stack[this.top[stackNum] - 1];
};

/**
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function (stackNum) {
    return this.top[stackNum] === this.stackIndex[stackNum];
};

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */
