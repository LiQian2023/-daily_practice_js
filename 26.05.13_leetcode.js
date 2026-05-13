// 2026.05.13力扣网刷题
// LCR 150. 彩灯装饰记录 II——树、广度优先搜索、二叉树——简单
// 一棵圣诞树记作根节点为 root 的二叉树，节点值为该位置装饰彩灯的颜色编号。请按照从左到右的顺序返回每一层彩灯编号，每一层的结果记录于一行。
// 示例 1：
// 输入：root = [8, 17, 21, 18, null, null, 6]
// 输出： [[8], [17, 21], [18, 6]]
// 提示：
// 节点总数 <= 1000
// 注意：本题与主站 102 题相同：https://leetcode.cn/problems/binary-tree-level-order-traversal/

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
 * @return {number[][]}
 */
var decorateRecord = function (root) {
    const queue = [];
    const ans = [];
    if (root) {
        queue.push(root);
    }
    let cur = queue.length,
        next = 0;
    while (cur) {
        const tmp = [];

        while (cur) {
            const node = queue[0];
            queue.splice(0, 1);
            cur -= 1;
            if (node) {
                tmp.push(node.val);
                if (node.left) {
                    queue.push(node.left);
                    next += 1;
                }
                if (node.right) {
                    queue.push(node.right);
                    next += 1;
                }
            }
        }

        ans.push(tmp);
        ((cur = next), (next = 0));
    }
    return ans;
};
