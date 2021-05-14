import { GET_CHARACTERS } from "../types"

export default function characters(state=[], action) {
    switch(action.type) {
        default: 
            return state
        case GET_CHARACTERS:
            return action.characters 
    }
}