// 2026.09.19力扣网刷题
// 1401. 圆和矩形是否有重叠——资深工程师、几何、数学、第23场双周赛——中等
// 给你一个以(radius, xCenter, yCenter) 表示的圆和一个与坐标轴平行的矩形(x1, y1, x2, y2) ，其中(x1, y1) 是矩形左下角的坐标，而(x2, y2) 是右上角的坐标。
// 如果圆和矩形有重叠的部分，请你返回 true ，否则返回 false 。
// 换句话说，请你检测是否 存在 点(xi, yi) ，它既在圆上也在矩形上（两者都包括点落在边界上的情况）。
// 示例 1 ：
// 输入：radius = 1, xCenter = 0, yCenter = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1
// 输出：true
// 解释：圆和矩形存在公共点(1, 0) 。
// 示例 2 ：
// 输入：radius = 1, xCenter = 1, yCenter = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1
// 输出：false
// 示例 3 ：
// 输入：radius = 1, xCenter = 0, yCenter = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1
// 输出：true
// 提示：
// 1 <= radius <= 2000
// - 10^4 <= xCenter, yCenter <= 10^4
// - 10^4 <= x1 < x2 <= 10^4
// - 10^4 <= y1 < y2 <= 10^4

/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
    const px = x1 > xCenter ? x1 : x2 < xCenter ? x2 : xCenter;
    const py = y1 > yCenter ? y1 : y2 < yCenter ? y2 : yCenter;
    return (
        (px - xCenter) * (px - xCenter) + (py - yCenter) * (py - yCenter) <=
        radius * radius
    );
};
