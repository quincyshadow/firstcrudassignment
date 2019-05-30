const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
// Use the array below to store the users. Add/remove/update items in it based off
let storage = [];
app.use(bodyParser.json());

//
app.post('/users', function(req, res) {
  var user = req.body;

  if (!user) {
    return res.sendStatus(400);
  }
  storage.push(user);
  res.json(storage);
});

app.get('/users', function(req, res) {
  var user = req.body;

  if (!user) {
    return res.sendStatus(400);
  }

  res.json(storage);
});

// Get route for getting a user by name

app.get('/users/:name', function(req, res) {
  // var user = req.body;
  var name = req.params.name;

  console.log(name);

  if (!name) {
    return res.sendStatus(400);
  }

  let foundUs = false;

  //breaks on first oc
  storage.map( (e,i) =>
  {
    if (e['name'] == name)
    {
      res.json(e);
    }
  })

});

// Update route for updating a user by name
app.put('/users/:name', function(req, res) {
  var user = req.body;
  var name = req.params.name;

  console.log(name);

  if (!name) {
    return res.sendStatus(400);
  }

  let foundUs = false;

  //breaks on first oc
  storage.map( (e,i) =>
  {
    if (e['name'] == name)
    {
      storage[i] = user;
      res.json(storage[i]);
    }
  })

});

// Delete route for deleting a user by name

app.delete('/users/:name', function(req, res) {
  var user = req.body;
  var name = req.params.name;

  console.log(name);

  if (!name) {
    return res.sendStatus(400);
  }

  let foundUs = false;

  //breaks on first oc
  storage.map( (e,i) =>
  {
    if (e['name'] == name)
    {
      ret = storage.splice(i,1)[0];
      res.json(ret);
    }
  })

});




app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
})
