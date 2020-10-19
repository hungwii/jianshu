import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { actionCreators } from './store'
import {ListItem, ListInfo, LoadMore} from './style'
class List extends PureComponent {
    render() {
        return(
            <>
                {
                    this.props.list.map((item,index) => {
                        return(
                            <Link key={index} to={'/detail/' + item.get("id")}>
                                <ListItem >
                                    <img 
                                        className="pic"
                                        src={item.get("imgUrl")}
                                        alt={item.get("title")}
                                    />
                                    <ListInfo>
                                        <h3 className="title">{item.get("title")}</h3>
                                        <p className="desc">{item.get("desc")}</p>
                                    </ListInfo>

                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={this.props.addHomeList}>加载更多</LoadMore>
            </>
        )
    }
}

const mapStatesToProps = (state) => ({
    list: state.getIn(["home", "articleList"])
})

const mapDispatchToProps = (dispatch) => ({
    addHomeList() {
        const action = actionCreators.getHomeList()
        dispatch(action)
    }
})
export default connect(mapStatesToProps, mapDispatchToProps)(List)