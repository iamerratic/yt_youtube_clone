const INIT_STATE = {
    user: null
};

function reducer(state = INIT_STATE, action) {

    if (action.type === 'SIGNIN') {

        return action.payload;
    }

    if (action.type === 'LOGOUT') {

        return INIT_STATE;
    }

    return state;
}

export default reducer;