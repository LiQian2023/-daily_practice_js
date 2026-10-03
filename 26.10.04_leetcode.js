// 2026.10.04力扣网刷题
// 678. 有效的括号字符串——栈、贪心、字符串、动态规划、括号序列——中等
// 给你一个只包含三种字符的字符串，支持的字符类型分别是 '('、')' 和 '*'。请你检验这个字符串是否为有效字符串，如果是 有效 字符串返回 true 。
// 有效 字符串符合如下规则：
// 任何左括号 '(' 必须有相应的右括号 ')'。
// 任何右括号 ')' 必须有相应的左括号 '(' 。
// 左括号 '(' 必须在对应的右括号之前 ')'。
// '*' 可以被视为单个右括号 ')' ，或单个左括号 '(' ，或一个空字符串 ""。
// 示例 1：
// 输入：s = "()"
// 输出：true
// 示例 2：
// 输入：s = "(*)"
// 输出：true
// 示例 3：
// 输入：s = "(*))"
// 输出：true
// 提示：
// 1 <= s.length <= 100
// s[i] 为 '('、')' 或 '*'

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    const stack1 = [],
        stack2 = [];
    let ans = true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack1.push(i);
        } else if (s[i] === "*") {
            stack2.push(i);
        } else {
            if (stack1.length > 0) {
                stack1.pop();
            } else if (stack2.length > 0) {
                stack2.pop();
            } else {
                ans = false;
                break;
            }
        }
    }
    if (ans) {
        if (stack1.length > stack2.length) {
            ans = false;
        } else {
            let i = 0,
                j = 0;
            while (i < stack1.length && j < stack2.length) {
                if (stack1[i] < stack2[j]) {
                    i++;
                }
                j++;
            }
            if (i < stack1.length) {
                ans = false;
            }
        }
    }
    return ans;
};
