const express = require('express'),
      app = express(),
      home = require('./routes'),
      users = require('./routes/users'),
      PORT = process.env.PORT || 3000;

app.listen(PORT);

app.use('/users', users);
app.use('/', home);