var express = require('express'); // Telling nodeJs that we gonna use Express
var cors = require('cors');
var bodyParser = require('body-parser') 
var fs = require('fs');
var multer = require('multer');
var { v4: uuidv4 } = require('uuid');

var app = express(); // Express is sleeping and we want awake it. So, we are calling it.
var upload = multer();
var upload = multer({ dest: 'images/' })
var itemsInfoJSON = require('./json/items.json');
var users = require('./json/users.json');
const { json } = require('body-parser');
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());

var port = 5555;  // We are assigning address to the server.

app.use(cors());
app.use(express.static('images'));
app.use(bodyParser.urlencoded({ extended: true }));
 

// Bridge
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Bridge
// It will receive the book name from the frontend
// We will load the json file
// check if that book exists in the json.
app.get('/getItemInfo/:id', (req, res) => {
  var itemName = req.params.id; // Getting the book name.
  var result = null;  // This variable will tell if we have a book or not.
  for (var i=0; i < itemsInfoJSON.length; i++){
    if(itemsInfoJSON[i]["itemName"] == itemName) result = itemsInfoJSON[i];
  }
  res.json({result});
});


app.get('/getItemInfoBasedOnId/:id', (req, res) => {
  var itemId = req.params.id; // Getting the book name.
  var result = null;  // This variable will tell if we have a book or not.
  for (var i=0; i < itemsInfoJSON.length; i++){
    if(itemsInfoJSON[i]["id"] == itemId) result = itemsInfoJSON[i];
  }
  res.json({result});
});

app.get('/getAllItems', (req, res) => {
  res.json({itemsInfoJSON});
});


app.post('/login', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var result = null;
  for (var i=0; i < users.length; i++){
    if(users[i]["username"] == username && users[i]["password"] == password){
      result = true;
      break;
    }else{
       result = false;
    }
  }
  res.json({"result": result});
});

app.post('/register', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  users = JSON.stringify(users);
  users = JSON.parse(users);
  var usernameExist = false;
  for (var i=0; i < users.length; i++){
    if(users[i]["username"] == username){
      usernameExist = true;
    }
  } 
  if (usernameExist){
     result = {"result": false, "msg": "Username already exist. Try Login!"};
  }else{
    users.push({"username": username, "password": password});
    users = JSON.stringify(users);
    fs.writeFileSync('json/users.json', users);
    result = {"result": true, "msg": "Username does not exist!"};
  }
  res.json(result);
});

// TODO: Add Image upload functionality.
app.post('/addItem', (req, res) => {
  var itemName = req.body["itemName"];
  var walmartUrl = req.body["walmartUrl"];
  itemsInfoJSON.push({id: uuidv4(), "itemName": itemName, "walmartUrl": walmartUrl, "imageName":"item_1.jpg"}); 
  items = JSON.stringify(itemsInfoJSON);
  fs.writeFileSync('json/items.json', items);
  res.json({"result": true}); 
});

// Update Book
app.post('/updateItem/:id', (req, res) => {
  var itemId = req.params.id;
  var itemName = req.body["itemName"];
  var walmartUrl = req.body["walmartUrl"];
  for (var i=0; i < itemsInfoJSON.length; i++){
    if(itemsInfoJSON[i]["id"] == itemId){
      itemsInfoJSON[i]["itemName"] = itemName;
      itemsInfoJSON[i]["walmartUrl"] = walmartUrl;
    }
  }
  items = JSON.stringify(itemsInfoJSON);
  fs.writeFileSync('json/items.json', items);
  res.json({"result": true}); 
});

// Delete Item
app.get('/deleteItem/:id', (req, res) => {
  var itemId = req.params.id;
  itemsInfoJSON = itemsInfoJSON.filter(function( obj ) {
    return obj.id !== itemId;
  });
  items = JSON.stringify(itemsInfoJSON);
  fs.writeFileSync('json/items.json', items);
  res.json({"result": true}); 
});


// Assigning address to the express & telling express 
// if someone will communicate with you on this address,
// You need to respond to that request.
app.listen(port, () => {
  console.log(`Backend of Grocerystore is listening at http://localhost:${port}`);
})