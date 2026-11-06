// 2026.11.06力扣网刷题
// 2747. 统计没有收到请求的服务器数目——资深工程师、数组、哈希表、排序、滑动窗口、第107场双周赛——中等
// 给你一个整数 n ，表示服务器的总数目，再给你一个下标从 0 开始的 二维 整数数组 logs ，其中 logs[i] = [server_id, time] 表示 id 为 server_id 的服务器在 time 时收到了一个请求。
// 同时给你一个整数 x 和一个下标从 0 开始的整数数组 queries  。
// 请你返回一个长度等于 queries.length 的数组 arr ，其中 arr[i] 表示在时间区间[queries[i] - x, queries[i]] 内没有收到请求的服务器数目。
// 注意时间区间是个闭区间。
// 示例 1：
// 输入：n = 3, logs = [[1, 3], [2, 6], [1, 5]], x = 5, queries = [10, 11]
// 输出：[1, 2]
// 解释：
// 对于 queries[0]：id 为 1 和 2 的服务器在区间[5, 10] 内收到了请求，所以只有服务器 3 没有收到请求。
// 对于 queries[1]：id 为 2 的服务器在区间[6, 11] 内收到了请求，所以 id 为 1 和 3 的服务器在这个时间段内没有收到请求。
// 示例 2：
// 输入：n = 3, logs = [[2, 4], [2, 1], [1, 2], [3, 1]], x = 2, queries = [3, 4]
// 输出：[0, 1]
// 解释：
// 对于 queries[0]：区间[1, 3] 内所有服务器都收到了请求。
// 对于 queries[1]：只有 id 为 3 的服务器在区间[2, 4] 内没有收到请求。
// 提示：
// 1 <= n <= 10^5
// 1 <= logs.length <= 10^5
// 1 <= queries.length <= 10^5
// logs[i].length == 2
// 1 <= logs[i][0] <= n
// 1 <= logs[i][1] <= 10^6
// 1 <= x <= 105
// x < queries[i] <= 10^6

/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function (n, logs, x, queries) {
    const len1 = logs.length,
        len2 = queries.length;
    logs.sort((a, b) => a[1] - b[1]);
    const qs = queries.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
    const res = new Array(len2).fill(0);
    const visited = new Array(n + 1).fill(0);
    let l = 0,
        r = 0,
        active = 0;
    for (const q of qs) {
        const begin = q[0] - x,
            end = q[0];
        while (l < len1 && logs[l][1] < begin) {
            const id = logs[l][0];
            if (visited[id] > 0) {
                visited[id]--;
                if (visited[id] === 0) active--;
            }
            l++;
        }
        if (r < l) r = l;
        while (r < len1 && logs[r][1] <= end) {
            const id = logs[r][0];
            if (visited[id] === 0) active++;
            visited[id]++;
            r++;
        }
        res[q[1]] = n - active;
    }
    return res;
};
