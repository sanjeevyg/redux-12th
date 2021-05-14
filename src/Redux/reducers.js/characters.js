import SET_CHARACTER from "./types.js"

export default (state=[], action) => {
    switch(action.type) {
        default: 
            return state
        case SET_CHARACTER:
            return action.character 
    }
}