// 2026.05.18力扣网刷题
// 3931. 检查相邻数字差——第502场周赛——简单
// 给你一个由数字组成的字符串 s。
// 如果每一对 相邻 数字之间的 绝对差 都至多为 2，则返回 true；否则返回 false。
// a 和 b 之间的绝对差定义为 abs(a - b)。
// 示例 1：
// 输入： s = "132"
// 输出： true
// 解释：
// s[0] 和 s[1] 处数字的绝对差为 abs(1 - 3) = 2。
// s[1] 和 s[2] 处数字的绝对差为 abs(3 - 2) = 1。
// 由于两个差值都至多为 2，因此答案为 true。
// 示例 2：
// 输入： s = "129"
// 输出： false
// 解释：
// s[0] 和 s[1] 处数字的绝对差为 abs(1 - 2) = 1。
// s[1] 和 s[2] 处数字的绝对差为 abs(2 - 9) = 7，大于 2。
// 因此，答案为 false。
// 提示：
// 2 <= s.length <= 100
// s 仅由数字组成。

/**
 * @param {string} s
 * @return {boolean}
 */
var isAdjacentDiffAtMostTwo = function (s) {
    for (let i = 1; i < s.length; i++) {
        if (Math.abs(s[i] - s[i - 1]) > 2) {
            return false;
        }
    }
    return true;
};

// 89. a ^ b——位运算、快速幂——简单
// 求 a 的 b 次方对 p 取模的值。
// 输入格式
// 三个整数 a, b, p
// , 在同一行用空格隔开。
// 输出格式
// 输出一个整数，表示a^ b mod p的值。
// 数据范围
// 0≤a, b≤10^9
// 1≤p≤10^9
// 输入样例：
// 3 2 7
// 输出样例：
// 2

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
const [a, b, p] = input.map(BigInt);

function myPow(a, b, p) {
    let result = 1n % p;
    for (; b > 0; b >>= 1n) {
        if (b & 1n) result = (result * a) % p;
        a = (a * a) % p;
    }
    return result;
}

console.log(myPow(a, b, p).toString());
