const createSlice = require('@reduxjs/toolkit').createSlice
const initialState = {
    numOfCakes: 10
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        orders: (state) => {
            state.numOfCakes--
        },
        restoked: (state,action) => {
            state.numOfCakes += action.payload
        }
    }
})
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions