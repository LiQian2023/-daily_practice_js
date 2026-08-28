// 2026.08.28力扣网刷题
// 3996. 偶数次骑士移动——中级工程师、数组、数学、第511场周赛——简单
// 给你两个整数数组 start 和 target，每个数组的形式均为[x, y]，表示标准 8 x 8 国际象棋棋盘上的一个格子。
// 如果骑士可以用 偶数 次移动从 start 到达 target，则返回 true；否则返回 false。
// 注意：骑士的一次合法移动是：沿一个方向移动两格，再沿与其垂直的方向移动一格。下图展示了骑士从一个格子出发时所有 8 种可能的移动方式。
// 示例 1：
// 输入： start = [1, 1], target = [2, 2]
// 输出： true
// 解释：
// 一种可行的移动序列为(1, 1) -> (3, 2) -> (2, 4) -> (4, 3) -> (2, 2)。
// 骑士经过 4 次移动到达目标位置，4 是偶数。因此答案为 true。
// 示例 2：
// 输入： start = [4, 5], target = [6, 6]
// 输出： false
// 解释：
// 骑士无法用偶数次移动从 start = [4, 5] 到达 target = [6, 6]。因此答案为 false。
// 提示：
// start.length == target.length == 2
// 0 <= start[i], target[i] <= 7

/**
 * @param {number[]} start
 * @param {number[]} target
 * @return {boolean}
 */
var canReach1 = function (start, target) {
    const visited = new Array(8).fill(0).map(() => new Array(8).fill(false));
    let step = 0;
    function dfs(x, y, targetX, targetY, step, visited) {
        if (x < 0 || x > 7 || y < 0 || y > 7 || visited[x][y]) {
            return false;
        }
        if (x === targetX && y === targetY) {
            return step % 2 === 0;
        }
        visited[x][y] = true;
        let flag1 = dfs(x + 2, y + 1, targetX, targetY, step + 1, visited);
        let flag2 = dfs(x + 2, y - 1, targetX, targetY, step + 1, visited);
        let flag3 = dfs(x - 2, y + 1, targetX, targetY, step + 1, visited);
        let flag4 = dfs(x - 2, y - 1, targetX, targetY, step + 1, visited);
        let flag5 = dfs(x + 1, y + 2, targetX, targetY, step + 1, visited);
        let flag6 = dfs(x + 1, y - 2, targetX, targetY, step + 1, visited);
        let flag7 = dfs(x - 1, y + 2, targetX, targetY, step + 1, visited);
        let flag8 = dfs(x - 1, y - 2, targetX, targetY, step + 1, visited);
        return (
            flag1 || flag2 || flag3 || flag4 || flag5 || flag6 || flag7 || flag8
        );
    }
    return dfs(start[0], start[1], target[0], target[1], step, visited);
};

var canReach = function (start, target) {
    return (start[0] + start[1]) % 2 === (target[0] + target[1]) % 2;
};
