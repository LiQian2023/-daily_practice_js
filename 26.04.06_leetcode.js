// 2026.04.06力扣网刷题
// LCR 003. 比特位计数——位运算、动态规划——简单
// 给定一个非负整数 n ，请计算 0 到 n 之间的每个数字的二进制表示中 1 的个数，并输出一个数组。
// 示例 1:
// 输入: n = 2
// 输出 : [0, 1, 1]
// 解释 :
// 0 -- > 0
// 1 -- > 1
// 2 -- > 10
// 示例 2:
// 输入: n = 5
// 输出 : [0, 1, 1, 2, 1, 2]
// 解释 :
// 0 -- > 0
// 1 -- > 1
// 2 -- > 10
// 3 -- > 11
// 4 -- > 100
// 5 -- > 101
// 说明 :
// 0 <= n <= 10^5
// 进阶 :
// 给出时间复杂度为 O(n * sizeof(integer)) 的解答非常容易。但你可以在线性时间 O(n) 内用一趟扫描做到吗？
// 要求算法的空间复杂度为 O(n) 。
// 你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount ）来执行此操作。
// 注意：本题与主站 338 题相同：https://leetcode.cn/problems/counting-bits/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits1 = function (n) {
    function getBin(n) {
        let res = 0;
        while (n) {
            res += n & 1;
            n >>= 1;
        }
        return res;
    }
    ans = [];
    for (let i = 0; i <= n; i++) {
        ans.push(getBin(i));
    }
    return ans;
};

var countBits = function (n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i & (i - 1)] + 1;
    }

    return dp;
};
