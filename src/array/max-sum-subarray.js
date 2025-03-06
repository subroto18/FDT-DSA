// 7️⃣ Maximum Sum Subarray (Kadane’s Algorithm)
// 📝 Problem: Find the maximum sum of any contiguous subarray.

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// // Output: 6 (subarray: [4, -1, 2, 1])

(function () {
  const SubSubArray = (arr) => {
    let max = arr[0];
    let sum = arr[0];

    for (let i = 0; i < arr.length; i++) {
      sum = Math.max(arr[i], sum + arr[i]);
      max = Math.max(max, sum);
    }

    return max;
  };

  let ans = SubSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
})();
