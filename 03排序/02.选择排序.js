/*
* 选择排序思路：
* 找到数组中的最小数，让它和数组中的第0位交换；
* 找到数组中第二小的数，让它和数组中的第1位交换，
* 如此循环下去.....
*
* 对于长度为n的数组，选择排序需要N^2/2次比较和N次交换
 */
const { correctCheck }  = require('../check/correctChecker');

function selectSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[min], arr[i]] = [arr[i], arr[min]];
    }
    return arr;
}

console.log(correctCheck(selectSort));



