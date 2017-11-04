(function () {
    'use strict';

    var http = require('http');
    var date = require('node_module/hello.js');

    http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/plain'})
            .write('Hello Aled, this is the date: ' + date.myDate())
        res.end();
        console.log(res, ": my response")
    }).listen(8000);

})();

