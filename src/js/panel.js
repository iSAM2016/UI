import Vue from "vue"

Vue.directive('panel', {
  twoWay: true,
  priority: 1000,

  params: [
    
  ],
    
  bind(el, binding, vnod) {

  },
  update(el, binding, vnod) {
    console.log(binding)
    console.log(vnod)
    var _self = this,
       k=null
       console.log(154545)
    if(obj.isbutton){//有按钮

      var pIcon = $(el).find("#pIcon");
      var  buttons = $(el).find("button");
     
          function fn1  (){
            console.log(12121)
             _self.set(  {key:true,isbutton: true})
                  pIcon.off("click",)
                  buttons.on("click",fn2)
          }
         
         function fn2  (){
             _self.set(  {key:false,isbutton: true})
                  pIcon.on("click",fn1)
                  buttons.off("click")
          }

         pIcon.on("click",fn1)

         


    }else{//没有按钮
          
          if(obj.key){
             k = 1 
          }else{
              k = 0
          }
          $(el).find("#pIcon").on("click",function(){
             k+=1
              if(k%2 === 0){
                  _self.set(  {key:false,isbutton: false})

              }else{
                  _self.set(  {key:true,isbutton: false})
                  console.log(1)
                
              }

      })
  }
  
     
   


  },
  unbind: function (el, binding, vnod) {
   $(el).find("#pIcon").off("click")
  
   
  }
})

