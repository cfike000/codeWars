function longestSubstringOf(string) {
  let res = 0, sub = "";
  for (const c of string) {
    sub = sub.slice(sub.indexOf(c) + 1) + c;
    if (sub.length > res) res = sub.length;
  }
  return res;
}
