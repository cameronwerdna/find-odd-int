function findOdd(A) {
    let charMap = {}
    
    for (let char of A) {
      charMap[char] = charMap[char] + 1 || 1
    }
    
    for (let char in charMap) {
      if (charMap[char] % 2 !== 0) {
        return Number(char)
      }
    }
  }


console.log(findOdd([1,1,2])) // -> 2
console.log(findOdd([1,2,3,4,1,2,3,4,5])) // -> 5
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])) // -> 4