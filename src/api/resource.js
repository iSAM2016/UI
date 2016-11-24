/**
 * Mocking client-server processing
 */


var _products = [
 {"fileId":"6300f737-f66c-4312-a846-ae19183eb191","createTime":"2016-08-22 15:04:18","testProperty":"","fileName":"FileZilla_3.20.1_win64-setup.exe","folderId":"ae7e24b3-dbff-44ed-b6ea-458b15a8782d"},
 {"fileId":"283f0ffa-b4b4-4506-b6c2-2edbec692ae1","createTime":"2016-08-19 12:52:56","testProperty":"","folderId":"ae7e24b3-dbff-44ed-b6ea-458b15a8782d"},
 {"createTime":"2016-08-17 14:52:49","testProperty":"2323","name":"text6735","folderId":"3593da5d-ba23-47c6-bfa4-45a9b8c9a1ab"},
 {"createTime":"2016-08-23 16:52:25","testProperty":" ","name":"lklklklk","folderId":"25f31704-fe04-465d-b25b-f121eb087d15"}
]
 let datasAll = null,
      myuserId = null,
      myvm = null


        

      

/*export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}*/

export default  {

 /* getResource(fn, folderId){
     ajaxGetReource(fn, folderId)
    
  },*/

  getResource(fn,vm,userId){
      myuserId = userId;
      myvm = vm;

      /***************************发布的时候改动****************************/
      //ajaxGetReource(myvm)
      setTimeout( ()=>fn(  _products ) ,100)
  }
}

 const  ajaxGetReource  = ( myvm ) =>{
    
      myvm.$http.get('./FolderAction!GetFolderCotent?curFolderId='+123)
          .then(function(ret) {
               datasAll = JSON.parse(ret.data).files.concat(JSON.parse(ret.data).childFolders);
              
                 setTimeout( ()=>fn(  datasAll ) ,100)
             
            
          })
          .then(function(err) {
           
          })
  }