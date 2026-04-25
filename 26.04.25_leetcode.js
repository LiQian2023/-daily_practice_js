// 2026.04.25力扣网刷题
// LCR 190. 加密运算——位运算、数学——简单
// 计算机安全专家正在开发一款高度安全的加密通信软件，需要在进行数据传输时对数据进行加密和解密操作。假定 dataA 和 dataB 分别为随机抽样的两次通信的数据量：
// 正数为发送量
// 负数为接受量
// 0 为数据遗失
// 请不使用四则运算符的情况下实现一个函数计算两次通信的数据量之和（三种情况均需被统计），以确保在数据传输过程中的高安全性和保密性。
// 示例 1：
// 输入：dataA = 5, dataB = -1
// 输出：4
// 提示：
// dataA 和 dataB 均可能是负数或 0
// 结果不会溢出 32 位整数

/**
 * @param {number} dataA
 * @param {number} dataB
 * @return {number}
 */
var encryptionCalculate = function (dataA, dataB) {
    for (let i = 0; i < 32 && dataB; i++) {
        let carry = (dataA & dataB) << 1; // 计算进位
        dataA = dataA ^ dataB; // 计算不考虑进位的和
        dataB = carry; // 更新dataB为进位
    }
    return dataA;
};
