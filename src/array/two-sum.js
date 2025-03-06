// 1️⃣ Two Sum
// 📝 Problem: Find two numbers in the array that add up to a target.

// const nums = [2, 7, 11, 15];
// const target = 9;
// // Output: [0, 1] (since nums[0] + nums[1] = 9)

(function () {
  // time complexcity (n2)
  // space complexcity n(1)

  //   const twoSum = (arr, target) => {
  //     for (let i = 0; i < arr.length - 1; i++) {
  //       for (let j = 1; j < arr.length; j++) {
  //         if (arr[i] + arr[j] == target) {
  //           return [i, j];
  //         }
  //       }
  //     }

  //     return [-1, -1];
  //   };

  const twoSum = (arr, target) => {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
      let targetedEle = target - arr[i];

      if (obj[targetedEle] || obj[targetedEle] == 0) {
        return [obj[targetedEle], i];
      } else {
        obj[arr[i]] = i;
      }
    }

    return [-1, -1];
  };

  let ans = twoSum([2, 7, 11, 15], 18);
})();
