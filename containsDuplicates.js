/* Problem Link: https://leetcode.com/problems/contains-duplicate/
  
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109 */

var containsDuplicate = function (nums) {
    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }

    return false;
};

/* Explanation:

1. Sorting: 

- The array is sorted in ascending order using Array.prototype.sort. Sorting the array takes O(n log n) time.

2. Linear Scan: 

- After sorting, we perform a single pass through the array, comparing each element to its predecessor. 
  This takes O(n) time.

- If any two consecutive elements are the same, it means there is a duplicate, and the function returns true.

- If the loop completes without finding any duplicates, the function returns false. */
