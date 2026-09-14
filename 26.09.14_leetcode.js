// 2026.09.14力扣网刷题
// 77. 组合——回溯——中等
// 给定两个整数 n 和 k，返回范围[1, n] 中所有可能的 k 个数的组合。
// 你可以按 任何顺序 返回答案。
// 示例 1：
// 输入：n = 4, k = 2
// 输出：
// [
// 	[2, 4],
// 	[3, 4],
// 	[2, 3],
// 	[1, 2],
// 	[1, 3],
// 	[1, 4],
// ]
// 示例 2：
// 输入：n = 1, k = 1
// 输出： [[1]]
// 提示：
// 1 <= n <= 20
// 1 <= k <= n

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = [],
        stack = [],
        visited = new Array(n + 1).fill(false);
    const backtrack = (start) => {
        if (stack.length === k) {
            res.push([...stack]);
            return;
        }
        for (let i = start; i <= n; i++) {
            if (!visited[i]) {
                visited[i] = true;
                stack.push(i);
                backtrack(i + 1);
                stack.pop();
                visited[i] = false;
            }
        }
    };
    backtrack(1);
    return res;
};
