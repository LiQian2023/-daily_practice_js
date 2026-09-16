// 2026.09.16力扣网刷题
// 4048. 统计等间距出现整数数目 I——中级工程师、第191场双周赛——简单
// 给你一个整数数组 nums。
// 如果一个整数 x 满足以下条件，则被称为 特别 的：
// x 在 nums 中 恰好出现三次。
// x 的 所有 三次出现，在 nums 中都是 等间隔 的。换句话说，如果 x 的所有出现位置的下标为 i1 < i2 < i3，那么 i2 - i1 = i3 - i2。
// 返回 nums 中 不同 特别整数的数量。
// 示例 1:
// 输入: nums = [1, 8, 1, 5, 1, 5, 8, 5]
// 输出 : 2
// 解释 :
// 1 是特别的，因为它恰好出现三次，且出现的等间隔下标为 0、2 和 4。
// 5 是特别的，因为它恰好出现三次，且出现的等间隔下标为 3、5 和 7。
// 8 不是特别的，因为它只出现了两次。
// 因此，答案是 2。
// 示例 2:
// 输入: nums = [8, 8, 8, 8]
// 输出 : 0
// 解释 :
// 8 不是特别的，因为它出现的次数不是恰好三次。因此，答案是 0。
// 示例 3 :
// 输入 : nums = [8, 6, 6, 8, 8]
// 输出 : 0
// 解释 :
// 8 出现的下标为 0、3 和 4，这些下标不是等间隔的。6 只出现了两次。因此，没有整数是特别的。
// 提示:
// 3 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function (nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], [1]);
        } else {
            map.get(nums[i])[0]++;
        }
        if (map.get(nums[i])[0] <= 3) {
            map.get(nums[i]).push(i);
        }
    }
    let ans = 0;
    for (const [key, value] of map) {
        if (value[0] === 3) {
            if (value[2] - value[1] === value[3] - value[2]) {
                ans++;
            }
        }
    }
    return ans;
};
