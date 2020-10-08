const defaultState = {
    isFocus: false,
}

export default (state=defaultState, action) => {
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