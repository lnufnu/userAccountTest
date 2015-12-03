var mongoose = require('mongoose');
 
var userSchema = mongoose.Schema({
  username: String,
  password: String,
});
 
userSchema.methods.validatePassword = function(password) {
  compare(password, this.password, function(err, res) {
    res = true
  });
}
 
module.exports = mongoose.model('User', userSchema);

