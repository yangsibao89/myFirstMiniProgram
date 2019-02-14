// pages/weekly/weekly.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weeklyMovieList: [{
        name: "教父",
        comment: "仁慈的父我已坠入看不见罪的国度",
        imagePath: "/images/godfather.jpg",
        isHighlyRecommend: true
      },
      {
        name: "爆裂无声",
        comment: "该看不看的",
        imagePath: "/images/1.jpg",
        isHighlyRecommend: true
      }, {
        name: "狗十三",
        comment: "让我想起一条叫小黄的狗",
        imagePath: "/images/dog13.jpg",
        isHighlyRecommend: true
      }
    ],
    count: 10,
    score: 67,
    // currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1,
    })
  },

  testBindTap: function (event) {
    this.setData({
        count: this.data.count + 1,
        "weeklyMovieList[2].name": "godfather 3"
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
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})