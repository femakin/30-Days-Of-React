// var a = [1,2,3,1,2,3,4];
var a = [ "Greece", "United States", "Greece", "United States", "United States", "Egypt" ]
let b = {}
a.forEach((country) => {
if (b[country]) {
    b[country] +=1
  
}
else {
    b[country] = 1;
  }
  console.log(b[country])
})














// var map = a.reduce(function(obj, b) {
//   obj[b] = ++obj[b] || 1;
//   return obj;
// }, {});

// console.log(map);

// var countObj = a.reduce(function (acc, curr) {
//     if (typeof acc[curr] == 'undefined') {
//       acc[curr] = 1;
//     } else {
//       acc[curr] += 1;
//     }
  
//     return acc;
// }, []);

// console.log(countObj)
// console.log(typeof countObj)