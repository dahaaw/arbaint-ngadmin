import generalType from "./type"

const initialStateAuth = {
    notif: []
}

const generalReducer = (state = initialStateAuth, action) => {
    switch (action.type) {
        case generalType.ADD_NOTIF:
            return {
                ...state,
                notif: [...state.notif, ...[action.payload]]
            };

        case generalType.REMOVE_NOTIF:
            const lastNotif = [...state.notif];
            lastNotif.shift();
            return {
                ...state,
                notif: lastNotif
            };
        
        default:
            return state;
    }
}

export default generalReducer;