// 2026.05.05力扣网刷题
// 61. 旋转链表——链表、双指针——中等
// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
// 示例 1：
// 输入：head = [1, 2, 3, 4, 5], k = 2
// 输出：[4, 5, 1, 2, 3]
// 示例 2：
// 输入：head = [0, 1, 2], k = 4
// 输出：[2, 0, 1]
// 提示：
// 链表中节点的数目在范围[0, 500] 内
// - 100 <= Node.val <= 100
// 0 <= k <= 2 * 10^9

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    function getSize(head) {
        if (head === null) {
            return 0;
        }
        return 1 + getSize(head.next);
    }
    const num = getSize(head);
    if (num === 0 || k % num === 0) {
        return head;
    }
    const n = num - (k % num);
    let pre = head,
        p = head.next;
    for (let i = 1; i < n; i++) {
        pre = p;
        p = p.next;
    }
    pre.next = null;
    pre = p;
    while (p && p.next) {
        p = p.next;
    }
    p.next = head;
    head = pre;
    return head;
};
