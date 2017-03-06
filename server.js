var express = require('express');
var app = express();
app.use('/', require('./routes/routes'));
app.use('/proba', require('./routes/routes'));
app.listen(5000, function () {
    console.log('hello world');
});
