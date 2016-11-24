/**
 * tools an alltools
 */
 let gettools = (fn,myvm,num)=>{
     
    $.ajax({
          url: 'http://tools',
      }).done(function(info, status, xhr){
         
          let datas = JSON.parse(info).array
          console.log(datas)

          setTimeout( ()=>fn( datas,num ) ,100)

          
      })

      
  }

  let  searchtools = (fn,myvm,keyworld) =>{
     
           $.ajax({
          url: 'http://searchtools',
      }).done(function(info, status, xhr){
         
          let datas = JSON.parse(info).array

          setTimeout( ()=>fn(  datas ) ,100)

          
      })

      
  }


   let getalltools = (fn,myvm,num)=>{
    $.ajax({
          url: 'http://alltools',
      }).done(function(info, status, xhr){
         
          let datas = JSON.parse(info).array
          console.log(datas)

          setTimeout( ()=>fn( datas ) ,100)

          
      })

      
  }


export default  {
    gettools,
   searchtools,
   getalltools
   

   
      
}

     /* myvm.$http.get('./FolderAction!GetFolderCotent?curFolderId='+123)
          .then(function(ret) {
               datasAll = JSON.parse(ret.data).files.concat(JSON.parse(ret.data).childFolders);
              
                 setTimeout( ()=>fn(  datasAll ) ,100)
             
            
          })
          .then(function(err) {
           
          })*/



  