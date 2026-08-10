// 2026.08.10力扣网刷题
// 11. 盛最多水的容器——贪心、数组、双指针——中等
// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是(i, 0) 和(i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。
// 说明：你不能倾斜容器。
// 示例 1：
// 输入：[1, 8, 6, 2, 5, 4, 8, 3, 7]
// 输出：49
// 解释：图中垂直线代表输入数组[1, 8, 6, 2, 5, 4, 8, 3, 7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
// 示例 2：
// 输入：height = [1, 1]
// 输出：1
// 提示：
// n == height.length
// 2 <= n <= 10^5
// 0 <= height[i] <= 10^4

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0,
        r = height.length - 1;
    let area = 0;
    while (l < r) {
        let h = height[l] > height[r] ? height[r] : height[l],
            w = r - l;
        let tmp = h * w;
        area = tmp > area ? tmp : area;
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }
    return area;
};
