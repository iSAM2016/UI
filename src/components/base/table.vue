<style lang="sass" >
.ol-table{
  width: 100%;
  max-width: 100%;
  text-align: left;

    // Cells
    > thead,
    > tbody,
    > tfoot {
      > tr {
            color: rgba(0, 0, 0, 0.870588);
            height: 3rem;
            border-bottom: 1px solid #e9e9e9;
            &:hover {
                background: #f1f4f9;
            }
          
          
        }
      }


  > thead > tr {
      >th,
      >td{
            

      }
    } 
  
}


.ol-table-td {
    position: relative;
    font-size: .8rem;
    text-align: left;
    padding: 1rem .5rem;
    text-align: center;
}

.ol-table-state {
    font-size: .8rem;
    padding: .2rem .5rem;
    background: #a5a5a5;
    color: #fff;
    &.success {
        background-color: #87d068;
    }
    &.info {
        background-color: #2db7f5;
    }
    &.warning {
        background-color: #fa0;
    }
    &.failed {
        background-color: #f50;
    }
}

.ol-table-td.sort-icon {
    padding-right: 1.5rem;
}
.ol-table-td .ol-btn {
    margin-right: .5rem;
}
.ol-table-check-col {
    padding-left: .5rem;
}


.ol-table-sort-icon {
    position: absolute;
    top: 2.1rem;
    right: .5rem;
    &.active {
        transform: rotate(180deg);
    }
}
.tabel-avatar{
  height: 2rem;
  border-radius: 2rem;
}
@media screen and (max-width: 768px) {
    .ol-table-td {
        padding: 0 .5rem;
        font-size: .8rem;
    }
}

</style>
<template>
     <table class="ol-table">
        <thead class="ol-table-heade">
          <tr class="ol-table-th">
             <th 
                v-if="table.options.select"
                class="ol-table-check-col"
                >
                <ol-checkbox :checkbox="selectAll" />
             </th>

             <th
                v-for="col in this.table.columns"
                class="ol-table-td"
                :class="{'sort-icon': col.sort }"
                @click="touchCol($event, col)"
                track-by="$index"
              >
                {{ col.value }}
                 <span 
                        v-if="col.sort" 
                        class="ol-table-sort-icon icon-angle-down icon-2x"
                        :class="{ 'active': col.sort.state }"
                    ></span>
              </th>
               <th class="ol-table-td" v-if="table.options.state">
                    {{ table.options.state.text ? table.options.state.text: '状态'}}
                </th>
                <th class="ol-table-td" v-if="table.actions">
                    {{ table.options.action && table.options.action.text ? table.options.action.text: '操作'}}
                </th>
          </tr>
        </thead>

        <tbody class="ol-table-tbody">
          <tr 
            v-for="item in dataList"
            track-by="$index"
          >
            <td
              v-if="item.checkbox"
              class="table-check-col"
            >
              <ol-checkbox :checkbox="item.checkbox"/>
            </td>


            <td
              class="ol-table-td"
              v-for=" val in item._value"
              track-by="$index"
              >

                <div v-if="val && typeof val === 'object'">
                   <img 
                      v-if="val.type ==='image'"     
                      :src="val.src"
                      :class="val.class">
                    <div 
                      v-if="val.type === 'raw' " 
                      :class="val.class" 
                      v-html="val.value"
                      >
                    </div>   

                </div>
                <div v-else>{{val}}</div>
            
            </td>

            <td
              class="ol-table-td"
              v-if="item.state"
            >
              <span 
                :class="stateTagClass(item.state)" 
                class="ol-table-state"
              >
                 {{item.state.value}}
              </span>
            </td>
            <td
              class="ol-table-td" 
               v-if="table.actions || item._actions"
            >
              <ol-button
                v-for="action in table.actions"
                  :size="action.size || 'small'" 
                  :type="action.type"
                  :icon="action.icon"
                  :loading="action.loading"
                  :disabled="action.disabled"
                  @click.native ="action.func($event, item)"
              >
                {{ action.text }}
              </ol-button>
               <ol-button
                v-for="action in item.__actions"
                  :size="action.size || 'small'" 
                  :type="action.type"
                  :icon="action.icon"
                  :loading="action.loading"
                  :disabled="action.disabled"
                  @click.native ="action.func($event, item)"
              >
                {{ action.text }}
              </ol-button>
            </td>


          </tr>
         
        </tbody>
     </table>
</template>
<script>
  import olCheckbox from '../form/checkbox.vue'
  import olButton from './button.vue'

const throwErr = (err)=>{
  if(err == "notNum"){
   throw "empty";
  }
} 
   //将data 数据按照 colum 的属性index 进行划分
  //data processing
  const generateList = (columns, tableData) =>{
    //arr sort
    let cols = columns.sort((a,b) => {

      isNaN(Number(a.index))? throwErr('notNum') :isNaN(Number(b.index))? throwErr('notNum') : ""
       return a.index - b.index
    })

    let MAP = {}
    cols.forEach((col,index) =>{
      MAP[col.key] = index + 1
    })

    let List = [];

   
   

    tableData.forEach(item =>{
      var itemTem = {
        _value:[]
      }

      Object.keys(item).forEach( keyname =>{
         itemTem[ keyname ] = item[keyname]
         if(MAP[ keyname ]){
          itemTem._value[MAP[keyname] -1] = item[keyname]
         }
      })
    List.push(itemTem)
    })

    return List

  }


  export default {
    ready(){

      
    },
    mounted (){
    
        },

    props:{
        table:{
          type: Object
          
        }
         
    },

    components: { 
      olCheckbox,
      olButton
    },

    computed: {
       dataList: function (){
         return  generateList(this.table.columns,this.table.tableData)
       }
    },

    data () {
      return {
           selectAll: {
                  checked: false,
                  text: ""
                      },
                
      }
    },

     watch: {
        'selectAll.checked' (val) {
          console.log(val)
            this.selectAllAction(val)
        }
    },
    
    events: {
      
    },

    methods:{
      stateTagClass (state) {
            let classList = {}
            classList[state.type] = true
            return classList
        },

      selectAllAction(val){
        this.table.tableData.forEach(row =>{
           row.checkbox.checked = val
        })
      },

      touchCol(e,col){
        if(col.sort && col.sort.func){

           col.sort.func( e,col )
        }
      }
    }
  }

</script>
