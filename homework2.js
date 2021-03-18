const http = require('http')
const config = require('./config.json');
const server = http.createServer(function (req, res){
    res.end(JSON.stringify({host:config.host, port:config.port}))
})
server.listen(config.port, config.host)
