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
    {
        id: 4,
        title: 'eevoe'
    },
    {
        id: 5,
        title: 'eevee'
    },
    {
        id: 6,
        title: 'eevae'
    },
];

const reducer =(state= defaultState, {type, payload})=>{
    switch(type){
        case 'findCurrentItem':{
            
            return state.find(e=> e.id === payload);
        }

        default:
            return state;
    }

}
export default reducer;