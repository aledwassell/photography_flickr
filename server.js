(function () {
    'use strict';

    const http = require('http');

    const express = require('express');
    const app = express();

    const port = 8000;

    app.get('/', (req, res) => {
        res.sendfile('index.html');
    })

        .listen(port, (err) => {
            if (err){
                return console.log(`There was an error: ${err}`);
            }

            console.log(`New node server is running on port: ${port}`)
        })

})();

