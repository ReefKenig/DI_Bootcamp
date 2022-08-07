function isAnagram(str1, str2) {
  str1 = str1.replace(/\s/g, "");
  str2 = str2.replace(/\s/g, "");
  if (str1.length !== str2.length) {
    return false;
  }
  let sorted1 = str1.toLowerCase().split("").sort();
  let sorted2 = str2.toLowerCase().split("").sort();
  return sorted1.join("") === sorted2.join("");
}
