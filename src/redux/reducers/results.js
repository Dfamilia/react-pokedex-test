const defaultState = [
    {
        id: 1,
        title: 'eevoe'
    },
    {
        id: 2,
        title: 'eevee'
    },
    {
        id: 3,
        title: 'eevae'
    },
];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {

        case 'findResults': {
                const regex = new RegExp(`^${payload}`, 'i');

                return state.filter(n => regex.test(n.title));
        }

        default:
            return state;
    }
}

export default reducer;