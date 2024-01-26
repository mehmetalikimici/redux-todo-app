
const initialState = {
    users:[],
    category:[],
}

const userReducer = (state = initialState,action) =>{
    switch (action.type) {
        case "":
        return;
    
        default:
        return state;
    }
}

export default userReducer