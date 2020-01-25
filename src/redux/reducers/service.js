function reducer(state=[], {type, payload}){
    switch(type){
        case 'addSerice': {
            return [
                ...state,
                payload,
            ]
        }

        case 'findResults': {
            const regex = new RegExp(`^${payload}`, 'i');

            return state.filter(n => regex.test(n.title));
        }

        default:
            return state;
    }
}

export default reducer;