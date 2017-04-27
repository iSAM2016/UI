

var MyProgress = (function(box,obj ){
	//obj ===uploader
 	  function MyProgress( box,obj ){
 	  	this.obj = obj;
 	  	this.box = box;
 	  	this.filesNumArr = [];
 	  	this.showProgess()

 	  }
 	  MyProgress.prototype = {
 	  	//开始上传文件 触发uploader.upload()
 	  	begin: function(){
 	  			var _myself = this;
 	  	 			_myself.obj.upload();

			    //必须设置uploadFolderId
					
				$("#myfolderId").val($.getLocalStorage ('myfolderId',1000000))


				var formData = $('#propertyForm').serializeJson(),
				    files = _myself.obj.getFiles(),
					fileIds=[];
					
					console.log(formData)



							// close tag 
							$('.cd-user-modal').click();

							for(var i =0;i<files.length;i++){

									fileIds.push(files[i].fileId);
								}

							formData.fileIds = fileIds;
								
								$.post("./FileInFolderAction!SubmitFiles",formData,function(result){
								    $( '.ready-to-show').empty()
								    _myself.obj.getFiles().length = 0;
								  


								});

						// 触发相应事件
						//点击上传按钮之后
					   _myself.obj.on( "uploadStart", function(file){
						  
					   });

					   	//进度条
					     _myself.obj.on("uploadProgress",function(file,percentage){
					     	var myprogress = $("#"+file.id+'progress').find('.progress-bar'),
					     	    n = percentage *100;
					          	myprogress.css("width", n+'%')	
   						});
   


					 	 _myself.obj.on( "uploadSuccess", function( file ) {
					 	 	$("#"+file.id+'progress').find('.progress-all-buttons').empty();
					 	 	$("#"+file.id+'progress').find('.progress-all-buttons').text('上传成功');

					     	    
					   });
					   
   						//出栈
					    _myself.obj.on("fileDequeued",function(file){
						   if(file.uploadState == 'uploaded'){
						   	console.log('文件已上传')
							  
						   }else{
						   	console.log('文件已上传')
							  
						   }
					   });

					    /**上传完成**/
					   	 _myself.obj.on("uploadFinished",function(){});
   
   						/**上出现错误**/
						   _myself.obj.on( "uploadError", function( file ) {
						       $( "#"+file.id ).find("p").text("上传出错");
						       uploader.cancelFile(file);
						       uploader.removeFile(file,true);
						       uploader.reset();
						   });
	 	  	},

	 	  	/*** 创建进度****/
	 	  	showProgess:function(){
	 	  		var _myself = this;

						 //进度条数量
						 var files = _myself.obj.getFiles(),
						     str = "";

						 for( var i = 0; i < files.length; i++ ){
						  if(files[i].uploadState == 'deleted'){

						  }else{

						  	str +='<div class =" progress-all-box" id="'+files[i].id+'progress" for="786">'+
							'<div class="progress progress-striped active myprogress">'+
								'<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"  for="7867" >'+
									'<span class="sr-only">0% 完成</span>'+
								'</div>'+
							'</div>'+
							'<div class="all-buttons main-navs progress-all-buttons " >'+
								'<span>"'+files[i].name+'"</span>'+
								'<span>3kb</span>'+
								'<span>'+
									'<i class="icon-play-circle">暂停</i>'+
								'</span>'+
								'<span>'+
									'<i class="icon-trash"></i>'+
								'</span>'+
							'</div>'+
						'</div>'
						  }
				
					}
						 
						 _myself.box.find(".panel-body").append(str) 
						_myself.begin()
						   

	 	  	},
	 	  
	 	  
	 	 }

 	
	return MyProgress
})()

$.fn.MyProgress = function( option ){
	var _this = this;
	 return this.each(function(){
	 	 if( !this.progress  ) {
	 	 	new MyProgress( _this, option )
	 	 }
	 })
}


jQuery(document).ready(function($){
	var $form_modal = $('.cd-user-modal'),
		$form_login = $form_modal.find('#cd-login'),
		$form_signup = $form_modal.find('#cd-signup'),
		$form_forgot_password = $form_modal.find('#cd-reset-password'),
		$form_modal_tab = $('.cd-switcher'),
		/*$tab_login = $form_modal_tab.children('li').eq(0).children('a'),
		$tab_signup = $form_modal_tab.children('li').eq(1).children('a'),*/
		$forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
		$back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
		$main_nav = $('.main-navs'),
		$login = $main_nav.find( ".cd-signin" ),
		$registe = $main_nav.find( ".cd-signup" ),
		$userRegister = $form_modal.find(".user-register"),
		$userLogin = $form_modal.find(".user-login"),
	    /*$list = $("#thelist");*/
	    $list = $(".ready-to-show"),
	    $filesUploadBox = $("#cd-login"),
	    $filesUploadInfoInputs = $filesUploadBox.find('input')
    var uploader ,
    	fileMd5='',
    	uploadId='';// 实例化   

	//open modal 
	
	 function  showupbox(){
			$form_modal.addClass('is-visible');	
			login_selected();


			uploader = WebUploader.create({ 
		        auto:false, //是否自动上传
		        pick: {
                id: '#attach',
                name:"file",  //这个地方 name 没什么用，虽然打开调试器，input的名字确实改过来了。但是提交到后台取不到文件。如果想自定义file的name属性，还是要和fileVal 配合使用。
                label: '点击选择图片',
                multiple:false            //默认为true，true表示可以多选文件，HTML5的属性
            },
            swf: '../webUploader/Uploader.swf',  //在这里必需要引入swf文件，webuploader初始化要用
                                            
            server: "./FileUploadAction",  
            duplicate:false,//是否可重复选择同一文件
            resize: false,
            compress: null,//图片不压缩
            chunked: true,  //分片处理
            chunkSize: 5 * 1024 * 1024, //每片5M  
            chunkRetry:false,//如果失败，则不重试
            threads:1//上传并发数。允许同/上传并发数。允许同时最大上传进程数。
        });  

					// 开始上传
					uploader.on( "fileQueued", function( file ) {
			        $list.append("<div class='row ready-to-upload' id='"+ file.id + "'>"+
									"<div class=' col-md-5 col-sm-5 col-xs-5'>"+ file.name + "</div>"+ 
									"<div class=' col-md-5 col-sm-5 col-xs-5  trash'>"+
										"<p class=''>等待上传...</p>" +
									"</div><div class=' col-md-2 col-sm-2 col-xs-2'><button class=\"cancle\">删除</button></div></div>"
 								);
			   		
        				//取消文件上传
				        $(".cancle").on('click',function(){
					        	var fileId = $(this).parents('.ready-to-upload').attr('id');
					        	var files = uploader.getFiles();
					         	var file;
					         	for(var i=0;i<files.length;i++){
					         		if(files[i].id == fileId){
					         			file = files[i];
					         			break;
					         		}
					         	}
					         	file.uploadState = 'deleted';
					         	uploader.cancelFile(file);
					         	$('#'+fileId).remove()


					         	
				        });
        
      					
				file.fileId = Guid.NewGuid().ToString();
		        file.fileInFolderId = Guid.NewGuid().ToString();  

			        uploader.option( 'formData', {
			       	    'fileId': file.fileId
			    	});
		 	});
										      
						     
				$('#submitFiles').click(function(){
					  var files = uploader.getFiles();
					  if( !files.length ) {
					  	alert("您还没有选择文件")
					  	return false
					  } else{
					  	// close tag 
						$('.cd-user-modal').click();
						$(".fix-main-panel").css("bottom","0")
						$(".fix-main-panel").MyProgress(uploader)
					  }
					
					});
    
					    
		};

 

	//close modal
	$('.cd-user-modal').on('click', function(event){
		
		
		if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form')  && $(event.target).is('.cd-switcher') ) {
			$form_modal.removeClass('is-visible');
		}	
	});
	



	

	

	//back to login from the forgot-password form
	$back_to_login_link.on('click', function(event){
		event.preventDefault();
		login_selected();
	});

	function login_selected(){

		$form_login.addClass('is-selected');
		$form_signup.removeClass('is-selected');
		$form_login.show();///////////////////////////
		$userLogin.show();
		$form_signup.hide();///////////////////////
		$userRegister.hide();/////////////////////////////
		$form_forgot_password.removeClass('is-selected');
		$tab_login.addClass('selected');
		$tab_signup.removeClass('selected');
	}

	function signup_selected(){
		
		$form_login.removeClass('is-selected');
		$form_signup.addClass('is-selected');
		$form_signup.show();//////////
		$userRegister.show();
		$form_login.hide();///////////////////////
		$userLogin.hide();/////////////////////////////
		$form_forgot_password.removeClass('is-selected');
		$tab_login.removeClass('selected');
		$tab_signup.addClass('selected');
	}

	

	//REMOVE THIS - it's just to show error messages 
	$form_login.find('input[type="submit"]').on('click', function(event){
		//////////////////////////////////////////////////////////////////////////////////////////////
		
		event.preventDefault();
		var val = $("#signin-username").val()
		var passwordVal = $("#signin-password").val()
		
		
		if(  checkMobile( val ) || checkEmail( val ) ){
        $form_login.find('input[type="text"]').removeClass('has-error').next('span').removeClass('is-visible');
		} else {
			$form_login.find('input[type="text"]').addClass('has-error').next('span').addClass('is-visible');
		}

		if(  checkPassword( passwordVal )){
        $form_login.find('input[type="password"]').removeClass('has-error').siblings('span').removeClass('is-visible');
		} else {
			$form_login.find('input[type="password"]').addClass('has-error').siblings('span').addClass('is-visible');
		}


		
	});

	$form_signup.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		$form_signup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});


	//IE9 placeholder fallback
	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	

});


//credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	// If this function exists...
    	if (this.setSelectionRange) {
      		// ... then use it (Doesn't work in IE)
      		// Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      		var len = $(this).val().length * 2;
      		this.setSelectionRange(len, len);
    	} else {
    		// ... otherwise replace the contents with itself
    		// (Doesn't work in Google Chrome)
      		$(this).val($(this).val());
    	}
	});
};

//////////////////////////////////////////////////////////////////////////////

 

