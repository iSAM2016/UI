<style  lang = "sass" >
</style>
<template>
  <section >

    <ol-cascader 
      :cascader="cascader">
    </ol-cascader>            
    
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
}]

import { olCascader }from '../index'

export default {
    components: { 
     olCascader
    },

    data () {
        return {
            cascader: {
                options: options,
                valueArr: []
            }
        }
      
    },
}

</script>