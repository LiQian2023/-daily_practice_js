// 2026.05.15力扣网刷题
// 面试题 03.02. 栈的最小值——栈、设计——简单
// 请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。
// 示例：
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.p = -1;
    this.MinStack = [];
    this.mp = -1;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.p++;
    this.stack[this.p] = x;
    if (this.mp === -1 || x <= this.MinStack[this.mp]) {
        this.mp++;
        this.MinStack[this.mp] = x;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack[this.p] === this.MinStack[this.mp]) {
        this.mp--;
    }
    this.p--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.p];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.MinStack[this.mp];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
