// Necessary imports
const url = require('url')
const qs = require('querystring')

module.exports = {
    serverHandle: function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
        res.writeHead(200, {'Content-Type': 'text/html'});
        if (path === '/hello' && params['name'] ==='Jean') {
            res.write('Hello, my name is Jean. I\'m 21, from Paris.')
        }else if (path === '/hello' && 'name' in params){
            res.write('Hello ' + params['name'])
        } else if (path ==='/hello'){
            res.write('Error 404')
        }else{
            res.write('This website uses a name parameter, if no name was given, it shows a 404 error page. If a random page is given, it says \'Hello\' [random name]. If my name was given (Jean), it gives a short intro of myself')
        }
        res.end();
    }
}

const content = '<!DOCTYPE html>' +
  '<html>' +
  '    <head>' +
  '        <meta charset="utf-8" />' +
  '        <title>ECE AST</title>' +
  '    </head>' + 
  '</html>'