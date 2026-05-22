// 2026.05.22力扣网刷题
// 面试题 17.12.BiNode——栈、树、深度优先搜索、二叉搜索树、链表、二叉树——简单
// 二叉树数据结构TreeNode可用来表示单向链表（其中left置空，right为下一个链表节点）。实现一个方法，把二叉搜索树转换为单向链表，要求依然符合二叉搜索树的性质，转换操作应是原址的，也就是在原始的二叉搜索树上直接修改。
// 返回转换后的单向链表的头节点。
// 注意：本题相对原题稍作改动
// 示例：
// 输入：[4, 2, 5, 1, 3, null, 6, 0]
// 输出：[0, null, 1, null, 2, null, 3, null, 4, null, 5, null, 6]
// 提示：
// 节点数量不会超过 100000。

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
 * @return {TreeNode}
 */
var convertBiNode = function (root) {
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        if (this.prev === null) {
            this.newRoot = node;
        } else {
            this.prev.right = node;
        }
        node.left = null;
        this.prev = node;
        dfs(node.right);
    }
    this.prev = null;
    this.newRoot = null;
    dfs(root);
    return this.newRoot;
};
