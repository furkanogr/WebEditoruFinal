
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    var ret = []; 
    if(!nums || nums.length<3) return ret;
  
    nums = nums.sort(function(a,b){return a-b;});
  
    for(var y=0;y<nums.length-2;y++) {
      if(y==0 || nums[y]>nums[y-1]) {
        var j = y+1;
        var k = nums.length-1;
  
        while(j<k) {
          var sum = nums[y]+nums[j]+nums[k];
          if(sum==0) {
            ret.push([nums[y],nums[j],nums[k]]);
            j++;
            k--;
               
            while(j<k && nums[j]==nums[j-1])
              j++;
  
            while(j<k && nums[k]==nums[k+1])
              k--;                
          }
  
          else if(sum < 0) {
            j++;
          }
          else {
            k--;
          }
        }
      }
    }
  
    return ret;
  }