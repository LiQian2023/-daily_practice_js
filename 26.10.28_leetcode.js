// 2026.10.28力扣网刷题
// 3882. 网格图中最小异或路径——资深工程师、位运算、数组、动态规划、矩阵、第179场双周赛——中等
// 给你一个大小为 m * n 的二维整数数组 grid。
// 你从 左上角 的单元格(0, 0) 出发，想要到达 右下角 的单元格(m - 1, n - 1)。
// 在每一步中，你 可以 向右或向下 移动。
// 路径的 代价 定义为该路径上所有单元格（包括 起点和终点）的值的 按位异或。
// 返回从(0, 0) 到(m - 1, n - 1) 的所有有效路径中 最小 的可能异或值。
// 示例 1：
// 输入： grid = [[1, 2], [3, 4]]
// 输出： 6
// 解释：
// 有两条有效路径：
// (0, 0) →(0, 1) →(1, 1)，异或值为：1 XOR 2 XOR 4 = 7
// (0, 0) →(1, 0) →(1, 1)，异或值为：1 XOR 3 XOR 4 = 6
// 所有有效路径中的最小异或值为 6。
// 示例 2：
// 输入： grid = [[6, 7], [5, 8]]
// 输出： 9
// 解释：
// 有两条有效路径：
// (0, 0) →(0, 1) →(1, 1)，异或值为：6 XOR 7 XOR 8 = 9
// (0, 0) →(1, 0) →(1, 1)，异或值为：6 XOR 5 XOR 8 = 11
// 所有有效路径中的最小异或值为 9。
// 示例 3：
// 输入： grid = [[2, 7, 5]]
// 输出： 0
// 解释：
// 只有一条有效路径：
// (0, 0) →(0, 1) →(0, 2)，异或值为：2 XOR 7 XOR 5 = 0
// 这条路径的异或值为 0，这是可能达到的最小值。
// 提示：
// 1 <= m == grid.length <= 1000
// 1 <= n == grid[i].length <= 1000
// m * n <= 1000
// 0 <= grid[i][j] <= 1023

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost1 = function (grid) {
    const m = grid.length,
        n = grid[0].length;
    const visited = new Array(m)
        .fill()
        .map(() => new Array(n).fill().map(() => new Array(1024).fill(false)));
    function dfs(x, y, visited, val) {
        if (x >= m || y >= n) {
            return;
        }
        val ^= grid[x][y];
        if (visited[x][y][val]) {
            return;
        }
        visited[x][y][val] = true;
        if (x === m - 1 && y === n - 1) {
            return;
        }
        dfs(x + 1, y, visited, val);
        dfs(x, y + 1, visited, val);
    }
    dfs(0, 0, visited, 0);
    let ans = 0;
    for (let i = 0; i < 1024; i++) {
        if (visited[m - 1][n - 1][i]) {
            ans = i;
            break;
        }
    }
    return ans;
};

var minCost2 = function (grid) {
    const m = grid.length,
        n = grid[0].length;
    const dp = Array.from({ length: m }, () => {
        return Array.from({ length: n }, () => {
            return new Array(1024).fill(false);
        });
    });
    dp[0][0][grid[0][0]] = true;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < 1024; k++) {
                if (!dp[i][j][k]) {
                    continue;
                }
                if (i < m - 1) {
                    dp[i + 1][j][k ^ grid[i + 1][j]] = true;
                }
                if (j < n - 1) {
                    dp[i][j + 1][k ^ grid[i][j + 1]] = true;
                }
            }
        }
    }
    let ans = 0;
    for (let i = 0; i < 1024; i++) {
        if (dp[m - 1][n - 1][i]) {
            ans = i;
            break;
        }
    }
    return ans;
};

var minCost = function (grid) {
    const m = grid.length,
        n = grid[0].length;
    const dp = Array.from({ length: n }, () => {
        return new Uint8Array(1024).fill(0);
    });
    dp[0][grid[0][0]] = 1;
    const cur = new Uint8Array(1024).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            cur.fill(0);
            for (let k = 0; k < 1024; k++) {
                if ((i > 0 && dp[j][k]) || (j > 0 && dp[j - 1][k])) {
                    cur[k ^ grid[i][j]] = 1;
                }
            }
            dp[j] = [...cur];
        }
    }
    let ans = 0;
    for (let i = 0; i < 1024; i++) {
        if (dp[n - 1][i]) {
            ans = i;
            break;
        }
    }
    return ans;
};
