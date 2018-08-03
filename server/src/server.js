const express = require('express');
const http = require('http');
const helmet = require('helmet');

const app = express();
app.use(helmet());

app.get('/',
  (_, res) => res.send('<h1>Hello World!</h1>'));

const server = http.Server(app);
server.listen(3000, 
  () => console.log('listening on port 3000'));
