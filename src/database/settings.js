const mongoose = require('mongoose');

module.exports = {
    connect(){
        mongoose.connect('mongodb://admin:admin12345@ds155203.mlab.com:55203/goweek-chrys', 
        {
            useNewUrlParser: true
        });
    }
};