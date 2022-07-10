var moveZeros = function (nums) {
  return nums.filter(x => x !== 0).concat(nums.filter(x => x === 0))
};
