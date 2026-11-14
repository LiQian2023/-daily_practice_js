// 2026.11.14力扣网刷题
// 3364. 最小正和子数组——中级工程师、数组、前缀和、滑动窗口、第425场周赛——简单
// 给你一个整数数组 nums 和 两个 整数 l 和 r。你的任务是找到一个长度在 l 和 r 之间（包含）且和大于 0 的 子数组 的 最小 和。
// 返回满足条件的子数组的 最小 和。如果不存在这样的子数组，则返回 - 1。
// 子数组 是数组中的一个连续 非空 元素序列。
// 示例 1：
// 输入： nums = [3, -2, 1, 4], l = 2, r = 3
// 输出： 1
// 解释：
// 长度在 l = 2 和 r = 3 之间且和大于 0 的子数组有：
// [3, -2] 和为 1
// [1, 4] 和为 5
// [3, -2, 1] 和为 2
// [-2, 1, 4] 和为 3
// 其中，子数组[3, -2] 的和为 1，是所有正和中最小的。因此，答案为 1。
// 示例 2：
// 输入： nums = [-2, 2, -3, 1], l = 2, r = 3
// 输出： - 1
// 解释：
// 不存在长度在 l 和 r 之间且和大于 0 的子数组。因此，答案为 - 1。
// 示例 3：
// 输入： nums = [1, 2, 3, 4], l = 2, r = 4
// 输出： 3
// 解释：
// 子数组[1, 2] 的长度为 2，和为 3，是所有正和中最小的。因此，答案为 3。
// 提示：
// 1 <= nums.length <= 100
// 1 <= l <= r <= nums.length
// - 1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
    const prefix = new Array(nums.length + 1).fill(0);
    for (let i = 1; i <= nums.length; i++) {
        prefix[i] = prefix[i - 1] + nums[i - 1];
    }
    const SildingWindow = new Array(r - l + 1).fill(0);
    const MinPrefix = new Array(nums.length + 1).fill(0);
    for (let i = 0; i <= nums.length; i++) {
        const begin = i - r,
            end = i - l;
        if (end < 0) {
            continue;
        }
        for (let j = begin, z = 0; j <= end; j++) {
            if (j < 0) {
                continue;
            }
            SildingWindow[z++] = prefix[j];
        }
        let ma = SildingWindow[0];
        for (let j = 0; j < r - l + 1; j++) {
            if (
                ma >= prefix[i] ||
                (SildingWindow[j] < prefix[i] && SildingWindow[j] > ma)
            ) {
                ma = SildingWindow[j];
            }
        }
        if (ma >= prefix[i]) {
            if (i === 0) {
                MinPrefix[i] = -1;
            } else {
                MinPrefix[i] = MinPrefix[i - 1];
            }
        } else {
            MinPrefix[i] = prefix[i] - ma;
        }
    }
    let ans = -1;
    for (let i = 0; i <= nums.length; i++) {
        if (MinPrefix[i] > 0 && (ans === -1 || MinPrefix[i] < ans)) {
            ans = MinPrefix[i];
        }
    }
    return ans;
};
