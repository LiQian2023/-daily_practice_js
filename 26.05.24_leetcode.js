// 2026.05.24力扣网刷题
// 3936. 将 0 移到末尾的最少交换次数——中级工程师、第183场双周赛——简单
// 给你一个整数数组 nums 。
// 在一步操作中，你可以选择任意两个 不同 的下标 i 和 j 并交换 nums[i] 和 nums[j] 。
// 返回将所有 0 移动到数组末尾所需的 最少 操作次数。
// 示例 1：
// 输入： nums = [0, 1, 0, 3, 12]
// 输出： 2
// 解释：
// 我们执行以下交换操作：
// 交换 nums[0] 和 nums[3] ，得到 nums = [3, 1, 0, 0, 12] 。
// 交换 nums[2] 和 nums[4] ，得到 nums = [3, 1, 12, 0, 0] 。
// 因此，答案是 2 。
// 示例 2：
// 输入： nums = [0, 1, 0, 2]
// 输出： 1
// 解释：
// 我们执行以下交换操作：
// 交换 nums[0] 和 nums[3] ，得到 nums = [2, 1, 0, 0] 。
// 因此，答案是 1 。
// 示例 3：
// 输入： nums = [1, 2, 0]
// 输出： 0
// 解释：
// 数组已经满足条件。因此，不需要任何交换操作。
// 提示：
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function (nums) {
    const n = nums.length;
    let l = 0,
        r = n - 1,
        ans = 0;
    while (l < r) {
        if (nums[r] !== 0) {
            while (l < r && nums[l] !== 0) {
                l++;
            }
            if (l < r) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                ans++;
            }
        }
        r--;
    }
    return ans;
};

// 2026.05.24力扣网刷题
// 92. 递归实现指数型枚举——递归——简单
// 从 1∼n 这 n 个整数中随机选取任意多个，输出所有可能的选择方案。
// 输入格式
// 输入一个整数 n。
// 输出格式
// 每行输出一种方案。
// 同一行内的数必须升序排列，相邻两个数用恰好 1
// 个空格隔开。
// 对于没有选任何数的方案，输出空行。
// 本题有自定义校验器（SPJ），各行（不同方案）之间的顺序任意。
// 数据范围
// 1≤n≤15
// 输入样例：
// 3
// 输出样例：
// 3
// 2
// 2 3
// 1
// 1 3
// 1 2
// 1 2 3

function dfs(n, path, pi) {
    if (n === 0) {
        if (pi === 0) {
            console.log("");
        } else {
            outPut = [...path].reverse().join(" ");
            console.log(outPut);
        }
        return;
    }
    path.push(n);
    dfs(n - 1, path, pi + 1);
    path.pop();
    dfs(n - 1, path, pi);
}

function main() {
    const fs = require("fs");
    const input = fs.readFileSync(0, "utf-8").trim().split("\n");
    const n = parseInt(input[0]);
    dfs(n, [], 0);
}
main();
