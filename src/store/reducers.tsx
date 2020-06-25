import { CHANGE } from "./actionTypes";

const initialState = {
    squaresNum: 8
};

export default function(state = initialState, action: { type: string; payload: any; }) {
    switch (action.type) {
        case CHANGE: {
            return {
                ...state,
                squaresNum: action.payload
            };
        }
        default:
            return state;
    }
}
