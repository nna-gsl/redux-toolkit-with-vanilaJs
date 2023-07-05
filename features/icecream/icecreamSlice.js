const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    numOfIcecream: 15
}
const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        orders: (state) => {
            state.numOfIcecream--
        },
        restocked: (state,action) => {
            state.numOfIcecream += action.payload
        }
    }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;