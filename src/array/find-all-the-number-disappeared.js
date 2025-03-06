// 448. Find All Numbers Disappeared in an Array
// Easy
// Topics
// Companies
// Hint
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

(function () {
  // in place
  //   const construct = (nums) => {
  //     let missingEle = [];

  //     for (let i = 0; i < nums.length; i++) {
  //       let index = Math.abs(nums[i]) - 1; // Convert value to index
  //       nums[index] = -Math.abs(nums[index]); // Mark as visited
  //     }

  //     for (let i = 0; i < nums.length; i++) {
  //       if (nums[i] > 0) {
  //         missingEle.push(i + 1);
  //       }
  //     }

  //     return missingEle;
  //   };

  // using set

  const construct = (nums) => {
    let missingEle = [];

    let unique = new Set(nums);

    for (let i = 1; i <= nums.length; i++) {
      if (!unique.has(i)) {
        missingEle.push(i);
      }
    }
    return missingEle;
  };

  let ans = construct([4, 3, 2, 7, 8, 2, 3, 1]);
})();
