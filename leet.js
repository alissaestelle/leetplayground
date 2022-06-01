// Time it Took to Solve (No Google/Hints): 1.5 Days
const buildArray = (nums) => {
  let ans = nums.map((num, idx) => {
    return nums[nums[idx]]
  })
  return ans
}

let solution = buildArray([5, 0, 1, 2, 3, 4])
console.log(solution)
