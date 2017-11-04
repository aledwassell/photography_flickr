(function () {
    'use strict';

    const http = require('http');
    const port = 8000;

    const requestHandler = (req, res) => {
        console.log(req.url)
        res.end('My node server');
    }

    const server = http.createServer(requestHandler)
        .listen(port, (err) => {
            if (err) {
                return console.log('There was an error: ', err);
            }

            console.log(`Server running at port: ${port}`)
    })


})();

