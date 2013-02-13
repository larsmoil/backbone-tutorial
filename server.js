/**
 * Created with JetBrains WebStorm.
 * User: lamoi
 * Date: 2/13/13
 * Time: 12:43 AM
 * To change this template use File | Settings | File Templates.
 */

var connect = require('connect')
  , http = require('http')
  , app
  ;

app = connect()
    .use(connect.static('app'))
    .use('/js/lib', connect.static('node_modules/requirejs/'))
    .use('/node_modules', connect.static('node_modules'))
    .use('/test', connect.static('test/'))
    .use('/test', connect.static('app'))
    ;
http.createServer(app).listen(8081, function() {
    console.log('Running on http://localhost:8081');
});
