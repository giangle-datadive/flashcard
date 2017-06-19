const express = require('express');
const app = express();
let path = require('path');
app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});