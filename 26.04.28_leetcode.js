// 2026.04.28力扣网刷题
// 面试题 04.04.检查平衡性——树、深度优先搜索、二叉树——简单
// 实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。
// 示例 1：
// 给定二叉树[3, 9, 20, null, null, 15, 7]
// 3
// / \
// 9  20
// / \
// 15   7
// 返回 true 。
// 示例 2：
// 给定二叉树[1, 2, 2, 3, 3, null, null, 4, 4]
// 1
// / \
// 2   2
// / \
// 3   3
// / \
// 4   4
// 返回 false 。

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    function getHeight(node) {
        if (!node) return 0;
        let leftHeight = getHeight(node.left);
        let rightHeight = getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    if (root === null) return true;
    let left = getHeight(root.left);
    let right = getHeight(root.right);
    if (Math.abs(left - right) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};
