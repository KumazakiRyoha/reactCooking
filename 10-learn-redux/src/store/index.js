import { createSlice, configureStore } from '@reduxjs/toolkit'
const reducer = require('./reducer.js');


const store = configureStore({
    reducer: reducer
});

export default store;