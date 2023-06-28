import { FETCH_REQUEST, FETCH_RESPONSE } from "./actionsType"

const initialState = {
    tableList: {}
}

export const rootReducer = (state = initialState, { type, payload }) => {

    // debugger;
    switch (type) {
        case FETCH_REQUEST:
            return {
                ...state,
                tableList: initialState.tableList
            }

        case FETCH_RESPONSE:
            console.log(payload, "Payload")
            return {
                ...state,
                tableList: payload
            }
        default:
            return state
    }

}