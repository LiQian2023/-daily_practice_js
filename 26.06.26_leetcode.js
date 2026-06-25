// 2026.06.26力扣网刷题
// LCR 194. 二叉树的最近公共祖先——树、深度优先搜索、二叉树——简单
// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
// 例如，给定如下二叉树 : root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
// 示例 1：
// 输入：root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1
// 输出：3
// 解释：节点 5 和节点 1 的最近公共祖先是节点 3。
// 示例 2：
// 输入：root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 4
// 输出：5
// 解释：节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
// 说明：
// 所有节点的值都是唯一的。
// p、q 为不同节点且均存在于给定的二叉树中。
// 注意：本题与主站 236 题相同：https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const stack1 = [],
        stack2 = [];
    let flag1 = false,
        flag2 = false;
    function dfs(node, stack, target, flag) {
        if (!node) {
            return flag;
        }
        stack.push(node);
        if (node === target) {
            flag = true;
            return flag;
        }
        if (!flag) {
            flag = dfs(node.left, stack, target, flag);
        }
        if (!flag) {
            flag = dfs(node.right, stack, target, flag);
        }
        stack.pop();
    }
    dfs(root, stack1, p, flag1);
    dfs(root, stack2, q, flag2);
    let ancestor = null;
    for (let i = 0, j = 0; i < stack1.length && j < stack2.length; i++, j++) {
        if (stack1[i] === stack2[j]) {
            ancestor = stack1[i];
        }
    }
    return ancestor;
};
