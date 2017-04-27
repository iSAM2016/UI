
var MyProgress = (function(box,obj ){
	//obj ===uploader
 	  var MyProgress =  function( box,obj ){
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
				var formData = $('#propertyForm').serializeJson(),
				    files = _myself.obj.getFiles(),
					fileIds=[];
							for(var i =0;i<files.length;i++){

									fileIds.push(files[i].Md5);
								}

							formData.fileIds = fileIds;
								
								$.post("../../FileInFolderAction!SubmitFiles",formData,function(result){
								    alert(result);
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
					      console.log('文件已上传')
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
						 var files = _myself.obj.getFiles();
						 console.log( files.length +'length')
						 var str = "";

						 for( var i = 0; i < files.length; i++ ){
						 
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
						 
						 _myself.box.find(".panel-body").append(str) 
						_myself.begin()
						   

	 	  	},
	 	  
	 	  
	 	 }

 	
	return MyProgress
})()



	var $beginUpload= $('.begin-upload'),
	    $list = $(".ready-to-show"),
	    $filesUploadBox = $("#cd-login"),
        uploader ;// 实例化   

       
	    var uploads = function (){
	    	console.log(WebUploader.create)
			uploader = WebUploader.create({ 
		           auto:false, //是否自动上传
		            pick: {
		                id: '#attach',
		                name:"file",  //这个地方 name 没什么用，虽然打开调试器，input的名字确实改过来了。但是提交到后台取不到文件。如果想自定义file的name属性，还是要和fileVal 配合使用。
		                label: '点击选择文件',
		                multiple:false            //默认为true，true表示可以多选文件，HTML5的属性
		            },
		            swf: './pub/webUploader/Uploader.swf',  //在这里必需要引入swf文件，webuploader初始化要用
		            //fileVal:'multiFile',  //自定义file的name属性，我用的版本是0.1.5 ,打开客户端调试器发现生成的input 的name 没改过来。
		                                             //名字还是默认的file,但不是没用哦。虽然客户端名字没改变，但是提交到到后台，是要用multiFile 这个对象来取文件的，用file 是取不到文件的
		                                             // 建议作者有时间把这个地方改改啊，搞死人了。。
		            server: "../../FileUploadAction",  
		            duplicate:true,//是否可重复选择同一文件
		            resize: false,
		            compress: null,//图片不压缩
		            chunked: true,  //分片处理
		            chunkSize: 5 * 1024 * 1024, //每片5M  
		            chunkRetry:false,//如果失败，则不重试
		            threads:1,//上传并发数。允许同时最大上传进程数。
        });  

					// 开始上传
					uploader.on( "fileQueued", function( file ) {
							console.log(file.id)
			        $list.append("<div class='row ready-to-upload' id='"+ file.id + "'>"+
									"<div class=' col-md-5 col-sm-5 col-xs-5'>"+ file.name + "</div>"+ 
									"<div class=' col-md-5 col-sm-5 col-xs-5  trash'>"+
										"<p class=''>等待上传...</p>" +
									"</div><div class=' col-md-2 col-sm-2 col-xs-2'><button class=\"cancle\"><i class='icon-trash'></i>删除</button></div></div>"
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
        
      					  file.uploadId = Guid.NewGuid().ToString();
      					  file.Md5 = Guid.NewGuid().ToString();

	 				});
			    

										      
						     
							$('#submitFiles').click(function(){
								$(".fix-main-panel").MyProgress(uploader)
							
							});
    
				}; 
			







$.fn.MyProgress = function( option ){
	var _this = this;
	 return this.each(function(){
	 	 if( !this.progress  ) {
	 	 	new MyProgress( _this, option )
	 	 }
	 })
}



 $.fn.beginUpload = function( option ){
	uploads()
}


	

 	


