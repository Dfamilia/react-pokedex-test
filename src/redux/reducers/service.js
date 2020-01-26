const defaultState = []

function reducer(state=defaultState, {type, payload}){
    switch(type){
        case 'addSerice': {
            return [
                ...state,
                payload,
            ]
        }

        default:
            return state;
    }
}

export default reducer;