import {fromJS} from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    title:'Can not load the title',
    content:'Can not load the content'
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.GET_DETAIL_DATA:
            return state.merge({
                title:fromJS(action.title),
                content: fromJS(action.content)
            })
        default:
            return state
    }
}