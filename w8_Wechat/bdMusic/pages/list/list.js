// pages/list/list.js
let app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    page:1,
    size:10,
    type:null,
    hasMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function ({type}) {
    type=21;
    // wx.showNavigationBarLoading();
    wx.showLoading({
      title:'加载中...',
      // mask:true
    })

    console.log(type)

    // 获取数据
    let { song_list: datalist} = await app.getData({type,size:10});

    this.setData({
      datalist,
      type
    });
    // wx.hideNavigationBarLoading();
    wx.hideLoading();

    // 动态修改页面标题
    let title = app.globalData.types.filter(item=>item.type==type)[0].title;
    wx.setNavigationBarTitle({
      title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function () {
    let {size,page,type,datalist,hasMore} = this.data;
    page++;//与this.data.page++的区别

    if(!hasMore) return;

    wx.showLoading({
      title: '玩命加载中...',
      mask:true
    })


    // 获取当前页面数据（每页显示条数 size:10）
    // page     offset
    // 1        0
    // 2        10
    // 3        20
    // 推导公式：offset = size*(page-1)
    let offset = size * (page - 1);
    let data = await app.getData({type,size,offset});
    let song_list = data.song_list;

    if (song_list === null || song_list.length < size){
      hasMore = false;
    }

    if (song_list === null){
        song_list = [];
    }


    this.setData({
      page,
      datalist:[
        ...datalist,
        ...song_list
      ],
      hasMore
    });

    wx.hideLoading();

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})