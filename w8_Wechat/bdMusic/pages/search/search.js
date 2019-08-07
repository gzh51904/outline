// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: true,
    inputVal: "",
    result:[],
    timer:null
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: "",
      result:[]
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });


    // 防抖
    clearTimeout(this.data.timer);
    this.data.timer = setTimeout(()=>{
      // 如果输入框为空，则不发起请求
      if (e.detail.value.trim() == '') return;
      this.getData(e.detail.value)
    },600)
  },

// 获取歌曲大小（m）
  getSize(size){console.log(size)
    return (size / 1024 / 1024).toFixed(1)
  },

  getData(keyword){
    // 发起请求，获取数据
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
      data: {
        method: 'baidu.ting.search.catalogSug',
        query:keyword || this.data.keyword,
      },
      success: ({
        data
      }) => {
        console.log('search:', data);

        // 如何修改Data数据
        this.setData({
          result: data.song
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);

    // setData不会立即修改data属性，而是进入一个队列
    this.setData({
      inputVal: options.keyword
    });

    this.getData(options.keyword);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})