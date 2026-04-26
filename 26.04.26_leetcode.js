// 2026.04.26力扣网刷题
// 3912. 数组中的有效元素——第499场周赛——简单
// 给你一个整数数组 nums。
// 如果元素 nums[i] 满足以下 至少一个 条件，则认为它是 有效 元素：
// 它 严格大于 其左侧的所有元素。
// 它 严格大于 其右侧的所有元素。
// 第一个元素和最后一个元素始终有效。
// 返回所有有效元素组成的数组，顺序与它们在 nums 中出现的顺序相同。
// 示例 1：
// 输入： nums = [1, 2, 4, 2, 3, 2]
// 输出：[1, 2, 4, 3, 2]
// 解释：
// nums[0] 和 nums[5] 始终有效。
// nums[1] 和 nums[2] 都严格大于其左侧的所有元素。
// nums[4] 严格大于其右侧的所有元素。
// 因此，答案为[1, 2, 4, 3, 2]。
// 示例 2：
// 输入： nums = [5, 5, 5, 5]
// 输出：[5, 5]
// 解释：
// 第一个元素和最后一个元素始终有效。
// 其他元素既不严格大于其左侧的所有元素，也不严格大于其右侧的所有元素。
// 因此，答案为[5, 5]。
// 示例 3：
// 输入： nums = [1]
// 输出：[1]
// 解释：
// 由于数组中只有一个元素，它始终有效。因此，答案为[1]。
// 提示：
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findValidElements = function (nums) {
    const n = nums.length;
    const left = [];
    let key_l = 0;
    const right = [];
    let key_r = n - 1;
    for (let l = 0, r = n - 1; l < n && r >= 0; l++, r--) {
        if (l === 0 || nums[l] > nums[key_l]) {
            left.push(l);
            key_l = l;
        }
        if (r === n - 1 || nums[r] > nums[key_r]) {
            right.splice(0, 0, r);
            key_r = r;
        }
    }
    const set = new Set(left.concat(right));
    const ans = [];
    for (const i of set) {
        ans.push(nums[i]);
    }
    return ans;
};
