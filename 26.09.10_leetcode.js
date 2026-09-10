// 2026.09.10力扣网刷题
// 2265. 统计值等于子树平均值的节点数——高级工程师、树、深度优先搜索、二叉树、第292场周赛——中等
// 给你一棵二叉树的根节点 root ，找出并返回满足要求的节点数，要求节点的值等于其 子树 中值的 平均值 。
// 注意：
// n 个元素的平均值可以由 n 个元素 求和 然后再除以 n ，并 向下舍入 到最近的整数。
// root 的 子树 由 root 和它的所有后代组成。
// 示例 1：
// 输入：root = [4, 8, 5, 0, 1, null, 6]
// 输出：5
// 解释：
// 对值为 4 的节点：子树的平均值(4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4 。
// 对值为 5 的节点：子树的平均值(5 + 6) / 2 = 11 / 2 = 5 。
// 对值为 0 的节点：子树的平均值 0 / 1 = 0 。
// 对值为 1 的节点：子树的平均值 1 / 1 = 1 。
// 对值为 6 的节点：子树的平均值 6 / 1 = 6 。
// 示例 2：
// 输入：root = [1]
// 输出：1
// 解释：对值为 1 的节点：子树的平均值 1 / 1 = 1。
// 提示：
// 树中节点数目在范围[1, 1000] 内
// 0 <= Node.val <= 1000

/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
var averageOfSubtree = function (root) {
    let ans = 0;
    function dfs(node) {
        if (!node) return [0, 0];
        const [leftSum, leftCount] = dfs(node.left);
        const [rightSum, rightCount] = dfs(node.right);
        const sum = leftSum + rightSum + node.val;
        const count = leftCount + rightCount + 1;
        const average = Math.floor(sum / count);
        if (average === node.val) {
            ans++;
        }
        return [sum, count];
    }
    dfs(root);
    return ans;
};
