const app = require('express')();
const http = require('http').Server(app);

app.get('/', (_, res) => res.send('<h1>Hello World!</h1>'));
console.log('foo');
http.listen(3000, () => console.log('listening on port 3000'));
