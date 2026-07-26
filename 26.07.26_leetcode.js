// 2026.07.26力扣网刷题
// 628. 三个数的最大乘积——数组、数学、排序——简单
// 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
// 示例 1：
// 输入：nums = [1, 2, 3]
// 输出：6
// 示例 2：
// 输入：nums = [1, 2, 3, 4]
// 输出：24
// 示例 3：
// 输入：nums = [-1, -2, -3]
// 输出： - 6
// 提示：
// 3 <= nums.length <= 10^4
// - 1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    const ma = new Array(3).fill(-Infinity);
    const mi = new Array(2).fill(Infinity);
    for (let num of nums) {
        if (num > ma[0]) {
            ma[2] = ma[1];
            ma[1] = ma[0];
            ma[0] = num;
        } else if (num > ma[1]) {
            ma[2] = ma[1];
            ma[1] = num;
        } else if (num > ma[2]) {
            ma[2] = num;
        }
        if (num < mi[0]) {
            mi[1] = mi[0];
            mi[0] = num;
        } else if (num < mi[1]) {
            mi[1] = num;
        }
    }
    return Math.max(ma[0] * ma[1] * ma[2], mi[0] * mi[1] * ma[0]);
};
