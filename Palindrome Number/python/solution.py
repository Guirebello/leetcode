def is_palindrome(x: int) -> bool:
    if x < 0:
        return False

    original, reverse = x, 0
    while x > 0:
        reverse = reverse * 10 + x % 10
        x //= 10

    return original == reverse


if __name__ == "__main__":
    cases = [(121, True), (-121, False), (10, False), (0, True)]
    for n, expected in cases:
        got = is_palindrome(n)
        status = "ok" if got == expected else "FAIL"
        print(f"[{status}] is_palindrome({n}) = {got}")
