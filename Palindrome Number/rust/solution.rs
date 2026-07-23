fn is_palindrome(x: i64) -> bool {
    if x < 0 {
        return false;
    }

    let (original, mut n, mut reverse) = (x, x, 0);
    while n > 0 {
        reverse = reverse * 10 + n % 10;
        n /= 10;
    }

    original == reverse
}

fn main() {
    for (n, expected) in [(121, true), (-121, false), (10, false), (0, true)] {
        let got = is_palindrome(n);
        let status = if got == expected { "ok" } else { "FAIL" };
        println!("[{status}] is_palindrome({n}) = {got}");
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn examples() {
        assert!(is_palindrome(121));
        assert!(!is_palindrome(-121));
        assert!(!is_palindrome(10));
        assert!(is_palindrome(0));
    }
}
