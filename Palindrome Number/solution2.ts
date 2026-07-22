function isPalindrome(x: number): boolean {
  let original = x
  let reverse = 0

  while (x > 0) {
    let digit = x % 10
    reverse = reverse * 10 + digit
    x = Math.floor(x / 10) // Remove last digit
  }

  return original === reverse
}
