import axios from 'axios'
import * as constants from './constants'

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true

})

export const tryToLogout = () => ({
    type:constants.CHANGE_LOGOUT,
    value: false
})
export const createLoginAction = (account, password) => {
    return (dispatch) => {
        axios.get('/api/userdata.json?account=' + account + '&password=' + password).then((res) => {
            const result  = res.data.data
            if (result) {
                dispatch(changeLogin())
            }else {
                alert('登陆失败，请重新输入账号密码')
            }
        })
    }
    
}
