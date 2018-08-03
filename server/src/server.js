const express = require('express');
const http = require('http');
const helmet = require('helmet');

const app = express();
app.use(helmet());

app.get('/time',
  (_, res) => res.json({time: new Date().toTimeString()})
);

const server = http.Server(app);
server.listen(3000);
