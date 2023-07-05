const store = require('./app/store');
// const cakeActions = require('./features/cake/cakeSlice').cakeActions
// const icecreamActions = require("./features/icecream/icecreamSlice").icecreamActions
const fetchUsers = require("./features/user/userSlice").fetchUsers;

const unsubscribed = store.subscribe(() => {
    console.log("updated state0" , store.getState())
})
store.dispatch(fetchUsers());

// store.dispatch(cakeActions.orders())
// store.dispatch(cakeActions.orders())
// store.dispatch(cakeActions.orders())
// store.dispatch(cakeActions.restoked(5))

// store.dispatch(icecreamActions.orders())
// store.dispatch(icecreamActions.orders())
// store.dispatch(icecreamActions.orders())
// store.dispatch(icecreamActions.orders())
// store.dispatch(icecreamActions.orders())
// store.dispatch(icecreamActions.orders())
// store.dispatch(icecreamActions.restocked(8))
unsubscribed();