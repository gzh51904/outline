//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    recommend:[],
    keyword:'',
    tabs: app.globalData.types,
    tabWidth:0,
    sliderOffset:0,
    activeIndex:0, //tab当前索引值,
    tabData:{
      // 1:[],
      // 21:[],
      // 16:[]
    },
    hotlist:[]
  },
  
  onLoad: async function () {
    let {tabs,activeIndex} = this.data;
    // 发起请求，获取轮播图数据
    let data = await this.getData();
    // 获取当前最热门歌曲（排序）
    let hot = [...data.song_list];
    hot.sort((a, b) => b.hot - a.hot);
    console.log('hot:', hot);

    // 如何修改Data数据
    this.setData({
      recommend: data.song_list,
      keyword: hot[0].title
    })

    //计算tabwidth
    wx.getSystemInfo({
      success: (res)=> {
        console.log(res);

        this.setData({
          tabWidth:res.windowWidth/tabs.length
        })
      },
    });

    // 获取tab标签切换的数据（进入只获取当前Tab数据，其他tab待点击时才发起请求）
    let currentType = tabs[activeIndex].type;//1,21
    let currentTabData = await this.getData({ type: currentType,size:3});

    // let tabData = this.data.tabData;
    // tabData[currentType] = currentTabData.song_list;

    let tabData = {
      ...this.data.tabData,
      [currentType]: currentTabData.song_list
    }

    // 热门歌曲数据
    let hotlist = await this.getData({type:2,size:8})
    hotlist = hotlist.song_list;

    this.setData({
      tabData,
      hotlist
    })
  },

  getData({type=2,size=5,offset=0}={}){
    return new Promise((resolve,reject)=>{

      wx.request({
        url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
        data: {
          method: 'baidu.ting.billboard.billList',
          type,
          size,
          offset
        },
        success: ({ data }) => {
          console.log(data);

          resolve(data);
        },
        fail(err){
          reject(err)
        }
      });
    })
  },

  async handlerTabChange(e){
    let {index,type} = e.currentTarget.dataset;
    let sliderOffset = this.data.tabWidth*index;
    this.setData({
      sliderOffset,
      activeIndex:index
    });

    // 切换tab请求数据
    let tabData = this.data.tabData;
    if (tabData[type]) return;

    let currentTabData = await this.getData({type,size:3});
    tabData[type] = currentTabData.song_list;
    this.setData({
      tabData
    })
  },
  
  // gotoSearch(){
  //   wx.navigateTo({
  //     url:'/pages/search/search?keyword='+this.data.keyword
  //   })
  // },
  gotoList(e){
    let {type} = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/list/list?type='+type,
    })
  },
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
