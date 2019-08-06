//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    recommend:[],
    keyword:''
  },
  
  onLoad: function () {
    // 发起请求，获取数据
    wx.request({
      url:'http://tingapi.ting.baidu.com/v1/restserver/ting',
      data:{
        method:'baidu.ting.billboard.billList',
        type:2,
        size:5,
        offset:0
      },
      success:({data})=>{
        console.log(data);

        // 获取当前最热门歌曲（排序）
        let hot = [...data.song_list];
        hot.sort((a,b)=>b.hot-a.hot);
        console.log('hot:',hot);

        // 如何修改Data数据
        this.setData({
          recommend:data.song_list,
          keyword: hot[0].title
        })
      }
    })
  },
  
  // gotoSearch(){
  //   wx.navigateTo({
  //     url:'/pages/search/search?keyword='+this.data.keyword
  //   })
  // },
  goto(e){
    console.log(e)
    let {target,songid} = e.currentTarget.dataset;
    let url = `/pages/${target}/${target}`;
    let query = songid ? 'songid='+songid : 'keyword='+this.data.keyword
    wx.navigateTo({
      url: url + '?' + query
    })
  }
})
