// 2026.03.19力扣网刷题
// 3833. 统计主导元素下标数——中级工程师、数组、枚举、第488场周赛——简单
// 给你一个长度为 n 的整数数组 nums。
// 当下标 i 满足以下条件时，该下标处的元素被称为 主导元素：nums[i] > average(nums[i + 1], nums[i + 2], ..., nums[n - 1])
// 你的任务是统计数组中 主导元素 的下标数。
// 平均值 是指一组数的总和除以该组数的个数得到的值。
// 注意：数组的 最右边元素 不算作 主导元素 。
// 示例 1：
// 输入： nums = [5, 4, 3]
// 输出： 2
// 解释：
// 在下标 i = 0 处，值 5 是主导元素，因为 5 > average(4, 3) = 3.5。
// 在下标 i = 1 处，值 4 是主导元素，相对于子数组[3]。
// 下标 i = 2 不是主导元素，因为它右侧没有元素。因此答案是 2。
// 示例 2：
// 输入： nums = [4, 1, 2]
// 输出： 1
// 解释：
// 在下标 i = 0 处，值 4 是主导元素，相对于子数组[1, 2]。
// 在下标 i = 1 处，值 1 不是主导元素。
// 下标 i = 2 不是主导元素，因为它右侧没有元素。因此答案是 1。
// 提示：
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100​​​​​​​

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices1 = function (nums) {
    let ans = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let tmp = nums.slice(i + 1, nums.length);
        let div = tmp.length;
        let average = Math.floor(
            tmp.reduce((a, b) => {
                return a + b;
            }, 0) / div,
        );
        if (nums[i] > average) {
            ans += 1;
        }
    }
    return ans;
};

var dominantIndices = function (nums) {
    let ans = 0;
    let tmp = nums.reduce((a, b) => {
        return a + b;
    }, 0);
    let length = nums.length;
    for (let i = 0; i < nums.length; i++) {
        tmp -= nums[i];
        length -= 1;
        if (nums[i] > Math.floor(tmp / length)) {
            ans += 1;
        }
    }
    return ans;
};
