(function () {
    'use strict';

    var express = require('express');
    var app = express();

    app.use(express.static(_dirname + '/app'));

    var port = 8000;
    app.listen(port, function () {
        console.log('listening on port: ', port);
    })

})();

