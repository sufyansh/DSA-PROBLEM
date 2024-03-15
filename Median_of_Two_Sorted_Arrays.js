/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    m = nums1.length;
    n= nums2.length;
    res = [];
   med = m+n;
   for (let i=0; i<med ; i++){
    if(i<m){
res[i]= nums1[i];
    } else{
        
res[i]= nums2[i-m];
    }
    

   }
const total = res.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total,med);
  return total/med;
};
findMedianSortedArrays([1,3,2,5,6],[2,4,5,6]);
