const db = require('./db.js')

module.exports.handleSignup = (email, password) => {
    //check if the email exists
    db.saveUser({email, password});
    //send welcome email
}