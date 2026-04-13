// 2026.04.14力扣网刷题
// 3898. 统计每个顶点的度——中级工程师、第497场周赛——简单
// 给你一个大小为 n x n 的二维整数数组 matrix，以邻接矩阵形式表示一个 无向图。该图包含 n 个顶点，编号从 0 到 n - 1。
// matrix[i][j] = 1 表示顶点 i 与顶点 j 之间存在一条边。
// matrix[i][j] = 0 表示顶点 i 与顶点 j 之间不存在边。
// 顶点的 度（degree）定义为与该顶点相连的边的数量。
// 请返回一个长度为 n 的整数数组 ans，其中 ans[i] 表示顶点 i 的度。
// 示例 1：
// 输入： matrix = [[0, 1, 1], [1, 0, 1], [1, 1, 0]]
// 输出：[2, 2, 2]
// 解释：
// 顶点 0 与顶点 1 和 2 相连，因此其度为 2。
// 顶点 1 与顶点 0 和 2 相连，因此其度为 2。
// 顶点 2 与顶点 0 和 1 相连，因此其度为 2。
// 因此，答案为[2, 2, 2]。
// 示例 2：
// 输入： matrix = [[0, 1, 0], [1, 0, 0], [0, 0, 0]]
// 输出：[1, 1, 0]
// 解释：
// 顶点 0 与顶点 1 相连，因此其度为 1。
// 顶点 1 与顶点 0 相连，因此其度为 1。
// 顶点 2 没有与任何顶点相连，因此其度为 0。
// 因此，答案为[1, 1, 0]。
// 示例 3：
// 输入： matrix = [[0]]
// 输出：[0]
// 解释：
// 图中只有一个顶点，且没有任何边与其相连，因此答案为[0]。
// 提示：
// 1 <= n == matrix.length == matrix[i].length <= 100
// matrix[i][i] == 0
// matrix[i][j] 仅为 0 或 1
// matrix[i][j] == matrix[j][i]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (matrix) {
    let ans = [];
    for (let vertex of matrix) {
        ans.push(vertex.reduce((a, b) => a + b));
    }
    return ans;
};

// 2024.03.24力扣网刷题
// 2026.04.14完成解答并通过力扣所有测试用例
// 零钱兑换——广度优先搜索、数组、动态规划——中等
// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 - 1 。
// 你可以认为每种硬币的数量是无限的。
// 示例 1：
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3
// 解释：11 = 5 + 5 + 1
// 示例 2：
// 输入：coins = [2], amount = 3
// 输出： - 1
// 示例 3：
// 输入：coins = [1], amount = 0
// 输出：0
// 提示：
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 2^31 - 1
// 0 <= amount <= 10^4

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let INT_MAX = amount + 1;
    let dp = new Array(amout + 1).fill(INT_MAX);
    dp[0] = 0;
    for (let i = 0; i < amount; i++) {
        for (let coin of coins) {
            let tmp = i - coin;
            dp[i] = tmp >= 0 ? Math.min(dp[i], dp[tmp] + 1) : dp[i];
        }
    }
    return dp[amount] !== INT_MAX ? dp[amount] : -1;
};
