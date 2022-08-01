var mongoose = require('mongoose');

var DB_URI = 'mongodb://localhost:27017/YulpCamp';

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URI,{
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                auth: {
                    username: "Sosker",
                    password: "soloyo"
                },
                authSource: "admin"
            }
        ).then(result => {
            console.log('mongoose connected!');
        }).catch(err => console.log(err));
    }
    connect();
}