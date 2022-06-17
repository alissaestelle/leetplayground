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
  let ans = [...nums, ...nums]
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

// #2011 Solve Time (No Google/Hints): 30mins
const opsValue = (operations) => {
  let final = operations.reduce((acc, elem) => {
    let value = 0
    elem.toLowerCase() === 'x++' || elem.toLowerCase() === '++x'
      ? value++
      : value--
    return acc + value
  }, 0)
  return final
}

// let solution = opsValue(['--X', 'X++', '++X'])
// console.log(`Solution: ${solution}`)

// #2114 Solve Time (No Google/Hints): 1.5hrs
const mostWords = (sentences) => {
  let most = 0
  sentences.forEach((sentence, idx) => {
    let words = sentence.split(' ')
    if (words.length >= most) most = words.length
  })
  return most
}
// let solution = mostWords([
//   'I love LeetCode but I also like swimming',
//   'I do too',
//   'I think I like both'
// ])
// console.log(`Solution: ${solution}`)

// ARRAY NOTES
// nums[idx]: console logs the *value* at a specific index
// num/elem: also console logs the value at a specific index
// idx: console logs the index of the value

// #167 Solve Time (No Google/Hints): 1.5 Days
// Note: Passes All Tests in VS Code, but Exceeded Time Limit on LeetCode
const twoSum = (numbers, target) => {
  let addends = []
  numbers.forEach((current, idx) => {
    idx++
    let outer = idx
    numbers.filter((num, idx) => {
      idx++
      if (outer === idx) return false
      // return false: skips the current element/index
      if (addends.length < 2 && current + num === target)
        addends.push(outer, idx)
    })
  })
  return addends
}

let odds = [2, 7, 11, 15]
let zeros = [0, 0, 3, 4]
let negatives = [-1, 0, 2, 5]
let hundreds = [5, 25, 75]

let ansOne = twoSum(odds, 9)
// console.log('Answer One: ')
// console.log(ansOne)

let ansTwo = twoSum(zeros, 0)
// console.log('Answer Two: ')
// console.log(ansTwo)

let ansThree = twoSum(negatives, 1)
// console.log('Answer Three: ')
// console.log(ansThree)

let ansFour = twoSum(hundreds, 100)
// console.log('Answer Four: ')
// console.log(ansFour)

// #167 Optimized Solution (Piero):
const twoPointers = (numbers, target) => {
  let addends = []
  let i = 0
  let j = numbers.length - 1

  while (i < j) {
    if (numbers[i] + numbers[j] === target) addends.push(i + 1, j + 1)
    numbers[i] + numbers[j] < target ? i++ : j--
  }
  return addends
}

// let solution = twoPointers([2, 7, 11, 15], 9)
// console.log(solution)

// #1496 Solve Time (Solution: Mark): 3 Days
const isPathCrossing = (path) => {
  let nS = 0
  let eW = 0
  let coord = ['0, 0']
  let answer = false

  for (let i = 0; i < path.length; i++) {
    switch (path.charAt(i).toLowerCase()) {
      case 'n':
        nS++
        if (coord.includes(`${nS}, ${eW}`)) answer = true
        coord.push(`${nS}, ${eW}`)
        break
      case 's':
        nS--
        if (coord.includes(`${nS}, ${eW}`)) answer = true
        coord.push(`${nS}, ${eW}`)
        break
      case 'e':
        eW++
        if (coord.includes(`${nS}, ${eW}`)) answer = true
        coord.push(`${nS}, ${eW}`)
        break
      case 'w':
        eW--
        if (coord.includes(`${nS}, ${eW}`)) answer = true
        coord.push(`${nS}, ${eW}`)
        break
      default:
        break
    }
  }
  return answer
}

// const solution = isPathCrossing('NESWW')
// console.log(solution)
