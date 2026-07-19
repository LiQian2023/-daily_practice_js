// 2026.07.19力扣网刷题
// 1081. 不同字符的最小子序列——高级专家、栈、贪心、字符串、单调栈、第140场周赛——中等
// 返回 s 字典序最小的子序列，该子序列包含 s 的所有不同字符，且只包含一次。
// 示例 1：
// 输入：s = "bcabc"
// 输出："abc"
// 示例 2：
// 输入：s = "cbacdcbc"
// 输出："acdb"
// 提示：
// 1 <= s.length <= 1000
// s 由小写英文字母组成
// 注意：该题与 316 https://leetcode.cn/problems/remove-duplicate-letters/ 相同

/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
    const last = new Array(26).fill(0);
    const n = s.length;
    for (let i = 0; i < n; i++) {
        last[s.charCodeAt(i) - 97] = i;
    }
    const hash = new Array(26).fill(-1);
    const ans = [];
    let top = -1;
    for (let i = 0; i < n; i++) {
        const key = s.charCodeAt(i) - 97;
        if (hash[key] !== -1) continue;
        while (
            top >= 0 &&
            ans[top] > s[i] &&
            last[ans[top].charCodeAt(0) - 97] > i
        ) {
            const removed = ans.pop().charCodeAt(0) - 97;
            hash[removed] = -1;
            top--;
        }
        ans.push(s[i]);
        top++;
        hash[key] = top;
    }
    return ans.join("");
};
