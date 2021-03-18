
// const fs = require('fs/promises');
//
// async  function text(){
//     const data = await Promise.all([
//         fs.readFile('./input.txt', function (err, data){
//             if (err) {
//                 return err.message;
//             }
//             else if(data){
//                 const data1  = Math.ceil(data.length / 2)
//                 const first = data.slice(0, data1)
//                 const second = data.slice(data1)
//                 fs.writeFile('output1.txt', first, (err) => {
//                     if (err) {
//                         return err.message;
//                     }
//                 }
//                 fs.writeFile('output2.txt', second, (err) => {
//                     if (err) {
//                         return err.message;
//                     }
//                 }
//         });
//     ]);
//
// }



