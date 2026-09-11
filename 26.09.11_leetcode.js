// 2026.09.11力扣网刷题
// 3483. 不同三位偶数的数目——中级工程师、递归、数组、哈希表、枚举、第152场双周赛——简单
// 给你一个数字数组 digits，你需要从中选择三个数字组成一个三位偶数，你的任务是求出 不同 三位偶数的数量。
// 注意：每个数字在三位偶数中都只能使用 一次 ，并且 不能 有前导零。
// 示例 1：
// 输入： digits = [1, 2, 3, 4]
// 输出： 12
// 解释： 可以形成的 12 个不同的三位偶数是 124，132，134，142，214，234，312，314，324，342，412 和 432。注意，不能形成 222，因为数字 2 只有一个。
// 示例 2：
// 输入： digits = [0, 2, 2]
// 输出： 2
// 解释： 可以形成的三位偶数是 202 和 220。注意，数字 2 可以使用两次，因为数组中有两个 2 。
// 示例 3：
// 输入： digits = [6, 6, 6]
// 输出： 1
// 解释： 只能形成 666。
// 示例 4：
// 输入： digits = [1, 3, 5]
// 输出： 0
// 解释： 无法形成三位偶数。
// 提示：
// 3 <= digits.length <= 10
// 0 <= digits[i] <= 9

/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
    const hash = new Array(10).fill(0);
    let d = 0,
        h = 0,
        s = 0;
    for (const digit of digits) {
        hash[digit]++;
        if (hash[digit] === 1) {
            d += 1;
            if (digit) {
                s += 1;
            }
        } else if (hash[digit] === 2) {
            if (digit) {
                s -= 1;
            }
        }
    }
    h = d - (hash[0] > 0 ? 1 : 0);
    let ans = 0;
    for (let i = 0; i < 10; i += 2) {
        if (hash[i]) {
            let d_ = d,
                h_ = h,
                s_ = s;
            if (hash[i] === 1) {
                d_ -= 1;
                if (i) {
                    h_ -= 1;
                    s_ -= 1;
                }
            } else if (hash[i] === 2) {
                if (i) {
                    s_ += 1;
                }
            }
            ans += d_ * h_ - s_;
        }
    }
    return ans;
};
