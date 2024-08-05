const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const usersRoutes = require('./routes/users');
const rootRoutes = require('./routes/root');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRoutes);
app.use(rootRoutes);

app.listen(3000);
