// 2026.09.29力扣网刷题
// 93. 复原 IP 地址——字符串、回溯——中等
// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
// 示例 1：
// 输入：s = "25525511135"
// 输出：["255.255.11.135", "255.255.111.35"]
// 示例 2：
// 输入：s = "0000"
// 输出：["0.0.0.0"]
// 示例 3：
// 输入：s = "101023"
// 输出：["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"]
// 提示：
// 1 <= s.length <= 20
// s 仅由数字组成

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const len = s.length,
        res = [],
        path = [];
    if (len >= 4 && len <= 12) {
        backtrack(s, 0, 4, path, res);
    }
    return res;
};

function backtrack(s, start, level, path, res) {
    const resLen = s.length - start;
    if (resLen < level || resLen > level * 3) return;
    if (level === 0) {
        if (path.length === s.length + 3) {
            res.push(path.join(""));
        }
        return;
    }
    if (level !== 4) {
        path.push(".");
    }
    let num = 0;
    for (let i = start; i < s.length && i < start + 3; i++) {
        num = num * 10 + (s[i] - "0");
        if (num > 255) break;
        if (i === start && num === 0) {
            path.push("0");
            backtrack(s, i + 1, level - 1, path, res);
            break;
        }
        path.push(s[i]);
        backtrack(s, i + 1, level - 1, path, res);
    }
    while (path.length > 0 && path[path.length - 1] !== ".") {
        path.pop();
    }
    if (level != 4 && path.length > 0) {
        path.pop();
    }
}
