Este repositório compila minhas soluções de Leetcode

Cada exercício é uma pasta. Dentro dela, o TypeScript fica na raiz e as
outras linguagens ficam em subpastas (`python/`, `go/`, `rust/`, `csharp/`).

```
Palindrome Number/
  solution1.ts        # TypeScript (raiz)
  solution2.ts
  python/solution.py
  go/solution.go
  rust/solution.rs
  csharp/Solution.cs
  csharp/Palindrome.csproj
```

## Como rodar e testar cada linguagem

Os comandos abaixo assumem que você está **dentro da pasta do exercício**
(ex.: `cd "Palindrome Number"`).

### TypeScript
```bash
tsx solution2.ts          # roda direto (ou: npx tsx solution2.ts)
```

### Python
```bash
python3 python/solution.py
```

### Go
```bash
go run go/solution.go
```

### Rust
```bash
# rodar
rustc rust/solution.rs -o /tmp/sol && /tmp/sol

# testar (executa os #[test])
rustc --test rust/solution.rs -o /tmp/sol_test && /tmp/sol_test
```

### C# / .NET
Precisa de um `.csproj` (não roda arquivo solto), por isso a subpasta
`csharp/` é um projeto de console.
```bash
dotnet run --project csharp
```

> Cada solução tem um pequeno bloco de casos de teste no próprio arquivo
> que imprime `[ok]` / `[FAIL]`, então rodar já valida os exemplos.
