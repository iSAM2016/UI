<style  lang = "stylus" >
</style>
<template>
  <section>
    <div>
      <h4>
        #标签
      </h4>
       <ol-table :table="TableData" />
    </div>  

   
  </section>
</template>
<script>
import { olTable } from '../index'

  export default {
    data () {
        return {
            TableData: {
                options: {
                    select: true,
                    state: true
                },
                columns: [{
                    index: 0,
                    key: 'id',
                    value: 'ID',
                    sort: {
                        state: false,
                        func: (e, col) => {
                    
                            this.sortBy(col)
                        }
                    }
                }, {
                    index: 1,
                    key: 'avatar',
                    value: '头像'
                }, {
                    index: 2,
                    key: 'name',
                    value: '姓名'
                }, {
                    index: 3,
                    key: 'age',
                    value: '年龄',
                    sort: {
                        state: false,
                        func: (e, col) => {
                            this.sortBy(col)
                        }
                    }
                }, {
                    index: 4,
                    key: 'wechat',
                    value: '微信'
                }],


                actions: [{
                    type: 'primary',
                    text: '编辑1',
                    func: (e, row) => {
                        this.editTable(row)
                    }
                }, {
                    type: 'danger',
                    text: '删除',
                    func: (e, row) => {
                        console.log(row)
                        this.removeTableItem(row)
                    }
                }],



                tableData: [{
                    id: 1,
                    avatar: {
                        type: 'image',
                        class: ['tabel-avatar'],
                        src: './static/icon-me.jpg'
                    },
                    name: '李云龙',
                    age: '33',
                    wechat: 'wangnima',
                    state: {
                        type: 'success',
                        value: '批准'
                    },
                    __actions: [{
                        type: 'success',
                        disabled: true,
                        text: '私有',
                        func: (e, row) => {
                            console.log(row)  
                            this.removeTableItem(row)
                        }
                    }],
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }, {
                    id: 2,
                    avatar: {
                        type: 'image',
                        class: ['tabel-avatar'],
                        src: './static/icon-me.jpg'
                    },
                    name: '孔杰',
                    age: '26',
                    wechat: 'Iron-column-zhao',
                    __actions: [{
                        type: 'warning',
                        text: '私有',
                        func: (e, row) => {
                            console.log(row)
                            this.removeTableItem(row)
                        }
                    }],
                    state: {
                        type: 'info',
                        value: '待审'
                    },
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }, {
                    id: 3,
                    avatar: {
                        type: 'image',
                        class: ['tabel-avatar'],
                        src: './static/icon-me.jpg'
                    },
                    name: '赵四',
                    age: '27',
                    wechat: 'Michael Jack',
                    state: {
                        type: 'failed',
                        value: '拒绝'
                    },
                    __actions: [{
                        type: 'success',
                        loading: true,
                        text: '私有',
                        func: (e, row) => {
                            console.log(row)
                            this.removeTableItem(row)
                        }
                    }],
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }]
            }
        }
    },
    components: {
        olTable,
      
    },
    methods: {
        editTable (row) {
          console.log(row)
            this.$Notification.success('正在编辑' + row._value[0], '', 5000)
        },
        removeTableItem (row) {
            this.TableData.tableData.forEach(item => {
                if (item.id === row.id) {
                    this.TableData.tableData.$remove(item)
                }
            })
            this.$Notification.success('删除' + row._value[0] + '成功', '', 5000)
        },

        sortBy(col){
             if( !col._sort ){
                let arr= this.TableData.tableData.sort((item1,item2)=>{
                        return item2[col.key] - item1[col.key]
                          
                })    
              col._sort = true 
             }else{
                let arr= this.TableData.tableData.sort((item1,item2)=>{
                        return item1[col.key] - item2[col.key]
                          
                })  

                 col._sort = false 
             }

              
             
          }
    }
}




</script>