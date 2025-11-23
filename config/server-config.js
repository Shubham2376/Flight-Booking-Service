const dotenv = require('dotenv'); //it returns the object
dotenv.config() // call the config() function 
// return the object 
module.exports = {
    PORT : process.env.PORT || 3000,
    FLIGHT_SERVICE: process.env.FLIGHT_SERVICE
}