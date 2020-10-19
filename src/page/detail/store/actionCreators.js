import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constants'

const creatDetailAction = (result) => ({
    type: constants.GET_DETAIL_DATA,
    title: fromJS(result.title), 
    content: fromJS(result.content)   
})

export const getDetailData = (ID) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=/' + ID).then((res) => {
            const result = res.data.data
            const action = creatDetailAction(result)
            dispatch(action)
        }).catch(() => {
            console.log('Can not find the data~')
        })

    }
}