import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style'
import {actionCreators} from './store'

const Header = (props) => {
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
                        in={props.isFocus}
                        timeout={200}
                        classNames='slide'
                    >
                        <NavSearch 
                            className={props.isFocus? 'yesFocus': ''}
                            onFocus={props.handleOnFocus} 
                            onBlur={props.handleOnBlur}
                        
                        />
                    </CSSTransition>
                        <span 
                            className={props.isFocus? 'yesFocus iconfont': 'iconfont'}
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


const mapStateToProps = (state) => {
    return {
        isFocus: state.header.isFocus,
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleOnFocus() {
            dispatch(actionCreators.SEARCH_FOCUS())
        },

        handleOnBlur() {
            dispatch(actionCreators.SEARCH_BLUR())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)