'use strict';

var User = require('../model/appModel.js');

exports.list_all_users = function(req, res) {
    User.getAlluser(function(err, user) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', user);
    res.send(user);
  });
};



exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);

  //handles null error 
   if(!new_user.nom || !new_user.prenom){

            res.status(400).send({ error:true, message: 'Please provide nom/prenom' });

        }
else{
  
  User.createuser(new_user, function(err, user) {
    
    if (err)
      res.send(err);
    res.json(user);
  });
}
};


exports.read_a_user = function(req, res) {
  User.getuserById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_user = function(req, res) {
  User.updateById(req.params.userId, new Task(req.body), function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_user = function(req, res) {


  User.remove( req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'user successfully deleted' });
  });
};