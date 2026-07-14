// 2026.07.14力扣网刷题
// 6. Z 字形变换——字符串——中等
// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
// 请你实现这个将字符串进行指定行数变换的函数：
// string convert(string s, int numRows);
// 示例 1：
// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// 示例 3：
// 输入：s = "A", numRows = 1
// 输出："A"
// 提示：
// 1 <= s.length <= 1000
// s 由英文字母（小写和大写）、',' 和 '.' 组成
// 1 <= numRows <= 1000

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const len = s.length;
    if (numRows === 1 || numRows >= len) return s;
    const res = "";
    let flag = 0;
    for (let row = 1, i = 0, size = 0; size < len; size++) {
        let down = numRows - row;
        if (row === 1 || row === numRows) {
            down = numRows - 1;
        } else {
            if (flag) {
                down = row - 1;
            }
        }
        let up = down;
        res += s[i];
        i += down + up;
        flag = !flag;
        if (i >= len) {
            i = row;
            row++;
            flag = 0;
        }
    }
    return res;
};
