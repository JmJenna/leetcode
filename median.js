    // 1. need to merge (num1, num2) -> make 1 array 
    // 2. sort numbers
    // 3. find middle number 
    // 4. divide middle numbers
    
function findMedianSortedArrays(nums1, nums2) {
   let nums = nums1.concat(nums2);
   let arr = nums.sort(function(a, b){return a-b});
   let mid = Math.floor(arr.length / 2)
   return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;  
};

module.exports = findMedianSortedArrays;