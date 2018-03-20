const express = require('express')
const app = express();

const port = process.env.PORT || 2020;

app.set('view engine', 'ejs');
app.use(express.static('public'));

require('./routes/overview')(app);

app.listen(port);
console.log(`http://localhost:${port}`)