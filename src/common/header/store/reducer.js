const defaultState = {
    isFocus: false,
}

const headerReducer = (state=defaultState, action) => {
    if (action.type === 'changeToFocus') {
        return {
            isFocus: true
        }
    }
    if (action.type === 'changeToBlur') {
        return {
            isFocus: false
        }
    }

    return state
}

export default headerReducer