// 2026.10.21力扣网刷题
// 3863. 将一个字符串排序的最小操作次数——资深工程师、字符串、第492场周赛——重点
// 给你一个由小写英文字母组成的字符串 s。
// 在一次操作中，你可以选择 s 的任意 子字符串（但 不能 是整个字符串），并将其按 非降序字母顺序 进行 排序。
// 返回使 s 按 非降序 排列所需的 最小 操作次数。如果无法做到，则返回 - 1。
// 示例 1：
// 输入： s = "dog"
// 输出： 1
// 解释：
// 将子字符串 "og" 排序为 "go"。
// 现在，s = "dgo"，已按升序排列。因此，答案是 1。
// 示例 2：
// 输入： s = "card"
// 输出： 2
// 解释：
// 将子字符串 "car" 排序为 "acr"，得到 s = "acrd"。
// 将子字符串 "rd" 排序为 "dr"，得到 s = "acdr"，已按升序排列。因此，答案是 2。
// 示例 3：
// 输入： s = "gf"
// 输出： - 1
// 解释：
// 在给定提示下，无法对 s 进行排序。因此，答案是 - 1。
// 提示：
// 1 <= s.length <= 10^5
// s 仅由小写英文字母组成。

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let ans = 0,
        n = s.length,
        mi = s[0],
        ma = s[0];
    for (let i = 1; i < n; i++) {
        if (s[i] < s[i - 1]) {
            ans = 1;
        }
        if (s[i] < mi) mi = s[i];
        else if (s[i] > ma) ma = s[i];
    }
    if (ans) {
        if (n === 2) ans = -1;
        else {
            if (s[0] !== mi && s[n - 1] !== ma) {
                let l = 1,
                    r = 1;
                for (let i = 0; i < n; i++) {
                    if (0 <= i && i < n - 1 && s[i] === mi) {
                        l = 0;
                        break;
                    } else if (1 <= i && i < n && s[i] === ma) {
                        r = 0;
                        break;
                    }
                }
                ans += l + r;
            }
        }
    }
    return ans;
};
