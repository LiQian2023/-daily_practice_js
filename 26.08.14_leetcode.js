// 2026.08.14力扣网刷题
// 3090. 每个字符最多出现两次的最长子字符串——中级工程师、哈希表、字符串、滑动窗口、第390场周赛——简单
// 给你一个字符串 s ，请找出满足每个字符最多出现两次的最长子字符串，并返回该子字符串的 最大 长度。
// 示例 1：
// 输入： s = "bcbbbcba"
// 输出： 4
// 解释：
// 以下子字符串长度为 4，并且每个字符最多出现两次："bcbbbcba"。
// 示例 2：
// 输入： s = "aaaa"
// 输出： 2
// 解释：
// 以下子字符串长度为 2，并且每个字符最多出现两次："aaaa"。
// 提示：
// 2 <= s.length <= 100
// s 仅由小写英文字母组成。

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    let ans = 0;
    const hash = new Array(26).fill(0);
    for (let i = 0, j = 0; j < s.length; j++) {
        let key = s.charCodeAt(j) - 97;
        hash[key]++;
        while (hash[key] > 2) {
            hash[s.charCodeAt(i) - 97]--;
            i++;
        }
        ans = j - i + 1 > ans ? j - i + 1 : ans;
    }
    return ans;
};
