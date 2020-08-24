//Data Dog
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

// Increment a counter.
dogstatsd.increment('page.views')
//End Data Dog

const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/errors')

//heroku purposes follow on app.listen()
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.error404)

app.listen(port)