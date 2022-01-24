// /*
// * 题目链接： https://leetcode-cn.com/problems/intersection-of-two-arrays/
// * 描述：给定两个数组，编写一个函数来计算它们的交集。
// * */

/*
* 题目链接：https://leetcode-cn.com/problems/intersection-of-two-arrays/
* 描述：给定两个数组，编写一个函数来计算它们的交集。
* 示例：
*   输入：nums1 = [1,2,2,1], nums2 = [2,2]
    输出：[2]

    输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    输出：[9,4]
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let p1 = 0, p2 = 0;
    let len1 = nums1.length, len2 = nums2.length;
    let res = [];
    while(p1 < len1 && p2 < len2) {
        if (nums1[p1] === nums2[p2]) {
            if (res.length === 0 || nums1[p1] !== res[res.length - 1]) {
                res.push(nums1[p1]);
            }
            p1++;
            p2++;
        } else if (nums1[p1] > nums2[p2]) {
            p2++;
        } else {
            p1++;
        }
    }
    return res;
};
let nums1 = [4,9,5], nums2 = [9,4,9,8,4]
console.log(intersection(nums1, nums2));
