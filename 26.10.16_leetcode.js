// 2026.10.16力扣网刷题
// 4074. 和为目标值的最大乘积对——中级工程师、第193场双周赛——简单
// 给你一个整数数组 nums 和一个整数 target。
// 当一个由 不同 下标组成的二元组(i, j) 满足以下条件，称它是 有效的 ：
// nums[i] + nums[j] == target
// nums[i] > nums[j]
// 返回一个 有效的 二元组[i, j]，使其 乘积 nums[i] * nums[j] 在所有有效二元组中是 最大 的。如果不存在有效的二元组，返回[-1, -1]。
// 如果有多个有效二元组都能达到 最大 乘积，你可以返回其中的 任意一个 。
// 示例 1：
// 输入： nums = [1, 2, 3, 4], target = 5
// 输出：[2, 1]
// 解释：
// 存在 2 个有效的二元组：
// 序号(i, j)	nums[i]	nums[j]	和	积
// 1	(3, 0)	4	1	5	4
// 2	(2, 1)	3	2	5	6
// 两个二元组的和均为 5 且满足 nums[i] > nums[j]。第二个二元组的乘积更大，3 * 2 = 6，因此答案是[2, 1]。
// 示例 2：
// 输入： nums = [-3, -1, 4, 2], target = 1
// 输出：[3, 1]
// 解释：
// 存在 2 个有效的二元组：
// 序号(i, j)	nums[i]	nums[j]	和	积
// 1	(2, 0)	4 - 3	1 - 12
// 2	(3, 1)	2 - 1	1 - 2
// 由于 - 2 > -12，因此选择下标(3, 1) 对应的二元组，答案是[3, 1]。
// 示例 3：
// 输入： nums = [3, 3, 5], target = 6
// 输出：[-1, -1]
// 解释：
// 不存在有效的二元组，因为 nums[0] 和 nums[1] 的和虽然为 6，但它们是相等的。
// 提示：
// 2 <= nums.length <= 100
// - 100 <= nums[i], target <= 100

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var maxProductPair = function (nums, target) {
    let mi = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < mi) {
            mi = nums[i];
        }
    }
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const key = nums[i] - mi;
        map.set(key, 1);
    }
    const tmp = [1, -1, -1];
    for (const num1 of nums) {
        const num2 = target - num1;
        const key = num2 - mi;
        if (map.has(key) && num1 !== num2) {
            const product = num1 * num2;
            if (tmp[0] === 1 || product > tmp[0]) {
                tmp[0] = product;
                tmp[1] = num1 > num2 ? num1 - mi : num2 - mi;
                tmp[2] = num1 > num2 ? num2 - mi : num1 - mi;
            }
        }
    }
    const res = [-1, -1];
    if (tmp[0] !== 1) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] - mi === tmp[1]) {
                res[0] = i;
            } else if (nums[i] - mi === tmp[2]) {
                res[1] = i;
            }
        }
    }
    return res;
};
