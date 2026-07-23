// function romanToInt(s: string): number {
//   const romanMap = new Map([
//     ['I', 1],
//     ['V', 5],
//     ['X', 10],
//     ['L', 50],
//     ['C', 100],
//     ['D', 500],
//     ['M', 1000],
//   ])
//   const romanArray = s.split('')
//   const romanToNumberArray = romanArray.map((n) => romanMap.get(n) ?? 0)
//   const result = romanToNumberArray.reduce((acc, n) => {
//     return acc + n
//   }, 0)
//   return result
// }

function romanToInt(s: string): number {
  const romanMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])
  const romanArray = s.split('')

  // IV and IX (4, 9)
  // XL and XC (40, 90)
  // CD and CM (400, 900)
  let auxArray = []
  for (let i = 0; i < romanArray.length; i++) {
    if (i < romanArray.length) {
      if (romanArray[i] == 'I' && romanArray[i+1] == 'V') {

      }
      if (romanArray[i] == 'I' && romanArray[i+1] == 'X') {

      }
    }
  }

  const result = romanToNumberArray.reduce((acc, n) => {
    return acc + n
  }, 0)
  return result
}
