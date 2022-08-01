var mongoose = require('mongoose');

var CampgroundScheme = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String,
        default: 'https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png'
    },
    description: {
        type: String
    }
},
{
    versionKey: false
});
module.exports = mongoose.model('Campground', CampgroundScheme);