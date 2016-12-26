<style  lang = "sass" ></style>
<template>
    <section >

        <ol-tree 
      :trees="tree.options"></ol-tree>

        <div>
            <h4>#loading</h4>
            <pre></pre>

        </div>

    </section>
</template>
<script>
const options = [{
    // label 是级联选项展示值
    label: '中国',
    show: false,
    radio : {
            checked: false,
            },
    children: [{
        value: 'sichuan',
        show: false,
        radio : {
            checked: false,
            },
        label: '四川',
        children: [{
            value: 'chegndu',
            label: '成都',
            show: false,
            radio : {
                checked: false,
            },
        }, {
            value: 'deyang',
            label: '德阳',
            show: false,
            radio : {
                checked: false,
            },
        }]
    }]
},
{
    // label 是级联选项展示值
    label: '美国',
    show: false,
            radio : {
                checked: false,
            },

    children: [{
        value: 'sichuan',
        show: false,
            radio : {
                checked: false,
            },
        label: '加州',
        children: [{
            value: 'chegndu',
            show: false,
            radio : {
                checked: false,
            },
            label: '纽约'
        }, {
            value: 'deyang',
            show: false,
            radio : {
                checked: false,
            },
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