// 2026.06.12力扣网刷题
// LCR 180. 文件组合——数学、双指针、枚举——简单
// 待传输文件被切分成多个部分，按照原排列顺序，每部分文件编号均为一个 正整数（至少含有两个文件）。传输要求为：连续文件编号总和为接收方指定数字 target 的所有文件。请返回所有符合该要求的文件传输组合列表。
// 注意，返回时需遵循以下规则：
// 每种组合按照文件编号 升序 排列；
// 不同组合按照第一个文件编号 升序 排列。
// 示例 1：
// 输入：target = 12
// 输出： [[3, 4, 5]]
// 解释：在上述示例中，存在一个连续正整数序列的和为 12，为[3, 4, 5]。
// 示例 2：
// 输入：target = 18
// 输出： [[3, 4, 5, 6], [5, 6, 7]]
// 解释：在上述示例中，存在两个连续正整数序列的和分别为 18，分别为[3, 4, 5, 6] 和[5, 6, 7]。
// 提示：
// 1 <= target <= 10 ^ 5

/**
 * @param {number} target
 * @return {number[][]}
 */
var fileCombination = function (target) {
    const ans = [];
    for (let n = 2; n < target / 2; n++) {
        const a = 2 * n,
            b = 2 * target - n * (n - 1);
        const x = Math.floor(b / a),
            r = b % a;
        if (a > b) {
            break;
        } else if (r === 0) {
            const sequence = [];
            for (let i = 0; i < n; i++) {
                sequence.push(x + i);
            }
            ans.splice(0, 0, sequence);
        }
    }
    return ans;
};
