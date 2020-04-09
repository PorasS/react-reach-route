const initialstate = {
    posts: [{
        id: 1,
        name: 'pratik'
    }, {
        id: 2,
        name: 'poras'
    },]
}

const rootReducer = (state = initialstate, action: any) => {

    if (action.type === "DELETE_POST") {
        console.log("action", action)
    }
    return state;
}

export default rootReducer;