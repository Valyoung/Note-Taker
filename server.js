// Used most code from the activities starwars 6

let express = require ('express');
let path = require('path');
let fs = require('fs').promises;
let apiRoutes = require("./routes/apiRoutes");
let app = express();
let PORT = 3000;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));


app.use('/api', apiRoutes)

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Displays all characters
app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// app.get("/api/characters", function(req, res) {
//     return res.json(characters);
//   });
app.get('/api/notes', function(req, res){
    console.log(req.body);
});

// res.json(newcharacter);
// });
//Start the server
//==========================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});