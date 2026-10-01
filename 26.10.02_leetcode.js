// 2026.10.02力扣网刷题
// 357. 统计各位数字都不同的数字个数——数学、动态规划、回溯——中等
// 给你一个整数 n ，统计并返回各位数字都不同的数字 x 的个数，其中 0 <= x < 10n 。
// 示例 1：
// 输入：n = 2
// 输出：91
// 解释：答案应为除去 11、22、33、44、55、66、77、88、99 外，在 0 ≤ x < 100 范围内的所有数字。
// 示例 2：
// 输入：n = 0
// 输出：1
// 提示：
// 0 <= n <= 8

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits1 = function (n) {
    const dp = new Array(9).fill(0);
    for (let i = 0; i < 9; i++) {
        if (i === 0) {
            dp[i] = 1;
        } else if (i === 1) {
            dp[i] = 9;
        } else {
            dp[i] = (10 - i + 1) * dp[i - 1];
        }
    }
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += dp[i];
    }
    return result;
};

var countNumbersWithUniqueDigits = function (n) {
    const visited = new Array(10).fill(false);
    this.ans = 1;

    const dfs = (depth) => {
        if (depth > n) return;
        this.ans++;
        if (depth === n) return;
        for (let i = 0; i < 10; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(depth + 1);
                visited[i] = false;
            }
        }
    };

    for (let i = 1; i < 10; i++) {
        visited[i] = true;
        dfs(1);
        visited[i] = false;
    }
    return this.ans;
};
