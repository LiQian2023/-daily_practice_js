// 2026.09.18力扣网刷题
// 79. 单词搜索——深度优先搜索、数组、字符串、回溯、矩阵——中等
// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
// 示例 1：
// 输入：board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word = "ABCCED"
// 输出：true
// 示例 2：
// 输入：board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word = "SEE"
// 输出：true
// 示例 3：
// 输入：board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word = "ABCB"
// 输出：false
// 提示：
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board 和 word 仅由大小写英文字母组成
// 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length,
        n = board[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const move = [0, 1, 0, -1, 1, 0, -1, 0];
    function dfs(i, j, k) {
        if (k === word.length) return true;
        if (
            i < 0 ||
            i >= m ||
            j < 0 ||
            j >= n ||
            visited[i][j] ||
            board[i][j] !== word[k]
        )
            return false;
        visited[i][j] = true;
        let res = false;
        for (let x = 0, y = 1; !res && y < 8; x += 2, y += 2) {
            res = dfs(i + move[x], j + move[y], k + 1);
        }
        visited[i][j] = false;
        return res;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
};
