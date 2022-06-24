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

// Bang Operator (!):
// Ex: if (!last) last = arr.length (JS:196)
// Translation: if (!last === true), last = arr.length
// Explanation: If the *opposite* value of last is true, then complete the following code.

// Here, the initial argument for last is null, which inherently equates to false. When this false value reaches the if statement, it passes the conditional because the opposite of false is ... true!

// Note: 0, null, undefined & NaN are inherently falsey but become truthy when combined with a bang operator. Likewise, all numbers other than 0 are inherently truthy but become falsey when combined with a bang operator.

// On the second call, mid replaces null as the value for last. Since mid = 3, it inherently equates to true. When this true value reaches the if statement, it does *not* pass the conditional because the opposite of true is ... false!

// See Recursive Fx Below:

const binarySearch = (arr, item, first = 0, last = null) => {
  if (!last) last = arr.length
  let mid = Math.floor((last - first) / 2) + first
  // Base Case:
  if (arr[mid] === item) return mid
  // Recursive Case(s):
  if (arr[mid] > item) return binarySearch(arr, item, first, mid)
  if (arr[mid] < item) return binarySearch(arr, item, mid, last)
}

// console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 5))

const pathRecursion = (
  arr,
  idx = 0,
  nS = 0,
  eW = 0,
  coord = null,
  answer = null
) => {
  if (!coord) coord = ['0, 0']
  if (!answer) answer = false
  if (idx === arr.length) return answer
  if (answer === true) return answer

  switch (arr[idx].toLowerCase()) {
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
  return pathRecursion(arr, idx + 1, nS, eW, coord, answer)
}

// let arr = 'NESWW'
// arr = arr.split('')
// let solution = pathRecursion(arr)
// console.log(solution)

// Recursion Practice:

function findMax(arr, idx = 0, max = 0) {
  // This function returns the largest number in a given array.
  if (idx === arr.length) return max
  if (arr[idx] > max) max = arr[idx]
  return findMax(arr, idx + 1, max)
}

// console.log(findMax([-9, 17, 4, 45]))

const factorial = (num, count = 1, current = 1) => {
  // This function returns the factorial of a given number.
  if (num === 0) return 1
  if (num < count) return current

  current = current * count
  return factorial(num, count + 1, current)
}

// console.log(factorial(7))

const fibonacci = (n, count = 3, first = 1, second = 1, sum = 1) => {
  if (n < count) return sum
  sum = first + second
  first = second
  second = sum

  return fibonacci(n, count + 1, first, second, sum)
}

// console.log(fibonacci(7))

// const coinFlips = (num, arr = null, count = 1) => {
//   let heads = 'H'
//   let tails = 'T'
//   let total = num * 2
//   let mid = total / 2

//   if (!arr) arr = Array(num * 2).fill('')
//   if (num <= 1) return []
//   if (count > num) return arr

//   count === 1 &&
//     arr.forEach((elem, idx) => {
//       return idx < mid
//         ? (arr[idx] = arr[idx] + heads)
//         : (arr[idx] = arr[idx] + tails)
//     })
//   console.log(arr)

//   switch (count) {
//     case count % 2 === 0:
//       arr.forEach((elem, idx) => {
//         return idx % 2 === 0
//           ? (arr[idx] = arr[idx] + heads)
//           : (arr[idx] = arr[idx] + tails)
//       })
//       break
//     case count > 1 && count % 2 !== 0:
//       arr.forEach((elem, idx) => {
//         return idx % 2 === 0
//           ? (arr[idx] = arr[idx] + tails)
//           : (arr[idx] = arr[idx] + heads)
//       })
//     default:
//       break
//   }
// This function returns an array of all possible outcomes from flipping a coin N times.
// For example, coinFlips(2) would return the following:
// ["HH", "HT", "TH", "TT"]
// H stands for Heads and T stands for tails
// Represent the two outcomes of each flip as "H" or "T"
//   return coinFlips(num, arr, count + 1)
// }

const flipCoins = (num, arr = null, count = 1) => {
  let heads = 'H'
  let tails = 'T'
  let total = num * 2
  let mid = total / 2

  if (!arr) {
    arr = Array(total).fill('')
    arr.forEach((elem, idx) => {
      return idx < mid
        ? (arr[idx] = arr[idx] + heads)
        : (arr[idx] = arr[idx] + tails)
    })
  }

  if (num === 0) return []
  if (count > num) return arr

  if (count % 2 !== 0) {
    arr.forEach((elem, idx) => {
      idx % 2 === 0 ? (arr[idx] += heads) : (arr[idx] += tails)
    })
  }

  if (count % 2 === 0) {
    arr.forEach((elem, idx) => {
      idx % 2 === 0 ? (arr[idx] += tails) : (arr[idx] += heads)
    })
    arr[0] = arr[0].replace(tails, heads)
    arr[mid] = arr[mid].replace(heads, tails)
  }

  return flipCoins(num, arr, count + 1)
}

// console.log(flipCoins(4))

// Stack Overflow Solution:
const getFlips = (n) => {
  const addFlips = (n, result, current) => {
    if (n === 1) {
      result.push(current + 'H')
      result.push(current + 'T')
    } else {
      addFlips(n - 1, result, current + 'H')
      addFlips(n - 1, result, current + 'T')
    }
  }
  let result = []
  addFlips(n, result, '')
  return result
}

// console.log(getFlips(4))

// #412 Solve Time (No Google/Hints): 30mins
const fizzBuzz = (n, arr = [], idx = 0) => {
  if (idx === n) return arr
  arr.push(`${idx + 1}`)
  arr[idx] % 3 === 0 && arr[idx] % 5 === 0
    ? (arr[idx] = 'FizzBuzz')
    : arr[idx] % 3 === 0
    ? (arr[idx] = 'Fizz')
    : arr[idx] % 5 === 0
    ? (arr[idx] = 'Buzz')
    : (arr[idx] = `${arr[idx]}`)

  return fizzBuzz(n, arr, idx + 1)
}

console.log(fizzBuzz(15))
