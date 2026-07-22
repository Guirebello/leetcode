function isPalindrome(x: number): boolean {
  const y = Number(x.toString().split('').reverse().join(''))

  if (x === y) {
    return true
  }
  return false
}
