const express =  require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());


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


app.post('/fewest-guesses', function(req, res) {
	let guess = parseInt(req.body.guesses, 10);
	storage.add(guess);
	res.json( {fewestGuesses: storage.fewestGuesses} );
    
});



app.listen(process.env.PORT || 8000);