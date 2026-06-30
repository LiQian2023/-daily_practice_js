// 2026.06.30力扣网刷题
// 1358. 包含所有三种字符的子字符串数目——资深工程师、哈希表、字符串、滑动串口、第20场双周赛——中等
// 给你一个字符串 s ，它只包含三种字符 a, b 和 c 。
// 请你返回 a，b 和 c 都 至少 出现过一次的子字符串数目。
// 示例 1：
// 输入：s = "abcabc"
// 输出：10
// 解释：包含 a，b 和 c 各至少一次的子字符串为 "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" 和 "abc" (相同字符串算多次)。
// 示例 2：
// 输入：s = "aaacb"
// 输出：3
// 解释：包含 a，b 和 c 各至少一次的子字符串为 "aaacb", "aacb" 和 "acb" 。
// 示例 3：
// 输入：s = "abc"
// 输出：1
// 提示：
// 3 <= s.length <= 5 x 10 ^ 4
// s 只包含字符 a，b 和 c 。

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let a = 0,
        b = 0,
        c = 0,
        res = 0,
        n = s.length;
    for (let l = 0, r = 0; r < n; r++) {
        if (s[r] === "a") a++;
        else if (s[r] === "b") b++;
        else if (s[r] === "c") c++;
        while (r - l + 1 >= 3 && a > 0 && b > 0 && c > 0) {
            if (a > 0 && b > 0 && c > 0) {
                res += n - r;
            }
            if (s[l] === "a") a--;
            else if (s[l] === "b") b--;
            else if (s[l] === "c") c--;
            l++;
        }
    }
    return res;
};
