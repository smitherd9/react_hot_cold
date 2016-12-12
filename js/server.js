import express  from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(express.static('public'));
app.use(jsonParser.json());


const Storage = {
fewestGuesses: null,
  add(guess) {
    if(guess < this.fewestGuesses || this.fewestGuesses === null) {
    this.fewestGuesses = guess;
    }
    return this.fewestGuesses;
  } 
};

const createStorage = function() {
  let storage = Object.create(Storage);
  return storage;
}

const storage = createStorage();



app.get('/fewest-guesses', function(req, res) {
    res.json( {fewestGuesses: storage.fewestGuesses} );
});


app.post('/fewest-guesses/:guess', function(req, res) {
	let guess = parseInt(req.params.guess, 10);
	storage.add(guess);
    
});



app.listen(process.env.PORT || 8080);