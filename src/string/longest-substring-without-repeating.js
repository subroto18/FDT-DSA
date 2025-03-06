// 6️⃣ Longest Substring Without Repeating Characters
// 📝 Problem: Find the length of the longest substring without repeating characters.

// const s = "abcabcbb";
// // Output: 3 (substring: "abc")

(function () {
  const construc = (str) => {
    let max = 0;
    let left = 0;
    let unique = new Set();

    for (let right = 0; right < str.length; right++) {
      while (unique.has(str[right])) {
        unique.delete(str[left]);
        left++;
      }

      unique.add(str[right]);
      max = Math.max(max, right - left + 1);
    }

    return max;
  };

  let ans = construc("pwwkew");
})();
