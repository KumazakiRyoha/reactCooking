const {ADD_NUMBER, SUB_NUMBER} = require("./constants.js");

const addAction = (num) => {
    return {
        type: ADD_NUMBER,
        num
    }
}

const subAction = (num) => ({
    type: SUB_NUMBER,
    num
})

module.exports.addAction = addAction;
module.exports.subAction = subAction;

