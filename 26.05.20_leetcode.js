// 2026.05.20力扣网刷题
// 面试题 03.06.动物收容所——设计、队列——简单
// 动物收容所。有家动物收容所只收容狗与猫，且严格遵守“先进先出”的原则。在收养该收容所的动物时，收养人只能收养所有动物中“最老”（由其进入收容所的时间长短而定）的动物，或者可以挑选猫或狗（同时必须收养此类动物中“最老”的）。换言之，收养人不能自由挑选想收养的对象。请创建适用于这个系统的数据结构，实现各种操作方法，比如enqueue、dequeueAny、dequeueDog和dequeueCat。允许使用Java内置的LinkedList数据结构。
// enqueue方法有一个animal参数，animal[0]代表动物编号，animal[1]代表动物种类，其中 0 代表猫，1 代表狗。
// dequeue * 方法返回一个列表[动物编号, 动物种类]，若没有可以收养的动物，则返回[-1, -1]。
// 示例 1：
// 输入：
// ["AnimalShelf", "enqueue", "enqueue", "dequeueCat", "dequeueDog", "dequeueAny"]
// [[], [[0, 0]], [[1, 0]], [], [], []]
// 输出：
// [null, null, null, [0, 0], [-1, -1], [1, 0]]
// 示例 2：
// 输入：
// ["AnimalShelf", "enqueue", "enqueue", "enqueue", "dequeueDog", "dequeueCat", "dequeueAny"]
// [[], [[0, 0]], [[1, 0]], [[2, 1]], [], [], []]
// 输出：
// [null, null, null, null, [2, 1], [0, 0], [1, 0]]
// 说明:
// 收纳所的最大容量为20000

var AnimalShelf = function () {
    this.dogQueue = [];
    this.catQueue = [];
    this.dog = 0;
    this.cat = 0;
};

/**
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function (animal) {
    let type = animal[1];
    switch (type) {
        case 0:
            this.catQueue.push(animal);
            this.cat++;
            break;
        case 1:
            this.dogQueue.push(animal);
            this.dog++;
            break;
        default:
            break;
    }
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function () {
    let ans = [-1, -1];
    if (this.dog > 0 && this.cat > 0) {
        if (this.dogQueue[0][0] < this.catQueue[0][0]) {
            ans = this.dequeueDog();
        } else {
            ans = this.dequeueCat();
        }
    } else if (this.dog > 0 && this.cat === 0) {
        ans = this.dequeueDog();
    } else if (this.cat > 0 && this.dog === 0) {
        ans = this.dequeueCat();
    }
    return ans;
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function () {
    let ans = [-1, -1];
    if (this.dog > 0) {
        ans = this.dogQueue.shift();
        this.dog--;
    }
    return ans;
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function () {
    let ans = [-1, -1];
    if (this.cat > 0) {
        ans = this.catQueue.shift();
        this.cat--;
    }
    return ans;
};

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */
