// 2026.05.21力扣网刷题
// 面试题 05.07.配对交换——位运算——简单
// 配对交换。编写程序，交换某个整数的奇数位和偶数位，尽量使用较少的指令（也就是说，位 0 与位 1 交换，位 2 与位 3 交换，以此类推）。
// 示例 1：
// 输入：num = 2（或者 0b10）
// 输出：1(或者 0b01)
// 示例 2：
// 输入：num = 3
// 输出：3
// 提示 :
// num 的范围在[0, 2^30 - 1]之间，不会发生整数溢出。

/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) {
    let odd = num & 0xaaaaaaaa,
        even = num & 0x55555555;
    return (odd >> 1) ^ (even << 1);
};

// 2026.05.21力扣网刷题
// 5579. 增加模数——快速幂——简单
// 给定 H 对非负整数数对 (Ai,Bi) 和一个正整数 M。
// 请你计算并输出 (AB11+AB22+…+ABHH)modM。
// 输入格式
// 第一行包含整数 T，表示共有 T组测试数据。
// 每组数据第一行包含整数 M。
// 第二行包含整数 H。
// 接下来 H 行，每行包含两个整数 Ai,Bi。
// 输出格式
// 每组数据输出一行结果。
// 数据范围
// 1≤T≤100,
// 1≤M≤45000,
// 1≤H≤45000,
// 0≤Ai,Bi≤10^7,
// Ai和 Bi不同时为 0。
// 输入样例：
// 3
// 16
// 4
// 2 3
// 3 4
// 4 5
// 5 6
// 36123
// 1
// 2374859 3029382
// 17
// 1
// 3 18132
// 输出样例：
// 2
// 13195
// 13

function quickPow(a, b, m) {
    let res = 1 % m;
    a = a % m;
    while (b > 0) {
        if (b & 1) res = (res * a) % m;
        a = (a * a) % m;
        b >>= 1;
    }
    return res;
}
function main() {
    const fs = require("fs");
    const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
    let idx = 0;
    const T = parseInt(input[idx++]);
    for (let t = 0; t < T; t++) {
        const M = parseInt(input[idx++]);
        const H = parseInt(input[idx++]);
        let sum = 0;
        for (let i = 0; i < H; i++) {
            const A = parseInt(input[idx++]);
            const B = parseInt(input[idx++]);
            sum = (sum + quickPow(A, B, M)) % M;
        }
        console.log(sum);
    }
}
main();
