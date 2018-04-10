//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    text: 'init data',
    array: [{ msg: '1' }, { msg: '2' }],
    num: 0,
    array: [{ text: 'init data' }],
    object: {
      text: 'init data2'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad function!')
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onReady: function () {
    // Do something when page ready.
    console.log('onReady function!')
  },
  onShow: function () {
    console.log('onShow function!')
    // Do something when page show.
  },
  onHide: function () {
    console.log('onHide function!')
    // Do something when page hide.
  },
  onUnload: function () {
    console.log('onUnload function!')
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh function!')
    // Do something when pull down.
  },
  onReachBottom: function () {
    console.log('onReachBottom function!')
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    console.log('onShareAppMessage function!')
    // return custom share data when user share.
    return {
      title: '自定义转发标题4',
      path: 'pages/logs/logs'//用户点击了分享的链接后，就会跳转到指定的页面
    }
  },
  onPageScroll: function () {
    console.log('onPageScroll function!')
    // Do something when page scroll
  }
,
  viewTap: function () {
    console.log('view tap')
  },

  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function () {
    this.data.num ++
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function () {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text': 'changed data'
    })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  }

})
