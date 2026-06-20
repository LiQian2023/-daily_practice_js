// 2026.06.20力扣网刷题
// 面试题 04.02.最小高度树——树、二叉搜索树、数组、分治、二叉树——简单
// 给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。
// 示例：
// 给定有序数组 : [-10, -3, 0, 5, 9] ,
// 一个可能的答案是：[0, -3, 9, -10, null, 5]，它可以表示下面这个高度平衡二叉搜索树：
// 0
// / \
// - 3   9
// /   /
// -10  5

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return null;
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
};
