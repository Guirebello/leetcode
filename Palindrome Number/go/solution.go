package main

import "fmt"

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	original, reverse := x, 0
	for x > 0 {
		reverse = reverse*10 + x%10
		x /= 10
	}

	return original == reverse
}

func main() {
	cases := []struct {
		n        int
		expected bool
	}{{121, true}, {-121, false}, {10, false}, {0, true}}

	for _, c := range cases {
		got := isPalindrome(c.n)
		status := "ok"
		if got != c.expected {
			status = "FAIL"
		}
		fmt.Printf("[%s] isPalindrome(%d) = %v\n", status, c.n, got)
	}
}
