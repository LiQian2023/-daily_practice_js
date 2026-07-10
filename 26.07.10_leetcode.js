// 2026.07.10力扣网刷题
// 3982. 最大数字范围的整数之和——中级工程师、第509场周赛——简单
// 给你一个整数数组 nums。
// 一个整数的 数字范围 定义为其 最大 数字与 最小 数字之间的差。
// 例如，5724 的数字范围为 7 - 2 = 5。
// 返回 nums 中所有 数字范围 等于数组中 最大数字范围 的整数之和。
// 示例 1：
// 输入： nums = [5724, 111, 350]
// 输出： 6074
// 解释：
// i	nums[i]	最大数字	最小数字	数字范围
// 0	5724	7	2	5
// 1	111	1	1	0
// 2	350	5	0	5
// 最大数字范围为 5。数字范围为 5 的整数是 5724 和 350，因此答案为 5724 + 350 = 6074。
// 示例 2：
// 输入： nums = [90, 900]
// 输出： 990
// 解释：
// i	nums[i]	最大数字	最小数字	数字范围
// 0	90	9	0	9
// 1	900	9	0	9
// 最大数字范围为 9。两个整数的数字范围都是 9 ，因此答案为 90 + 900 = 990。
// 提示：
// 1 <= nums.length <= 100
// 10 <= nums[i] <= 10^5

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxDigitRange = function (nums) {
    function getMax(num) {
        let a = num % 10,
            b = num % 10;
        while (num > 0) {
            let digit = num % 10;
            a = Math.max(a, digit);
            b = Math.min(b, digit);
            num = Math.floor(num / 10);
        }
        return a - b;
    }
    let ans = 0,
        target = 0;
    for (const num of nums) {
        let tmp = getMax(num);
        if (tmp > target) {
            target = tmp;
            ans = num;
        } else if (tmp === target) {
            ans += num;
        }
    }
    return ans;
};
