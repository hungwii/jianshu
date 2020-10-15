import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {Link} from 'react-router-dom'
import {actionCreators} from './store'
import {    HeaderWrapper, 
            Logo,
            Nav, 
            NavItem, 
            NavSearch, 
            Addition, 
            Button, 
            SearchWrapper, 
            SearchInfo,
            SearchInfoTitle,
            SearchSwitch,
            SearchItem,
            SearchItemList,

        } from './style'

class Header extends Component {
    getListArea = (show) => {
        if (show) {
            return (
                <SearchInfo>
                    <SearchSwitch>换一批</SearchSwitch>
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <SearchItemList>
                        {
                            this.props.list.map((item) => {
                                return <SearchItem key={item} >{item}</SearchItem>
                            })
                        }   
                    </SearchItemList>
                </SearchInfo>
            )
        }
        else {
            return null
        }
    }

    render() {

        const {isFocus, handleOnFocus, handleOnBlur, list} = this.props

        return(
            <HeaderWrapper >
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='active left'>首页</ NavItem>
                    <NavItem className='left'>下载</ NavItem>
                    <NavItem className='right'>
                        <span className='iconfont'>&#xe636;</span>
                    </ NavItem>
                    <NavItem className='right'>登陆</ NavItem>
                    <SearchWrapper>
                        <CSSTransition 
                            in={isFocus}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch 
                                className={isFocus? 'yesFocus': ''}
                                onFocus={() => handleOnFocus(list)} 
                                onBlur={handleOnBlur}
                            
                            />
                        </CSSTransition>
                            <span 
                                className={isFocus? 'yesFocus iconfont': 'iconfont'}
                                >&#xe637;
                            </span>
                        
                        {this.getListArea(isFocus)}
                        
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
        isFocus: state.getIn(['header', 'isFocus']),
        list: state.getIn(['header', 'list'])
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleOnFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreators.GET_REMOTE_LIST())
            }
            dispatch(actionCreators.SEARCH_FOCUS())
        },

        handleOnBlur() {
            dispatch(actionCreators.SEARCH_BLUR())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)