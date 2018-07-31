const express = require('express'),
      app = express(),
      home = require('./routes'),
      users = require('./routes/users');

app.listen(3000);

app.use('/users', users);
app.use('/', home);