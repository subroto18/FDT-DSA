// 2️⃣ Find Missing Number (1 to N)
// 📝 Problem: Find the missing number in an array of 1 to N.

// const arr = [3, 0, 1];
// // Output: 2 (because 2 is missing)

(function () {
  const missingEle = (arr) => {
    arr.sort();

    let missing = [];

    let start = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== start) {
        missing.push(start);
        break;
      }
      start++;
    }
    return missing;
  };

  let ans = missingEle([1, 2, 3, 4, 5, 6, 8, 9]);
})();
