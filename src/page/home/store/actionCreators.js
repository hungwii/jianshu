import axios from 'axios'
import * as constants from './constants'
import {fromJS} from 'immutable'

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    writerList: result.writerList
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get("/api/home.json").then((res) => {
            const result  = res.data.data
            dispatch(changeHomeData(result))
        })
    }
}

export const changeHomeList = (result) => ({
    type: constants.ADD_LIST_DATA,
    addListData: fromJS(result),
})

export const getHomeList = () => {
    return (dispatch) => {
        axios.get("/api/homeList.json").then((res) => {
            const result = res.data.addListData
            dispatch(changeHomeList(result))
            

        }).catch(() => {
            console.log('fail to get the homeList data!,please check the code!')
        })
    }
}