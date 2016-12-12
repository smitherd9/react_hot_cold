import express  from 'express';
import unirest from 'unirest';
const app = express();
import jsonParser from 'body-parser';
app.use(express.static('public'));
app.use(jsonParser.json());



app.get('/fewest-guesses', function(req, res) {
    response.send("Hello World");
});


app.post('/fewest-guesses', function(req, res) {
    response.send("Hello World");
});



app.listen(process.env.PORT || 8080);