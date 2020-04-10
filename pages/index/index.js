var QQMapWX=require('../../qqmap-wx-jssdk.js')
var qqmapsdk
Page({
  /**
  * 页面的初始数据
  */
 data: {
  latitude: '',
  longitude: '',
  positionData: ''
 },
  onLoad: function(){
    var _this = this
    //实例化API核心
    qqmapsdk=new QQMapWX({
      key: 'QYMBZ-SGAWF-3ATJX-JUCPC-GU2EH-QDFUY'
    });
    wx.getLocation({
      success: function(res){
        var latitude=res.latitude
        var longitude=res.longitude
        qqmapsdk.reverseGeocoder({
          success:function(res){
            var address=res.result.address;
            _this.setData({
              positionData:address
            })
          }
        })
      }
    })
  }
  
})