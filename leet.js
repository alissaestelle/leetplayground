// #1920
// Solve Time (No Google/Hints): 1.5 Days
const buildArray = (nums) => {
  let ans = nums.map((num, idx) => {
    return nums[nums[idx]]
  })
  return ans
}

// let solution = buildArray([5, 0, 1, 2, 3, 4])
// console.log(`Solution: ${solution}`)

// #1929 Solve Time (No Google/Hints): 1hr
const getConcat = (nums) => {
  let ans = [...nums]

  nums.map((num) => {
    return ans.push(num)
  })

  return ans
}

// let solution = getConcat([1, 3, 2, 1])
// console.log(`Solution: ${solution}`)

// #1480 Solve Time (No Google/Hints): 30mins
const runningSum = (nums) => {
  let runSum = nums.map((num, idx) => {
    return idx === 0 ? nums[idx] : (nums[idx] += nums[idx - 1])
  })
  return runSum
}

// let solution = runningSum([3, 1, 2, 10, 1])
// console.log(`Solution: ${solution}`)

// #1672 Solve Time (Mark Assist w/ for Loop): 4hrs
const maxWealth = (accounts) => {
  let max = 0
  accounts.forEach((account) => {
    let sum = account.reduce((acc, elem) => {
      return acc + elem
    }, 0)
    if (sum > max) max = sum
  })
  return max
}

// let solution = maxWealth([
//   [2, 8, 7],
//   [7, 1, 3],
//   [1, 9, 5]
// ])
// console.log(`Solution: ${solution}`)
