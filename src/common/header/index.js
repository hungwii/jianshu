import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style'
import {connect} from 'react-redux'

class Header extends Component {    
    render() {
        return(
            <HeaderWrapper >
                <Logo />
                <Nav>
                    <NavItem className='active left'>首页</ NavItem>
                    <NavItem className='left'>下载</ NavItem>
                    <NavItem className='right'>
                        <span className='iconfont'>&#xe636;</span>
                    </ NavItem>
                    <NavItem className='right'>登陆</ NavItem>
                    <SearchWrapper>
                        <CSSTransition 
                            in={this.props.isFocus}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch 
                                className={this.props.isFocus? 'yesFocus': ''}
                                onFocus={this.props.handleOnFocus} 
                                onBlur={this.props.handleOnBlur}
                            
                            />
                        </CSSTransition>
                            <span 
                                className={this.props.isFocus? 'yesFocus iconfont': 'iconfont'}
                                >&#xe637;
                            </span>
                        
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='reg'>注册</Button>
                    <Button className='writting'>
                        <span className='iconfont'>&#xe6e5;</span>
                        写文章
                    </Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFocus: state.isFocus,
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleOnFocus() {
            const action  = {
                type: 'changeToFocus'
            }
            dispatch(action)
        },

        handleOnBlur() {
            const action = {
                type: 'changeToBlur'
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)