<style  lang = "sass" >
 

</style>
<template>
  <section >

    <ol-tree 
      :trees="tree.options">
    </ol-tree>            
          
  

    <div>
        <h4>
          #loading
        </h4>
           <pre>
           
           </pre>
          
                
        
   </div>  
      
  </section>
</template>
<script>
const options = [{
    // label 是级联选项展示值
    label: '中国',

    // value 是对象自定义属性
    value: 'china',
    // 也可以自定义其他属性
    sku: '2234234',
    id: 'j4jb345jb34j5',

    // 该对象的子选项数组
    children: [{
        value: 'sichuan',
        label: '四川',
        children: [{
            value: 'chegndu',
            label: '成都'
        }, {
            value: 'deyang',
            label: '德阳'
        }]
    }]
},
{
    // label 是级联选项展示值
    label: '美国',

    // value 是对象自定义属性
    value: 'china',
    // 也可以自定义其他属性
    sku: '2234234',
    id: 'j4jb345jb34j5',

    // 该对象的子选项数组
    children: [{
        value: 'sichuan',
        label: '加州',
        children: [{
            value: 'chegndu',
            label: '纽约'
        }, {
            value: 'deyang',
            label: '的卓'
        }]
    }]
}]

var deepCopy= function(source) { 
  

    source.forEach(source =>{

        if(!!source["children"]){
            source.show = false
            deepCoyp(source["children"])

        }else{
          source.show = false

          return true;
        } 
         
    })
        
   return source; 
}
import { olTree }from '../index'

export default {
    components: { 
     olTree
    },

    data () {
        return {
            tree: {
                options: options,
                valueArr: []
            }
        }
      
    },
}

</script>