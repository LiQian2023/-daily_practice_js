// 2026.07.29力扣网刷题
// 67. 二进制求和——位运算、数学、字符串、模拟——简单
// 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
// 示例 1：
// 输入 : a = "11", b = "1"
// 输出："100"
// 示例 2：
// 输入：a = "1010", b = "1011"
// 输出："10101"
// 提示：
// 1 <= a.length, b.length <= 10^4
// a 和 b 仅由字符 '0' 或 '1' 组成
// 字符串如果不是 "0" ，就不含前导零

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const len1 = a.length,
        len2 = b.length;
    const len3 = Math.max(len1, len2) + 1;
    const res = new Array(len3).fill("0");
    let i = len1 - 1,
        j = len2 - 1,
        k = len3 - 1;
    while (i >= 0 || j >= 0) {
        const sum =
            (i >= 0 ? a[i] - "0" : 0) +
            (j >= 0 ? b[j] - "0" : 0) +
            (res[k] - "0");
        res[k] = String(sum % 2);
        res[k - 1] = String(Math.floor(sum / 2));
        i--;
        j--;
        k--;
    }
    return res[0] === "0" ? res.slice(1).join("") : res.join("");
};
