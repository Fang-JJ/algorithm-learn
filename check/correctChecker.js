function  getRandomArray(len) {
    const array = [];
    while (len >= 0) {
        array.push(Math.floor(Math.random() * 10000));
        len--;
    }
    return array;
}

const array = getRandomArray(200);
const myOriginArray = Object.assign([], array);
const sortFunOriginArray = Object.assign([], array);


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
