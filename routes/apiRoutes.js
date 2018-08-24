var db = require("../models");

module.exports = function(app) {
  app.get("/dashboard", function(req, res) {

    db.Game_library .findAll({}).then(function(dbGame_library ) {
      res.json(dbGame_library );
    });

    db.Hosted_games.findAll({}).then(function(dbHosted_games) {
      res.json(dbHosted_games);

  });

  db.User.findAll({}).then(function(dbUser) {
    res.json(dbUser);

   

  });
});

app.get("/api/games/:game_id", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Game_library.findAll({}).then(function(dbGame_library) {
    // We have access to the todos as an argument inside of the callback function
    res.json(dbGame_library);
  });
});

app.get("/api/parties/:party_id", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Hosted_games.findAll({}).then(function(dbHosted_games) {
    // We have access to the todos as an argument inside of the callback function
    res.json(dbHosted_games);
  });
});

app.get("/api/hosted-parties", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Hosted_games.findAll({}).then(function(dbHosted_games) {
    // We have access to the todos as an argument inside of the callback function
    res.json(dbHosted_games);
  });
});

// app.get("/api/:characters?", function(req, res) {
//   // If the user provides a specific character in the URL...
//   if (req.params.characters) {
//     // Then display the JSON for ONLY that character.
//     // (Note how we're using the ORM here to run our searches)
//     Character.findOne({
//       where: {
//         routeName: req.params.characters
//       }
//     }).then(function(result) {
//       return res.json(result);
//     });
//   }
//   else {
//     // Otherwise...
//     // Otherwise display the data for all of the characters.
//     // (Note how we're using Sequelize here to run our searches)
//     Character.findAll({}).then(function(result) {
//       return res.json(result);
//     });
//   }
// });



 // Create a new example
//  app.get("/api/:games", function(req, res) {
//   db.Game_library.findAll(req.params.game_id).then(function(Game_library) {
//     res.json(data);
//   });
// });

//   app.post("/register/",function(req,res){
//     var bodyStr = '';
//     req.on("data",function(chunk){
//         bodyStr += chunk.toString();
//     });
//     req.on("end",function(){
//         res.send(bodyStr);
//     });

// });
// // default route
// //app.get('/', function (req, res) {
//   res.render('index');
// });

// // Retrieve all todos 
// //app.get('/register', function (req, res) {
//   //mc.query('SELECT * FROM tasks', function (error, results, fields) {
//       //if (error) throw error;
//       //return res.send({ error: false, data: results, message: 'Todos list.' });
//   });
// });

// // Search for todos with ‘bug’ in their name
// //app.get('/todos/search/:keyword', function (req, res) {
//   //let keyword = req.params.keyword;
//   //mc.query("SELECT * FROM tasks WHERE task LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
//       //if (error) throw error;
//       //return res.send({ error: false, data: results, message: 'Todos search list.' });
//   });
// });

// // Retrieve todo with id 
// //app.get('/dashboard/:id', function (req, res) {

//   //let task_id = req.params.id;

//   //mc.query('SELECT * FROM tasks where id=?', task_id, function (error, results, fields) {
//       //if (error) throw error;
//       //return res.send({ error: false, data: results[0], message: 'Todos list.' });
//   });

// });

// // Add a new todo  
// //app.post('/todo', function (req, res) {

//   //let task = req.body.task;

//   //if (!task) {
//       return res.status(400).send({ error:true, message: 'Please provide task' });
//   }

//   mc.query("INSERT INTO tasks SET ? ", { task: task }, function (error, results, fields) {
//       if (error) throw error;
//       return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
//   });
// });

// //  Update todo with id
// app.put('/todo', function (req, res) {

//   let task_id = req.body.task_id;
//   let task = req.body.task;

//   if (!task_id || !task) {
//       return res.status(400).send({ error: task, message: 'Please provide task and task_id' });
//   }

//   mc.query("UPDATE tasks SET task = ? WHERE id = ?", [task, task_id], function (error, results, fields) {
//       if (error) throw error;
//       return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
//   });
// });

// //  Delete todo
// app.delete('/todo/:id', function (req, res) {

//   let task_id = req.params.id;

//   mc.query('DELETE FROM tasks WHERE id = ?', [task_id], function (error, results, fields) {
//       if (error) throw error;
//       return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
//   });

// });

// // all other requests redirect to 404
// app.all("*", function (req, res, next) {
//   return res.send('page not found');
//   next();
// });

// // port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
// app.listen(8080, function () {
//   console.log('Node app is running on port 8080');
// });

// // allows "grunt dev" to create a development server with livereload
// module.exports = app;
  /*
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });

  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });*/
};//end of module exports
