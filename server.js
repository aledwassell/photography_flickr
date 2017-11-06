(function () {
    'use strict';
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 8000;

    app.use(express.static('public'))

        .listen(port, (err) => {
            if (err){
                return console.log(`There was an error: ${err}`);
            }

            console.log(`New node server is running on port: ${port}`)
        })

})();

