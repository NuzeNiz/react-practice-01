const initialState = {
    messages:[]
}

const actions = {
    SET_MESSAGES:(state, new_messages)=>{
        return {
            ...state,
            messages:new_messages
        }
    }
}

export default function actionReducer(state = initialState, action){
    if (actions[action.type]) {
        return actions[action.type](state, action.new_messages)
    }
    return state
}