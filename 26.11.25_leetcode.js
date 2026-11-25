// 2026.11.25力扣网刷题
// 784. 字母大小写全排列——位运算、字符串、回溯——中等
// 给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。
// 返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。
// 示例 1：
// 输入：s = "a1b2"
// 输出：["a1b2", "a1B2", "A1b2", "A1B2"]
// 示例 2:
// 输入: s = "3z4"
// 输出 : ["3z4", "3Z4"]
// 提示 :
// 1 <= s.length <= 12
// s 由小写英文字母、大写英文字母和数字组成
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    const ans = [];
    const backtrack = (index, current) => {
        if (index === s.length) {
            ans.push(current.join(""));
            return;
        }
        const char = s[index];
        if (/[a-zA-Z]/.test(char)) {
            current.push(char.toLowerCase());
        } else {
            current.push(char);
        }
        backtrack(index + 1, current);
        if (/[a-zA-Z]/.test(char)) {
            current[current.length - 1] = char.toUpperCase();
            backtrack(index + 1, current);
        }
        current.pop();
    };
    backtrack(0, []);
    return ans;
};
