

export const signIn = function (user) {

    return {
        type: 'SIGNIN',
        payload: user
    };
}


export const logout = function () {

    return {
        type: 'LOGOUT'
    };
}