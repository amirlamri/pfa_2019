'user strict';
var sql = require('./db.js');

//Task object constructor
var User = function(user){
    this.id = user.id;
    this.nom = user.nom;
    this.prenom = user.prenom;
    this.adresse = user.adresse;
    this.ville = user.ville;
    this.login = user.login;
    this.password =user.password;
    this.image =user.image;
};
User.createUser = function createUser(newuser, result) {    
        sql.query("INSERT INTO users set ?", newuser, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
User.getUserById = function createUser(userId, result) {
        sql.query("Select nom from users where id = ? ", userId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
User.getAlluser = function getAlluser(result) {
        sql.query("Select * from users", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('users : ', res);  

                 result(null, res);
                }
            });   
};
User.updateById = function(id, nom, result){
  sql.query("UPDATE users SET nom = ? WHERE id = ?", [user.nom, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
User.remove = function(id, result){
     sql.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= User;