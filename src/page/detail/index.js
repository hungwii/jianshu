import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {withRouter} from 'react-router-dom'


import {Contant, DetailWrapper, Header} from './style'



class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <Header>
                    {this.props.title}
                </Header>
                <Contant dangerouslySetInnerHTML={{__html:this.props.content}} />
            </DetailWrapper>
        )
    }

    componentDidMount() {
        const ID = this.props.match.params.id//拿到跳转路由的id
        this.props.getDetail(ID);
    }

}

const mapStateTpProps = (state) => ({
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
})

const mapDispatchToProps = (dispatch) => ({
    getDetail(ID) {
        dispatch(actionCreators.getDetailData(ID))
    }
})
export default connect(mapStateTpProps,mapDispatchToProps)(withRouter(Detail));