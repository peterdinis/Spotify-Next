import { InitialStateI, ReduxAction} from "@/typing/contextTypes";


const reducer = (state: InitialStateI, action: ReduxAction) => {
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }

        default:
            return state
    }
}

export default reducer;