const cookieController = {};
const cookieParser = require('cookie-parser');

cookieController.setCookie = (req, res, next) => {
    console.log("You have entered the cookieController")
    if (req.cookies) return;
    res.status(200).cookie('today\'s word', 'Moira', { expires: new Date(Date.now() + (24 * 3600000)) })
}

module.exports = cookieController