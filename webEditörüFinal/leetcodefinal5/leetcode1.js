
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    var index = Math.floor((end - start) / 2) + start;
    
    if (target > nums[nums.length-1]) {
        index = nums.length;
    }
    else {
        while (start < end) {
            var value = nums[index];
            
            if (value === target) {
                result = index;
                break;
            }
            else if (target < value) {              
                end = index;
            }
            else {       
                start = index + 1;
            }
            
            index = Math.floor((end - start) / 2) + start;
        }
    }
    
    return index;
};