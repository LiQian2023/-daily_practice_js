// 2026.04.23力扣网刷题
// 2615. 等值距离和——高级工程师、数组、哈希表、前缀和、第340场周赛——简单
// 给你一个下标从 0 开始的整数数组 nums 。现有一个长度等于 nums.length 的数组 arr 。对于满足 nums[j] == nums[i] 且 j != i 的所有 j ，arr[i] 等于所有 | i - j | 之和。如果不存在这样的 j ，则令 arr[i] 等于 0 。
// 返回数组 arr 。
// 示例 1：
// 输入：nums = [1, 3, 1, 1, 2]
// 输出：[5, 0, 3, 4, 0]
// 解释：
// i = 0 ，nums[0] == nums[2] 且 nums[0] == nums[3] 。因此，arr[0] = | 0 - 2 | +| 0 - 3 | = 5 。
// i = 1 ，arr[1] = 0 因为不存在值等于 3 的其他下标。
// i = 2 ，nums[2] == nums[0] 且 nums[2] == nums[3] 。因此，arr[2] = | 2 - 0 | +| 2 - 3 | = 3 。
// i = 3 ，nums[3] == nums[0] 且 nums[3] == nums[2] 。因此，arr[3] = | 3 - 0 | +| 3 - 2 | = 4 。
// i = 4 ，arr[4] = 0 因为不存在值等于 2 的其他下标。
// 示例 2：
// 输入：nums = [0, 5, 3]
// 输出：[0, 0, 0]
// 解释：因为 nums 中的元素互不相同，对于所有 i ，都有 arr[i] = 0 。
// 提示：
// 1 <= nums.length <= 10^5
// 0 <= nums[i] <= 10^9

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], []);
        }
        map.get(nums[i]).push(i);
    }
    let arr = new Array(nums.length).fill(0);
    for (let [key, indices] of map) {
        if (indices.length > 1) {
            let prefixSum = new Array(indices.length + 1).fill(0);
            for (let i = 0; i < indices.length; i++) {
                prefixSum[i + 1] = prefixSum[i] + indices[i];
            }
            for (let i = 0; i < indices.length; i++) {
                let leftSum = prefixSum[i];
                let rightSum = prefixSum[indices.length] - prefixSum[i + 1];
                arr[indices[i]] =
                    i * indices[i] -
                    leftSum +
                    (rightSum - (indices.length - i - 1) * indices[i]);
            }
        }
    }
    return arr;
};
