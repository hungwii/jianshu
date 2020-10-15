import { fromJS } from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
  topicList:[],
  articleList:[],
  writerList:[]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        writerList: fromJS(action.writerList),
      })
    case constants.ADD_LIST_DATA:
      return state.set("articleList", state.get("articleList").concat(action.addListData))
    default:
      return state;
  }
}