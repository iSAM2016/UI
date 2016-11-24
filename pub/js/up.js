$(function() {
    var uploader = WebUploader.create({
    	pick:{
            id: '#picker',
            name:"file",  //这个地方 name 没什么用，虽然打开调试器，input的名字确实改过来了。但是提交到后台取不到文件。如果想自定义file的name属性，还是要和fileVal 配合使用。
            label: '点击选择图片',
            multiple:false            //默认为true，true表示可以多选文件，HTML5的属性
        },
    	chunked:true, 
    	chunkSize: 5 * 1024 * 1024, //每片5M  
    	threads:1,//上传并发数。允许同时最大上传进程数。
    	resize:false, 
    	swf:'/allTest/pub/swf/Uploader.swf', 
    	server:'../FileUpload', 
    	auto:true
    	});
});

//移除不需要上传的文件
function delf(node) {
    if(confirm("确定不需要上传该文件吗？")) {
        var item = node.parentNode.parentNode;
        uploader.removeFile(item.id, true);
        $(item).remove();
    }
}