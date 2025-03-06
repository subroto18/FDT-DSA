// 4️⃣ Check Anagrams
// 📝 Problem: Check if two strings are anagrams.

// js
// Copy
// Edit
// const str1 = "listen";
// const str2 = "silent";
// // Output: true (since both have the same characters)

(function () {
  const anagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    let count = str1?.split("").reduce((acc, curr) => {
      acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
      return acc;
    }, {});

    for (let char of str2) {
      if (!count[char]) return false; // If a character is missing or count goes negative
      count[char]--;
    }
    return true;
  };

  let ans = anagram("listen", "silent");
})();
