 import '../directives/treePadding.js';  		
  
		$(window).resize(function(){

          	var height =  $(window).height() - $('.main-contant').outerHeight(true) - $(".breadcrumb").outerHeight(true) - $(".main-resource-title").outerHeight(true) - $(".my-data-select").outerHeight(true) 
            $('.main-resource-data').slimscroll({
                          height: height,
                          width: 'auto', //可滚动区域宽度
                          size: '8px', //组件宽度
                          opacity: .3, //滚动条透明度
                          distance: '0px', //组件与侧边之间的距离
                          railColor: '#333', //轨道颜色
                          railOpacity: .2, //轨道透明度
                          railDraggable: true, //是否 滚动条可拖动
                  });
        });



 