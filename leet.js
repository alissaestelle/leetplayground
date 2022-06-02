// #1920
// Solve Time (No Google/Hints): 1.5 Days
const buildArray = (nums) => {
  let ans = nums.map((num, idx) => {
    return nums[nums[idx]]
  })
  return ans
}

// let solution = buildArray([5, 0, 1, 2, 3, 4])

// #1929 Solve Time (No Google/Hints): 1hr
const getConcat = (nums) => {
  let ans = [...nums]

  nums.map((num) => {
    ans.push(num)
    return nums
  })
  return ans
}

let solution = getConcat([1, 3, 2, 1])
