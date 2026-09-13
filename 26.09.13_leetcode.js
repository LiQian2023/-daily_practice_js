// 2026.09.13力扣网刷题
// 47. 全排列 II——数组、回溯、排序——中等
// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
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

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b);
    const stack = [],
        visited = new Array(nums.length).fill(false),
        res = [];
    const backtrack = (nums, stack, visited) => {
        if (stack.length === nums.length) {
            res.push([...stack]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;
            stack.push(nums[i]);
            visited[i] = true;
            backtrack(nums, stack, visited);
            stack.pop();
            visited[i] = false;
        }
    };
    backtrack(nums, stack, visited);
    return res;
};
