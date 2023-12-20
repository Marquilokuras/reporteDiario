const path = require('path');
const fs = require('fs');

const mainController = {

    home: (req, res) => {
        res.render('home');
    },

}

module.exports = mainController;