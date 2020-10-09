import styled from 'styled-components'
import LogoPic from '../../static/logopic.png'

export const HeaderWrapper = styled.div`
position: relative;
height: 58px;
border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href:'/'
})`
position: absolute;
height: 56px;
width: 100px;
top: 0;
left: 0;
background:url(${LogoPic});
background-size: contain;
`;

export const Nav = styled.div`
width: 960px;
height: 56px;
margin: 0 auto;
`;

export const NavItem = styled.div`
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color:#9696
    }
    &.active {
        color:#ea6f5a
    }
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    height:38px;
    width:160px;
    margin-top:9px;
    margin-left: 20px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #777; 
    &::palceholder {
        color:#999
    }
    &.yesFocus {
        width: 300px;
    }

    // 入场动画
    &.slide-enter{
      transition: all .2s ease-out;
    }
    &.slide-enter-active{
      width:240px;
    }
    // 出场动画
    &.slide-exit{
      transition: all .2s ease-out;
    }
    &.slide-exit-active{
      width:160px;
    }
`
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.button`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
    color:#ec6149;
    }
    &.writting{
    color:#fff;
    background:#ec6149;
    }
`
export const SearchWrapper = styled.div`
    float:left;
    position: relative;
    .iconfont {
        position: absolute;
        right:5px;
        bottom: 4px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        &.yesFocus {
            background: #777;
            color: #fff;
        }
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    left:20px;
    top:59px;
    width:240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2); 
`
export const SearchSwitch = styled.div`
    float:right;
    margin-top:20px;
    font-size:13px;
    color:#969696;

`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    font-size:14px;
    color:#969696;
`
export const SearchItemList = styled.div`
    overflow: hidden;
`
export const SearchItem = styled.div`
    display:block;
    float:left;
    line-height:20px;
    padding: 0 5px;
    margin-left:10px;
    margin-bottom:10px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
`
