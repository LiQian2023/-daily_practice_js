// 2026.09.27力扣网刷题
// 1190. 反转每对括号间的子串——高级工程师、栈、字符串、括号序列、第154场周赛——中等
// 给出一个字符串 s（仅含有小写英文字母和括号）。
// 请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。
// 注意，您的结果中 不应 包含任何括号。
// 示例 1：
// 输入：s = "(abcd)"
// 输出："dcba"
// 示例 2：
// 输入：s = "(u(love)i)"
// 输出："iloveu"
// 解释：先反转子字符串 "love" ，然后反转整个字符串。
// 示例 3：
// 输入：s = "(ed(et(oc))el)"
// 输出："leetcode"
// 解释：先反转子字符串 "oc" ，接着反转 "etco" ，然后反转整个字符串。
// 提示：
// 1 <= s.length <= 2000
// s 中只有小写英文字母和括号
// 题目测试用例确保所有括号都是成对出现的

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    const stack = [],
        n = s.length;
    const pair = new Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else if (s[i] === ")") {
            const j = stack.pop();
            pair[i] = j;
            pair[j] = i;
        }
    }
    const res = [];
    let step = 1;
    for (let i = 0; i < n; i += step) {
        if (s[i] === "(" || s[i] === ")") {
            i = pair[i];
            step = -step;
        } else {
            res.push(s[i]);
        }
    }
    return res.join("");
};
