// 折半插入排序
/*
* 思路：
* 首先每次都将需要排序的值保存为target，
* 排序的时候每次都要通过二分查找查询插入的位置low；
* 找到插入的位置之后再进行移动，移动到low之后将target赋值给low的index位置；
*
* 时间复杂度：
*   要遍历整个数组，所以n；每一遍都要进行二分查找，二分查找的时间复杂度是logn，所以相乘得到的就是nlogn;
*
* 空间复杂度：
*   需要存储的是4个变量，low，high，center，target；
*   所以空间花销是常数级别的O(1);
* */
function insertSortBinary(arr) {
    // 长度短于2，直接返回
    if (arr.length < 2) {
        return arr;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] <= arr[i]) {
            continue;
        }
        // 拷⻉插⼊对象元素
        let target = arr[i];
        // 折半查找
        let low = 0;
        let high = i - 1;
        let center = 0;
        while (low <= high) {
            center = Math.floor((low + high) / 2);
            if (target < arr[center]) {
                high = center - 1;
            } else {
                low = center + 1;
            }
        }
        // 移动
        for (let j = i; j > low; j--) {
            arr[j] = arr[j - 1];
        }
        // 插⼊
        arr[low] = target;
    }
    return arr;
}
console.log(insertSortBinary([1,9,8,3,12,1000,-1,-100,100,67]));
