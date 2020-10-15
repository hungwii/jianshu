import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {HomeWrapper, HomeLeft, HomeRight} from './style'
import {actionCreators} from './store'


import Recommend from './Recommend'
import List from './List'
import Author from './Author'
import Guide from './Guide'

class Home extends PureComponent {
    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' 
                         src='https://upload.jianshu.io/admin_banners/web_images/5006/537c82a858e7b0739b26ccb64d318f5e2ba6fbab.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
                         alt='banner-img'
                    />
                    <Recommend></Recommend>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Author></Author>
                    <Guide></Guide>
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData()
    }
}


const mapDispatchToProps = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo()
        dispatch(action)
    }
})


export default connect(null, mapDispatchToProps)(Home)