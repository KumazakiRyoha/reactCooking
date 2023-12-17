const store = require("./store/index.js")
const { addAction, subAction } = require("./store/actionCreators.js");

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addAction(10))
store.dispatch(addAction(15))
store.dispatch(subAction(15))