<style  lang = "sass" >
 

</style>
<template>
  <section >

    <ol-select 
      :select="form.selectProvince">
    </ol-select>            
          
          <ol-select 
      :select="form.selectProvince1">
    </ol-select>

     <ol-select 
      :select="form.selectProvince3">
    </ol-select>

  
  </section>
</template>
<script>
import { olSelect }from '../index'

  export default {
    components: { 
     olSelect
    },

    data () {
      return {
        form: {
                selectProvince: {
                   
                    multiple: true, // 是否多选
                    search: true,
                    key: 'selectProvince',
                    value: [],//value: 
                    options: [{
                        selected: true,
                        disabled: false,
                        value: '成都',
                        id: 1
                    }, {
                        selected: false,
                        disabled: false,
                        value: '北京',
                        id: 2
                    }, {
                        selected: false,
                        disabled: false,
                        value: '深圳',
                        id: 3
                    }]
                },
                  selectProvince1: {
                   
                    multiple: false, // 是否多选
                    search: false,
                    key: 'selectProvince',
                    value: [],//value: 
                    options: [{
                        selected: true,
                        disabled: false,
                        value: '成都',
                        id: 1
                    }, {
                        selected: false,
                        disabled: false,
                        value: '北京',
                        id: 2
                    }, {
                        selected: false,
                        disabled: true,
                        value: '深圳',
                        id: 3
                    }]
                },
                selectProvince3: {
                    disabled: true,
                    multiple: false, // 是否多选
                    search: false,
                    key: 'selectProvince',
                    value: [],//value: 
                    options: [{
                        selected: true,
                        disabled: false,
                        value: '成都',
                        id: 1
                    }, {
                        selected: false,
                        disabled: false,
                        value: '北京',
                        id: 2
                    }, {
                        selected: false,
                        disabled: true,
                        value: '深圳',
                        id: 3
                    }]
                }
            }
        }
    },
    
    events: {
      
    }
  }

</script>