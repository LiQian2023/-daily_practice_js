// 2026.11.21力扣网刷题
// LCR 084. 全排列 II——数组、回溯——中等
// 给定一个可包含重复数字的整数集合 nums ，按任意顺序 返回它所有不重复的全排列。
// 示例 1：
// 输入：nums = [1, 1, 2]
// 输出：
// [[1, 1, 2],
// [1, 2, 1],
// [2, 1, 1]]
// 示例 2：
// 输入：nums = [1, 2, 3]
// 输出： [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
// 提示：
// 1 <= nums.length <= 8
// - 10 <= nums[i] <= 10
// 注意：本题与主站 47 题相同： https ://leetcode.cn/problems/permutations-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b);
    const res = [],
        stack = [],
        used = new Array(nums.length).fill(false);
    const backtrack = (depth) => {
        if (depth === nums.length) {
            res.push([...stack]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            stack.push(nums[i]);
            used[i] = true;
            backtrack(depth + 1);
            stack.pop();
            used[i] = false;
        }
    };
    backtrack(0);
    return res;
};
