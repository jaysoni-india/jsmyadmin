var express =  require('express')


const app = express()

app.get('/*', (request,response) => {

        response.send('JS My Admin PHPmyadmin Alternative Comming Soon')

})

var server = app.listen(6464, function () {
 
    var host = server.address().address
    var port = server.address().port

    host = 'localhost'
    port = '6464'
   
    console.log("App listening at http://%s:%s", host, port)
})