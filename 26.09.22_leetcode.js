// 2026.09.22力扣网刷题
// 90. 子集 II——位运算、数组、回溯——中等
// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的 子集（幂集）。
// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
// 示例 1：
// 输入：nums = [1, 2, 2]
// 输出： [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
// 示例 2：
// 输入：nums = [0]
// 输出： [[], [0]]
// 提示：
// 1 <= nums.length <= 10
// - 10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    const stack = [],
        res = [];
    const backtrack = (start) => {
        res.push([...stack]);
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            stack.push(nums[i]);
            backtrack(i + 1);
            stack.pop();
        }
    };
    backtrack(0);
    return res;
};
