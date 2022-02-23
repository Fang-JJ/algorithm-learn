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
