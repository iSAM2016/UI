<template>
    <ol-cascader 
      :cascader="cascader">
    </ol-cascader>            
</template>
<script>
let options = [{
    // label 是级联选项展示值
    label: '中国',
    show:false,
    // value 是对象自定义属性
    value: 'china',
    // 也可以自定义其他属性
    children: [{show:false,
        value: 'sichuan',
        label: '四川',
        children: [{ show:false,
            value: 'chegndu',
            label: '成都'
        }, { show:false,
            value: 'deyang',
            label: '德阳'
        }]
    }]
},{
    label: '美国',
    value: 'usa',
    show:false,
    children: [{ show:false,
        value: 'sichuan',
        label: '纽约',
        children: [{ show:false,
            value: 'chegndu',
            label: '白宫'
        }, { show:false,
            value: 'deyang',
            label: '五角大楼'
        }]
    }]
}]

import { olCascader } from '../index.js'
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