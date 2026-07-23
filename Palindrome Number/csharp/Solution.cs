static bool IsPalindrome(int x)
{
    if (x < 0) return false;
    int original = x;
    long reverse = 0;
    while (x > 0)
    {
        reverse = reverse * 10 + x % 10;
        x /= 10;
    }

    return original == reverse;
}

var cases = new (int n, bool expected)[] { (121, true), (-121, false), (10, false), (0, true) };
foreach (var (n, expected) in cases)
{
    var got = IsPalindrome(n);
    var status = got == expected ? "ok" : "FAIL";
    Console.WriteLine($"[{status}] IsPalindrome({n}) = {got}");
}
