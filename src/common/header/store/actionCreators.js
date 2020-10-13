import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})

export const SEARCH_FOCUS = () => {
    return {
        type: constants.SEARCH_FOCUS
    }
}

export const SEARCH_BLUR = () => {
    return {
        type: constants.SEARCH_BLUR
    }
}


export const GET_REMOTE_LIST = () => {
    return (dispatch) => {
        axios.get("/api/headerList.json").then(
            (res) => {
                const data = res.data
                dispatch(changeList(data.data))
            }
        ).catch(
            () => {
                console.log('data is not found')
            }
        )
    }
}