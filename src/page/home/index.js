import React, {Component} from 'react'
import {HomeWrapper, HomeLeft, HomeRight} from './style'

import Recommend from './Recommend'
import List from './List'

class Home extends Component {
    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' 
                         src='https://upload.jianshu.io/admin_banners/web_images/5006/537c82a858e7b0739b26ccb64d318f5e2ba6fbab.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
                         alt='banner-img'
                    ></img>
                    <Recommend></Recommend>
                    <List></List>
                </HomeLeft>
                <HomeRight>right</HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home