// Stack Overflow Coin Flips Solution:
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

const binarySearch = (arr, item, first = 0, last = null) => {
  if (!last) last = arr.length
  if (last && item > arr[arr.length - 1]) return -1
  if (item < arr[0]) return -1

  let mid = Math.floor((last - first) / 2) + first
  // Base Case:
  if (arr[mid] === item) return mid
  // Recursive Case(s):
  if (arr[mid] > item) return binarySearch(arr, item, first, mid)
  if (arr[mid] < item) return binarySearch(arr, item, mid, last)
}

// console.log(binarySearch([1, 3, 5, 5.5, 7, 9, 11, 13], 5.5))

// Bubble Sort TBC:
const bubbleSort = (arr) => {
  let swapHappened = true

  if (swapHappened) {
    arr.forEach((elem, idx) => {
      swapHappened = false
      let outer = elem
      let oIdx = idx
      arr.forEach((elem, idx) => {
        let inner = elem
        let iIdx = idx
        if (outer < inner) {
          // Single Line Method to Swap Items in Array
          ;[arr[oIdx], arr[iIdx]] = [arr[iIdx], arr[oIdx]]
          swapHappened = true
        }
      })
    })
  }
  return arr
}

// console.log(solution)
// console.log('Time Complexity: Quadratic (Poor)')
// console.log('Space Complexity: Constant (Optimal)')

// Insertion Sort:
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    let prevIdx = i - 1
    while (prevIdx > -1 && arr[prevIdx] > current) {
      arr[prevIdx + 1] = arr[prevIdx]
      prevIdx--
    }
    arr[prevIdx + 1] = current
  }
  return arr
}

// const answer = insertionSort([10, 2, 8, 4, 6, 5, 7, 3, 9, 1])
// console.log(answer)

const insertSort = (arr) => {
  arr.forEach((elem, idx) => {
    idx++
    let current = arr[idx]
    // Placing Operand In Front: Increments Value Before Returning
    let j = --idx
    if (idx === arr.length) return arr

    while (j > -1 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  })
  return arr
}

// const solution = insertSort([10, 2, 8, 4, 6, 5, 7, 3, 9, 1])
// console.log(solution)

// Merge Sort:
const merge = (left, right) => {
  let arr = []
  // console.log(`M: ${left}`)
  // console.log(`M: ${right}`)
  while (left.length && right.length) {
    // console.log(`${left[0]} < ${right[0]}`)
    left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift())
  }
  return [...arr, ...left, ...right]
}

const mergeSort = (arr) => {
  const half = arr.length / 2
  if (arr.length < 2) return arr

  const left = arr.splice(0, half)
  // console.log(`MS Left: ${left}`)
  const right = arr
  // console.log(`MS Right: ${right}`)
  // return mergeSort(left), mergeSort(right)
  return merge(mergeSort(left), mergeSort(right))
}

// const solution = mergeSort([
//   10, 2, 8, 4, 6, 5, 7, 3, 9, 1, 10, 2, 8, 4, 6, 5, 7, 3, 9, 1, 10, 2, 8, 4, 6,
//   5, 7, 3, 9, 1
// ])
// console.log(solution)

// Linked List Demo
class ListNode {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }
}

let sevenNode = new ListNode(777)
let eightNode = new ListNode(888)
sevenNode.next = eightNode

// let list = new LinkedList(sevenNode)
// console.log(list)
// console.log(list.size())

// Linked List: Stack
// class Node {
//   constructor(data, next = null) {
//     this.data = data
//     this.next = next
//   }
// }

class Stack {
  constructor(head = null) {
    this.head = head
  }

  push(data) {
    this.head = new Node(data, this.head)
  }

  pop() {
    let data = this.head.data
    this.head = this.head.next
    return data
  }

  peek() {
    return this.head.data
  }

  isEmpty() {
    return this.head === null
  }
}

// let butter = new Node(111)
// let pancakes = new Stack()
// pancakes.head = butter
// pancakes.push(333)

// Linked List: Queue
class Node {
  constructor(data, next = null, prev = null) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(data) {
    let newNode = new Node(data, null, this.head)
    if (!this.head) {
      this.head = newNode
    } else {
      // this.tail = newNode.prev
      this.tail.next = newNode
      newNode.prev = this.tail
    }
    this.tail = newNode
  }
  dequeue() {
    let data = this.head.data
    this.head = this.head.next
    return data
  }

  isEmpty() {
    return this.head === null
  }

  peek() {
    return isEmpty() ? 'Empty List!' : this.head.data
  }
}

const playList = new Queue()
playList.enqueue('Alan Watts - Just Trust The Universe')
playList.enqueue('The Flashbulb - Snow, Dead of Night')
playList.enqueue("Labrinth & Zendaya - I'm Tired")
// console.log(playList)
