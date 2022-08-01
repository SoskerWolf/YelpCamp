var mongoose = require('mongoose');

var UserScheme = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String,
        default: 'https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png'
    }
},
{
    versionKey: false
});
module.exports = mongoose.model('users', UserScheme);