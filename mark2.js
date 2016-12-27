
var marked = require('marked')
    ,fs = require("fs")
    ,http = require('http');

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

fs.readFile('m1.md', 'utf-8', function (err, data) {
    if (err) throw err;
    server(marked(data));
});

function server(html){
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        res.end(html);
    }).listen(1337, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:1337/');
}