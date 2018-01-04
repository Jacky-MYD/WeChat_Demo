//app.js
App({
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('生命周期函数--监听小程序显示')
  },
  onHide: function () {
    console.log('生命周期函数--监听小程序隐藏')
  },
  onError: function () {
    console.log('错误监听函数')
  }
})