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
    : arr[idx]

  return fizzBuzz(n, arr, idx + 1)
}

// console.log(fizzBuzz(15))

// Prime Numbers in 2D Array:
let table = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.table(table)

const transpose = (matrix) => {
  // Destructured Array:
  let [row] = matrix
  let column
  let newArr
  row.map((value, idx) => {
    column = idx
    console.log(value)
    newArr = matrix.map((elem, idx) => {
      return elem[column]
    })
    return newArr
  })
  return newArr
}

console.log(transpose(table))

// const findPrime = (arr) => {
//   const str = ''
//   const l = arr.length
//   let totals = {}
//   let charI = 64
//   let charJ = charI + 1

//   arr.forEach((row, idx) => {
//     let outer = idx
//     ++charI
//     ++charJ
//     let i = String.fromCharCode(charI)
//     let j = String.fromCharCode(charJ)

//     let h2 = `${row[0]}` + `${row[1]}`
//     totals[i] = parseInt(h2)
//     ++charI

//     let h3 = `${h2}` + `${row[2]}`
//     totals[j] = parseInt(h3)
//     ++charJ

//     arr.forEach((elem, idx) => {
//       let inner = idx
//       if (outer === inner) return false
//       let v2 = `${row[0]}` + `${elem[0]}`
//       console.log(elem)
//       console.log(`V2: ${v2}`)
//       console.log(totals)
//     })
//   })
//   return arr
// }

// console.log(findPrime(table))
// console.log(`First: ${row}`)
// console.log(outer)
// console.log(h2)
// console.log(h3)
// console.log(inner)

// Optimize Box Weights
// Intersection of A & B is null.
// Sum of A & B are equal to original array.
// Number of elems in subset A is minimal.
// The sum of A's weights is greater than the sum of B's weights.

// Ex: n = 5; arr = [3, 7, 5, 6, 2]
// Two subsets in arr that satisfy the conditions for A are: [5, 7] and [6, 7]:
// A is minimal (size 2)
// Sum(A) = (5 + 7) = 12 > Sum(B) = (2 + 3 + 6) = 11
// Sum(A) = (6 + 7) = 13 > Sum(B) = (2 + 3 + 5) = 10
// The intersection of A and B is null and their union is equal to arr.
// The subset A where the sum of its weight is maximal is [6, 7]

// Constraints:
// 1 <= n <= 10^5
// 1 <= arr[i] <= 10^5 (where 0 <= i < n)

const minHeaviestSet = (arr) => {
  arr = arr.sort()
  let mid = arr.length
  let a = []
  let b = []
  let c = []
  let i = 0
  let j = arr.length - 1

  while (i <= j) {
    arr[i] >= mid ? a.push(arr[i]) : b.push(arr[i])
    // if (arr[i] === arr[j]) a.pop()
    i++
  }

  a.filter((elem, idx) => {
    let max = 0
    if (idx === a.length - 1) return false
    let sum = a[idx] + a[idx + 1]
    if (sum > max) {
      max = sum
      c[0] = a[idx]
      c[1] = a[idx + 1]
    }
    return c
  })
  return c
}

// console.log(minHeaviestSet([3, 7, 5, 6, 2]))

// Items in Containers
// A string (s) consists of items (*) and compartments (|)
// |*| indicates a closed compartment and |*|* indicates an open one.
// An array (startIndices) containing the first index of each iteration.
// An array (endIndices) containing the last index of each iteration.

// Ex: s = `|**|*|*`
// startIndices = [1, 1]
// endIndices = [5, 6]
// The string has a total of two closed compartments, one with 2 items and one with 1 item.
// The first set ([1, 5]) contains 2 items, so the current item total is 2. The second set ([1, 6]) contains the 2 previous items from the first set, plus 1 item in the second set, so the total number of items is now 3.
// Each successive sum is returned in an array: [2, 3].
