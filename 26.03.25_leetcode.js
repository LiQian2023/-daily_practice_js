// 2026.03.25力扣网刷题
// 3856. 移除尾部元音字母——中级工程师、字符串、第491场周赛——简单
// 给定一个由小写英文字母组成的字符串 s。
// 返回移除字符串 s 尾部 所有元音字母 后得到的字符串。
// 元音字母包括字符 'a'、'e'、'i'、'o' 和 'u'。
// 示例 1：
// 输入： s = "idea"
// 输出： "id"
// 解释：
// 移除 "idea" 后，得到字符串 "id"。
// 示例 2：
// 输入： s = "day"
// 输出： "day"
// 解释：
// 字符串 "day" 尾部没有元音字母。
// 示例 3：
// 输入： s = "aeiou"
// 输出： ""
// 解释：
// 移除 "aeiou" 后，得到字符串 ""。
// 提示：
// 1 <= s.length <= 100
// s 仅由小写英文字母组成。

/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function (s) {
    let s_arr = Array.from(s);
    let tmp = "aeiou";
    while (s_arr.length > 0 && tmp.includes(s_arr[s_arr.length - 1])) {
        s_arr.pop();
    }
    return s_arr.join("");
};
