import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { actionCreators } from './store'
import {Redirect} from 'react-router-dom'

import {LoginWrapper,LoginBox, Input, Button} from './style'

class Login extends PureComponent {
    render () {
        console.log(this.props.isLogin)
        if (!this.props.isLogin) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => {this.account = input}}/>
                        <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.tryToLogin(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
        
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.getIn(['login', 'isLogin'])
})

 
const mapDispatchToProps = (dispatch) => ({
    tryToLogin(account, password) {
        const action = actionCreators.createLoginAction(account.value, password.value)
        dispatch(action)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)