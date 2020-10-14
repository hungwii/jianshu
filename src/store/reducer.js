import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../page/home/store'

console.log(homeReducer)
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
})

export default reducer;