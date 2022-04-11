function  getRandomArray(len) {
    const array = [];
    while (len >= 0) {
        array.push(Math.floor(Math.random() * 10000));
        len--;
    }
    return array;
}

const array = getRandomArray(200);

// 分别克隆，防止修改到同一个数组
const myOriginArray = array.slice();
const sortFunOriginArray = array.slice();

const sortFunSortedArray = sortFunOriginArray.sort((a, b) => a - b);

// 增加对数器
exports.correctCheck = function(func) {
    const mySortedArray = func(myOriginArray);
    for (let i = 0, len = array.length; i < len; i++) {
        if (mySortedArray[i] !== sortFunSortedArray[i]) {
            return false;
        }
    }
    return true;
}
