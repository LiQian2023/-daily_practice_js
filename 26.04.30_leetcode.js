// 2026.04.30力扣网刷题
// 面试题 05.03.翻转数位——位运算、动态规划——简单
// 给定一个32位整数 num，你可以将一个数位从0变为1。请编写一个程序，找出你能够获得的最长的一串1的长度。
// 示例 1：
// 输入 : num = 1775(110111011112)
// 输出 : 8
// 示例 2：
// 输入 : num = 7(01112)
// 输出 : 4

/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
    let numlist = (num >>> 0).toString(2).split("0");
    let dp = new Array(numlist.length).fill(0);
    for (let i = 0; i < numlist.length; i++) {
        dp[i] = numlist[i].length;
    }
    let ans = dp[0] + 1;
    for (let i = 1; i < dp.length; i++) {
        ans = Math.max(ans, dp[i - 1] + dp[i] + 1);
    }
    return ans > 32 ? 32 : ans;
};
