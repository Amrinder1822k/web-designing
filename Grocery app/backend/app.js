var express = require('express'); // Telling nodeJs that we gonna use Express
var cors = require('cors');
var bodyParser = require('body-parser') 
var fs = require('fs');
var { v4: uuidv4 } = require('uuid');

var app = express(); // Express is sleeping and we want awake it. So, we are calling it.
var users = require('./json/users.json');
var  groceriesInfoJSON=require('./json/groceries.json');



var port = 5555;  // We are assigning address to the server.
var jsonParser=bodyParser.json()
app.use(cors());
app.use(express.static('images'));
app.use(bodyParser.urlencoded({ extended: true }));
 

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
app.get('/getGroceryInfo/:id', (req, res) => {
  var groceryName = req.params.id; // Getting the Item name.
  var result = null;  // This variable will tell if we have a Item or not.
  for (var i=0; i < groceriesInfoJSON.length; i++){
    if(groceriesInfoJSON[i]["groceryName"] == groceryName) result = groceriesInfoJSON[i];
  }
  res.json({result});
});


app.get('/getGroceryInfoBasedOnId/:id', (req, res) => {
  var groceryId = req.params.id; // Getting the Item name.
  var result = null;  // This variable will tell if we have a grocery or not.
  for (var i=0; i < groceriesInfoJSON.length; i++){
    if(grociersInfoJSON[i]["id"] == groceryId) result = groceriesInfoJSON[i];
  }
  res.json({result});
});


app.post('/addGrocery', (req, res) => {
  var groceryName = req.body["groceryName"];
  var Url = req.body["Url"];
  console.log("groceryName",groceryName)
  console.log("Url",Url)
  groceriesInfoJSON.push({id: uuidv4(), "groceryName": groceryName, "Url": Url, "imageName":"book1.jpg"});
  var groceries = JSON.stringify(groceriesInfoJSON);
  fs.writeFileSync('json/groceries.json', groceries);
  res.json({"result": true}); 
});


app.get('/getAllGroceries', (req, res) => {
  res.json({groceriesInfoJSON});
});
app.listen(port, () => {
  console.log(`Backend of Grocery App is listening at http://localhost:${port}`);
})
