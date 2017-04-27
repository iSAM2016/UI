(function(){
  $.setLocalStorage = function(key, value){
  	var curtime = new Date().getTime()
	 localStorage.setItem( key, JSON.stringify({data:value, time: curtime}))
  }

  $.getLocalStorage = function(key, exp){
  	/*return 'ae7e24b3-dbff-44ed-b6ea-458b15a8782d'*/
  	var data = localStorage.getItem( key );
	var dataObj = JSON.parse( data )
  	return (dataObj.data)
	  /*if( new Date().getTime() -  dataObj.time > exp  ){
	   			console.log( 'express' )
	   		}else {
	   						
	   			}*/
  }
  $(document).off('click.bs.dropdown.data-api');
//自动展开
$('.nav .dropdown').mouseenter(function(){
    
 $(this).addClass('open');
});
//自动关闭
$('.nav .dropdown').mouseleave(function(){
 $(this).removeClass('open');
});             
    
})(jQuery)			

	   
   				