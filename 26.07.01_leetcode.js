// 2026.07.01力扣网刷题
// 14. 最长公共前缀——字典树、数组、字符串——简单
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 示例 1：
// 输入：strs = ["flower", "flow", "flight"]
// 输出："fl"
// 示例 2：
// 输入：strs = ["dog", "racecar", "car"]
// 输出：""
// 解释：输入不存在公共前缀。
// 提示：
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 如果非空，则仅由小写英文字母组成

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let len1 = strs[0].length;
    let size = len1;
    for (let i = 1; i < strs.length; i++) {
        let len2 = strs[i].length;
        let j = 0;
        for (; j < Math.min(len1, len2); j++) {
            if (strs[0][j] !== strs[i][j]) {
                break;
            }
        }
        size = Math.min(size, j);
    }
    return strs[0].slice(0, size);
};
