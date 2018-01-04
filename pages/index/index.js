var flag = true;
Page({
  data: {
    text: "点我试试！"
    // 页面的初始数据
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function () {
    // 用户点击右上角转发
  },
  onPageScroll: function () {
    // 页面滚动触发事件的处理函数
  },
  viewTap: function () { // 其他自定义函数
    if (flag) {
      this.setData({
        text: '再点我试试！'
      })
      flag = false;
    } else {
      this.setData({
        text: '点我试试！'
      })
      flag = true;
    }
  }
})