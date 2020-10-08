import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFocus: false
        }
        this.handleOnBlur = this.handleOnBlur.bind(this)
        this.handleOnFocus = this.handleOnFocus.bind(this)
    }
    
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
                    <SearchWrapper 
                        onFocus={this.handleOnFocus} 
                        onBlur={this.handleOnBlur}
                    >
                        <CSSTransition 
                            in={this.state.isFocus}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch className={this.state.isFoucus? 'yesFocus': ''}/>
                        </CSSTransition>
                            <span 
                                className={this.state.isFoucus? 'yesFocus iconfont': 'iconfont'}
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

    handleOnBlur() {
        this.setState(()=> ({
            isFoucus: false
        }))
    }
    handleOnFocus() {
        this.setState(() => ({
            isFoucus:true
        }))
    }
}

export default Header