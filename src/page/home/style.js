import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`
export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`

export const HomeRight = styled.div`
    float: right;
    width: 300px;
`

export const TopicWrapper = styled.div`
    display:flow-root;
    padding: 20px 0 10px 0;
    margin-left: -18px;
`
export const TopicItem = styled.div`
    float: left;
    line-height: 32px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right:10px;
    margin-left: 18px;
    margin-bottom: 18px;
    .topic-pic{
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`
export const ListItem = styled.div`
    display: flow-root;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`

export const WriterWrapper = styled.div`
    width: 280px;
    height : 250px;
    // border: 1px solid #dcdcdc;
    margin-top: 30px;
    border-radius:3px;
    line-height: 300px;
    text-align: center;
`
export const WriterItem = styled.div`
    
    .pic{
        float: left;
        margin-bottom: 7px;
        width: 280px;
        height: 50px;
    }

`
export const LoadMore = styled.div`
    width: 100%;
    line-height: 40px;
    margin :30px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`