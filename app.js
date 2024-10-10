const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/routes');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extend:true}));
app.use('/', routes);

app.listen(200, () => {
    console.log('server running on http://localhost:200');
})
