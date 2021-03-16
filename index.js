//1
const os = require("os")
console.log('RAM: ', os.totalmem());

//2
console.log(os.networkInterfaces())

//3
const fs = require('fs');
const fileName = Math.floor(10000000 + Math.random() * 90000000)
const cpu = JSON.stringify(os.cpus())
fs.writeFile(`${fileName}.txt`, cpu, function (err) {

})

//4
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    } else if (data) {
        const newData = data.split(' ').join('-')
        fs.writeFile('newInputText.txt', newData, function (err) {

        })
    }
})

//5
// const os = require('os');
const date = new Date()
const secondNamePart = `${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`
const newName = `${os.platform()}_${secondNamePart}`
const arr = ['homework1.js', 'homework2.js', 'homework3.js', 'homework4.js']
for (let i = 0; i < arr.length; i++) {
    fs.readFile(arr[i], 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        const dataArr = []
        dataArr.push(data)
        const dataNewArr = dataArr.join(' ')

        fs.writeFile(`${newName}.txt`, dataNewArr, function (err) {

        })
    })
}