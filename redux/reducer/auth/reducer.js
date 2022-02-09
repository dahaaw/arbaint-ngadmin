import authType from "./type";

const initialStateAuth = {
    logged: ''
}

const authReducer = (state = initialStateAuth, action) => {
    switch (action.type) {
        case authType.SET_LOGGED:
            return {
                ...state,
                logged: action.payload
            }
        
        default:
            return state;
    }
}

export default authReducer;