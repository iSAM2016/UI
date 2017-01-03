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
    // label 是级联选项展
    label: '中国',
    id: 1,
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
        id: 2,
        children: [{
            value: 'chegndu',
            label: '成都',
            id: 3,
            show: false,
            radio : {
                checked: false,
            },

        }, {
            value: 'deyang',
            label: '德阳',
            id: 4,
            show: false,
            radio : {
                checked: false,
            },
        },
            {
            value: 'deyang',
            label: '重庆',
            id: 14,
            show: false,
            radio : {
                checked: false,
            },
        }]
    },
    {
        value: 'sichuan',
        show: false,
        radio : {
            checked: false,
            },
        label: '河北',
        id: 2,
        children: [{
            value: 'chegndu',
            label: '石家庄',
            id: 3,
            show: false,
            radio : {
                checked: false,
            },
        }, {
            value: 'deyang',
            label: '承德',
            id: 4,
            show: false,
            radio : {
                checked: false,
            },
        }]
    }]
},
{
    // label 是级联选项展
    label: '美国',
    id: 5,
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
        id: 6,
        children: [{
            value: 'chegndu',
            show: false,
            radio : {
                checked: false,
            },
            label: '纽约',
            id: 7,
        }, {
            value: 'deyang',
            show: false,
            radio : {
                checked: false,
            },
            label: '的卓',
            id: 8,       
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