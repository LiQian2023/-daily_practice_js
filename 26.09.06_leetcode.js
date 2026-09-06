// 2026.09.06力扣网刷题
// 22. 括号生成——字符串、动态规划、回溯、括号序列——中等
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 示例 1：
// 输入：n = 3
// 输出：["((()))", "(()())", "(())()", "()(())", "()()()"]
// 示例 2：
// 输入：n = 1
// 输出：["()"]
// 提示：
// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];

    function backtrack(current, open, close) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
};
