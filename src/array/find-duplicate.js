// 8️⃣ Find Duplicate in an Array
// 📝 Problem: Find duplicate numbers in an array.

// const arr = [1, 3, 4, 2, 2];
// Output: 2

(function () {
  const findDuplicate = (arr) => {
    let unique = new Set();
    let duplicate = [];

    for (let i = 0; i < arr.length; i++) {
      if (unique.has(arr[i])) {
        duplicate.push(arr[i]);
      } else {
        unique.add(arr[i]);
      }
    }
    return duplicate;
  };

  let ans = findDuplicate([1, 3, 4, 2, 2, 2]);
})();
