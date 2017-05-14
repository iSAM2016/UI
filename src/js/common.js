(function ($) {
    $.fn.serializeJson = function () {
        var serializeObj = {};
        var array = this.serializeArray();
        var str = this.serialize();
        $(array).each(function () {
            if (serializeObj[this.name]) {
                if ($.isArray(serializeObj[this.name])) {
                    serializeObj[this.name].push(this.value);
                } else {
                    serializeObj[this.name] = [serializeObj[this.name], this.value];
                }
            } else {
                serializeObj[this.name] = this.value;
            }
        });
        return serializeObj;
    };


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


$.request = function(paras)
    { 
        var url = location.href; 
        var paraString = url.substring(url.indexOf("?")+1,url.length).split("&"); 
        var paraObj = {} 
        for (i=0; j=paraString[i]; i++){ 
        paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length); 
        } 
        var returnValue = paraObj[paras.toLowerCase()]; 
        if(typeof(returnValue)=="undefined"){ 
        return ""; 
        }else{ 
        return returnValue; 
        } 
    }
  

})(jQuery);


function Guid(g){

    var arr = new Array(); //存放32位数值的数组

   

    if (typeof(g) == "string"){ //如果构造函数的参数为字符串

        InitByString(arr, g);

    }

    else{

        InitByOther(arr);

    }

    //返回一个值，该值指示 Guid 的两个实例是否表示同一个值。

    this.Equals = function(o){

        if (o && o.IsGuid){

             return this.ToString() == o.ToString();

        }

        else{

             return false;

        }

    }

    //Guid对象的标记

    this.IsGuid = function(){}

    //返回 Guid 类的此实例值的 String 表示形式。

    this.ToString = function(format){

        if(typeof(format) == "string"){

             if (format == "N" || format == "D" || format == "B" || format == "P"){

                  return ToStringWithFormat(arr, format);

             }

             else{

                  return ToStringWithFormat(arr, "D");

             }

        }

        else{

             return ToStringWithFormat(arr, "D");

        }

    }

    //由字符串加载

    function InitByString(arr, g){

        g = g.replace(/\{|\(|\)|\}|-/g, "");

        g = g.toLowerCase();

        if (g.length != 32 || g.search(/[^0-9,a-f]/i) != -1){

             InitByOther(arr);

        }

        else{

             for (var i = 0; i < g.length; i++){

                  arr.push(g[i]);

             }

        }

    }

    //由其他类型加载

    function InitByOther(arr){

        var i = 32;

        while(i--){

             arr.push("0");

        }

    }

    /*

    根据所提供的格式说明符，返回此 Guid 实例值的 String 表示形式。

    N  32 位： xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    D  由连字符分隔的 32 位数字 xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

    B  括在大括号中、由连字符分隔的 32 位数字：{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}

    P  括在圆括号中、由连字符分隔的 32 位数字：(xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)

    */

    function ToStringWithFormat(arr, format){

        switch(format){

             case "N":

                  return arr.toString().replace(/,/g, "");

             case "D":

                  var str = arr.slice(0, 8) + "-" + arr.slice(8, 12) + "-" + arr.slice(12, 16) + "-" + arr.slice(16, 20) + "-" + arr.slice(20,32);

                  str = str.replace(/,/g, "");

                  return str;

             case "B":

                  var str = ToStringWithFormat(arr, "D");

                  str = "{" + str + "}";

                  return str;

             case "P":

                  var str = ToStringWithFormat(arr, "D");

                  str = "(" + str + ")";

                  return str;

             default:

                  return new Guid();

        }

    }

}

Guid.Empty = new Guid();

//初始化 Guid 类的一个新实例。

Guid.NewGuid = function(){

   var g = "";

   var i = 32;

   while(i--){

       g += Math.floor(Math.random()*16.0).toString(16);

   }

   return new Guid(g);

}



         

       
