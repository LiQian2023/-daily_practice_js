// 2026.06.07力扣网刷题
// 3950. 恰好一对连续置位——中级工程师、第184场双周赛——简单
// 给你一个整数 n 。
// 如果其二进制表示中 恰好 仅包含 一对 连续的置位 ，则返回 true ，否则返回 false 。
// 整数中的 置位 是指其 二进制 表示中的 1 。
// 示例 1：
// 输入： nums = 6
// 输出： true
// 解释：
// 6 的二进制表示为 110 。
// 恰好存在一对连续的置位（"11"）。因此，答案为 true 。
// 示例 2：
// 输入： nums = 5
// 输出： false
// 解释：
// 5 的二进制表示为 101 。
// 不存在连续的置位。因此，答案为 false 。
// 提示：
// 0 <= n <= 10^5

/**
 * @param {number} n
 * @return {boolean}
 */
var consecutiveSetBits = function (n) {
    let count = 0,
        pre = 0,
        cur = 0;
    pre = n & 1;
    while (n) {
        n >>= 1;
        cur = n & 1;
        if (pre === 1 && cur === 1) count++;
        pre = cur;
    }
    return count === 1;
};
