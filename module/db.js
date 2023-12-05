'use strict';
var database = require('../config/database');
var sequelize = database.sequelize;

module.exports.send = (event, context, callback) => {
    var message = JSON.parse(event.Records[0].Sns.Message);
    let id = message.id;
    sequelize.query(`SELECT * FROM User WHERE ID = ${id}`, { type: sequelize.QueryTypes.SELECT})
    .then(users => {
            // Your logic here
    });
    
    callback(null, { message: 'Finished' , event });
};