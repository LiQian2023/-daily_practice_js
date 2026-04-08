// 2026.04.07力扣网刷题
// LCR 001. 两数相除——数学——简单
// 给定两个整数 a 和 b ，求它们的除法的商 a / b ，要求不得使用乘号 '*'、除号 '/' 以及求余符号 '%' 。
// 注意：
// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是[−231, 231−1]。本题中，如果除法结果溢出，则返回 231 − 1
// 示例 1：
// 输入：a = 15, b = 2
// 输出：7
// 解释：15 / 2 = truncate(7.5) = 7
// 示例 2：
// 输入：a = 7, b = -3
// 输出： - 2
// 解释：7 / -3 = truncate(-2.33333..) = -2
// 示例 3：
// 输入：a = 0, b = 1
// 输出：0
// 示例 4：
// 输入：a = 1, b = 1
// 输出：1
// 提示 :
// -2^31 <= a, b <= 2^31 - 1
// b != 0
// 注意：本题与主站 29 题相同：https://leetcode.cn/problems/divide-two-integers/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function (a, b) {
    const INT_32 = {
        MAX: 2 ** 31 - 1,
        MIN: -(2 ** 31),
    };
    if (a === INT_32.MIN && b === -1) {
        return INT_32.MAX;
    }
    function isNeg(n, flag) {
        if (n < 0) {
            n = -n;
            flag = -flag;
        }
        return [n, flag];
    }
    let flag = 1;
    let aa = BigInt(a),
        bb = BigInt(b);
    [aa, flag] = isNeg(aa, flag);
    [bb, flag] = isNeg(bb, flag);
    let ans = BigInt(0);
    for (let i = 31; i >= 0; i--) {
        let tmp = BigInt(i);
        if (aa >> tmp >= bb) {
            aa -= bb << tmp;
            ans += BigInt(1) << tmp;
        }
    }
    ans = flag === 1 ? ans : -ans;
    return Number(ans);
};
