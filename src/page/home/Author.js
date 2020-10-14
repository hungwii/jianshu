import React, {Component} from 'react'
import {WriterWrapper, WriterItem} from './style'
import {connect} from 'react-redux'

class Author extends Component {
    render() {
        return(
            <WriterWrapper>
                {
                    this.props.list.map((item) => {
                        return(
                            <WriterItem key={item.get("id")}>
                                <img 
                                    className="pic"
                                    src={item.get("imgUrl")}
                                    alt='pic'
                                ></img>
                            </WriterItem>
                        )
                    })
                }
                
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(["home", 'writerList'])
})

export default connect(mapStateToProps, null)(Author)