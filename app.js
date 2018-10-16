const express = require('express'),
        ejs = require('ejs'),
        app = express();
   

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
   res.render("index");
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server Running!');
});
