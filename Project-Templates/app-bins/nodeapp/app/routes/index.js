const noteRoutes = require("./approute")

module.exports = function(app, db){
	noteRoutes(app, db)	
}
