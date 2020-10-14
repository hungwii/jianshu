import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList:[
  {
    id:1,
    title:"社会热点",
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"

  },
  
  {
    id:2,
    title:"手绘",
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  },

  {
    id:3,
    title:"我的天",
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  },

  {
    id:4,
    title:"什么鬼",
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  }],


  articleList:[{
    id:1,
    title:"疫情就要结束了！",
    desc: "因为一个人，人民摘掉口罩的愿望可能成为了泡影，学生返校，工人正常复工的时间可能又要推迟。一个人的不重视，就可能会导致全国人民努力白费。我不知道为...",
    imgUrl: "https://upload-images.jianshu.io/upload_images/5138471-05844555c627b70e.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  },{
    id:2,
    title:"在家长厨艺",
    desc: "今年，大家都过了一个 长长长长长长的假期 每天朋友圈里 除了有关疫情的新闻 就是晒自己做的“黑暗料理” 在这个没有了外卖的日子里 蛋糕、奶茶、火...",
    imgUrl: "https://upload-images.jianshu.io/upload_images/5138471-05844555c627b70e.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  },{
    id:3,
    title:"大家要坚持戴口罩！",
    desc: "疫情对普通人的影响，很大程度上表现为一场魔幻式的恐慌。从朋友圈疯传的段子就可以看出，最搞笑的是某宝平台上的兽用双黄莲也被抢购一空。虽然我国制度优...",
    imgUrl: "https://upload-images.jianshu.io/upload_images/5138471-05844555c627b70e.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}