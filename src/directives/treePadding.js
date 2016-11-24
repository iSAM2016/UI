import Vue from "vue"

Vue.directive('select', {
  twoWay: true,
  priority: 1000,

  params: [],
    
  bind: function (el) {
  
    var self = this
    $(el).find("ul").each((index,item)=>{

      //console.log(index)
       $(item).find("li").find("div").css("paddingLeft",42*index)
       $(item).find("li").find(".bold").css("paddingLeft",26*index)
    })

    $(el).on("mousedown",(ev) => {
        let self = $(el);
        let _x=ev.pageX-parseInt(self.css("left")); 
        let _y=ev.pageY-parseInt(self.css("top")); 
       
       $(document).on("mousemove",(ev) =>{
        let x = ev.pageX- _x;
        let y = ev.pageY - _y

        
          self.css("left", x)
          self.css("top", y )
          
       })

        $(document).on("mouseup",(ev) =>{
      
          $(document).unbind("mousemove")
          $(document).unbind("mouseup")
       })
      
  return false
      
    })
     
  },
  update: function (value) {
   // $(this.el).val(value).trigger('change')
  },
  unbind: function () {
    //$(this.el).off().select2('destroy')
  }
})

