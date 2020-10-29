const { Word } = require('../db.js');

const dbController = {};

dbController.generateWord = (req, res, next) => {
    // let count;
    // Word.count({}, (err, num) => {
    //     console.log(count)
    //     res.locals.count = num;
    // })
    return next();
}

dbController.submitWord = (req, res, next) => {
    Word.findOne({ word: 'bedevil' }, (err, word) => {
        console.log(word)
    })
    return next();
}

module.exports = dbController;