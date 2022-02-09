import generalType from "./type";

export const addNotif = (text, type = 'error') => (dispatch) => {
    dispatch({
        type: generalType.ADD_NOTIF,
        payload: { text, type }
    });
    setTimeout(() => {
        dispatch({ type: generalType.REMOVE_NOTIF })
    }, 3000);
}