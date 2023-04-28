// function twoSum(numbers, target) {
//     const map= new Map();
//     for (let i = 0; i < numbers.length; i++) {
//         if (map.has(target - numbers[i])) {
//           return  [i, map.get(target - numbers[i])]
//         }else {
//           map.set(numbers[i], i)
//         }
        
//     }
// }

function twoSum(numbers, target) {
   let comps = {}

   for (let i = 0; i < numbers.length; i++) {
    let comp = target - numbers[i]
        if (comps[comp] !== undefined) {
           return [comps[comp], i]
        }
        comps[numbers[i]] = i
   }
}

function twoSum(numbers, target) {
   for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
            return [i, j]
        }
    }
   }
}
  
    console.log(twoSum([1, 2, 3, 5], 5));