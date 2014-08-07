var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('build', {'index': ['index.html', '404.html']}))

console.log('http://localhost:5000');
app.listen(5000);
