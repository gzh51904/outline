// pages/player/player.js
let app = getApp();
const regeneratorRuntime = require("regenerator-runtime");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    player: null,
    paused:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function({
    songid
  }) {
    console.log('player：', songid);

    // songid = '65626244'

    // 根据songid获取歌曲信息
    let {
      songinfo,
      bitrate
    } = await app.getData({
      method: 'baidu.ting.song.play',
      data: {
        songid
      }
    });

    console.log(songinfo, bitrate);

    this.setData({
      info: {
        ...songinfo,
        ...bitrate
      }
    })
  },

  handlePlay() {
    console.log(666)
    let {player,paused} = this.data;
    if (!player){
      player = wx.createInnerAudioContext();
      player.src = this.data.info.file_link;

      this.setData({
        player
      })
    }

    if (paused) {

      player.play();
    } else {

      player.pause();
    }

    this.setData({
      paused:!paused
    })

    
  },

  handleDownload(e) {
    let {
      type
    } = e.currentTarget.dataset;
    let url = type == 'lrc' ? this.data.info.lrclink : this.data.info.file_link

    // 调用接口下载文件
    wx.downloadFile({
      url,
      success(res) {
        console.log('tempFilePath', res.tempFilePath)
        wx.showToast({
          title: '文件下载成功'
        })
      }
    })
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