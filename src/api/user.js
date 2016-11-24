
   const setLocalStorage =  (key, value) =>{
     let curtime = new Date().getTime()
	 localStorage.setItem( key, JSON.stringify({data:value, time: curtime}))
  }

     const  getLocalStorage = (key, exp) =>{
  	/*return 'ae7e24b3-dbff-44ed-b6ea-458b15a8782d'*/
  	var data = localStorage.getItem( key );
	var dataObj = JSON.parse( data )
  	return 'ae7e24b3-dbff-44ed-b6ea-458b15a8782d'
	  /*if( new Date().getTime() -  dataObj.time > exp  ){
	   			console.log( 'express' )
	   		}else {
	   						
	   			}*/
  }
	
 export default { setLocalStorage, getLocalStorage }	


/* */
 // 定义生成器函数
/*function *enumerable(msg){
  console.log(msg)
  var msg1 = yield msg + '  after '
  console.log(msg1)
  var msg2 = yield msg1 + ' after'
  try{
    var msg3 = yield msg2 + 'after'
    console.log('ok')
  }
  catch(e){
    console.log(e)
  }
  console.log(msg2 + ' over')
}

// 初始化迭代器
var enumerator = enumerable('hello')
var ret = enumerator.next() // 控制台显示 hello，ret的值{value:'hello after',done:false}
ret =  enumerator.next('world') // 控制台显示 world，ret的值{value:'world after',done:false}
ret = enumerator.next('game') // 控制台显示game，ret的值{value:'game after',done:false}
// 抛出异常信息
console.log(ret)
ret = enumerator.throw(new Error('test')) // 控制台显示new Error('test')信息，然后显示game over。ret的值为{done:true}

// for...of语句
//enumerator = enumerable('hello')
//for(ret of enumerator)
 // console.log(JSON.stringify(ret));
// 控制台依次显示
// hello
// {value:'hello after',done:false}
// world
// {value:'world after',done:false}
// {value:'game after',done:false}
// game over
// {done:true}*/
/*var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)) {
  console.log(f);
}*/
// 