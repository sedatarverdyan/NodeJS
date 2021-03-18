const promise = new Promise(function (resolve, reject){
    const number = Math.random()*10
    if(number >= 5 ){
    resolve(number)
    }else {
        reject(number)
    }
}).then(function (data){
    console.log(data)
}).catch(function (err) {
    console.log(err.message)
})