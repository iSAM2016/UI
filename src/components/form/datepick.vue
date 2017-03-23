<style lang="stylus">
.clearfix:before, .clearfix:after {   
    content:"";   
    display:table;   
}   
.clearfix:after{   
    clear:both;   
    overflow:hidden;   
}   
.clearfix{   
    *zoom:1;   
} 
.ol-datepick-section{
     position:relative;
}


.ol-datepick{
   
    position:absolute;
    top: 4rem;
    left:.2rem;
    width: 16rem;
    border: 1px solid rgba(0,0,0,.1);
    background: #fff;
    z-index: 1111111;

        span {
            display: inline-block;
            float: left;
            height: 2.2rem;
            width: 2.2rem;
            text-align: center;
            line-height: 2.2rem;
            margin-bottom: .4rem;
            cursor:pointer;

                &:hover,
                &:active{

                    background: #2db7f5
                };

                &.glay{
                    color: #ccc;
                };

                &.active{
                    background: #2db7f5
                };
        };
        .ol-chosedate{
            text-align: center;
            width: 100%;
                a{
                    display: inline-block;
                    width: 22%;
                    line-height: 1;
                    vertical-align: middle;
                    height: 1rem;
                }
        }

        .ol-title{
            span{
                 &:hover{
                    cursor:default;
                    background: #fff;
                }
            }
        }
}

</style>
<template>
<div class="ol-datepick-section">
    <ol-input  
        :textfield = 'user'
        @click="showfn"
        />


<div 
    class="ol-datepick "
    v-show = "isShow"
>   

   <div class="ol-chosedate" v-if="value.chose">
        <a @click="nextMoth(-1)"><</a>
        <a href="">
            {{  this.FullYear }}
        </a>
            <a href="">
            {{  this.Month +1 }}
                
            </a>
            
        <a @click="nextMoth(1)"> <i class="icon-angle-right">></i></a>
   </div> 

   <div class="ol-title">
       <span>日</span>
       <span>一</span>
       <span>二</span>
       <span>三</span>
       <span>四</span>
       <span>五</span>
       <span>六</span>
   </div>
   <div class="ol-content clearfix"> 

     <span 
        v-for=' (dates,index) in eleArr '
        :class= "{'glay': dates.iskey,
                 'active':dates.active     
        }"
        @click = "print(dates,index)"
        >
         {{ dates.date }}
     </span>
   </div>
</div>
</div>
</template>


<script>
import olInput from './input'

export default {
    props:{
        value:{
          type: Object,
          require: true
        }
    },

    data () {
        return {
            user: {
                value: '',
                placeHolder: 'time',
                state: 'default',
                tip: '' 
            },

            date     :  null,
            Date     :  null,  //ÌìÊý ×ÜÊý35
            Day      :  null,  // ÖÜ¼¸ ¿ªÊ¼Êý¾Ý
            Month    :  null, 
            FullYear :  null,  
            eleArr   :  [],
            begin    :  null, //¿ªÊ¼µÄ
            allData  :  null,  //×Ü¹²µÄÌìÊ¹
            addArr   :  [],
            isShow   :  false

        }
    },

    components: { 
        olInput
    },

    mounted(){
        this.init()
    },
    methods:{
        getTime(){//getTime
            this.daycount    = new Date(this.FullYear, this.Month +1, 0).getDate() //
            this.date        =  new Date(this.FullYear, this.Month ,'1') //
            this.begin       =  this.date.getDay()  // ÖÜ¼¸ ¿ªÊ¼Êý¾Ý
            this.eleArr      = [];
        },

        init(){
            this.date        =  new Date()
            this.Month       =  this.date.getMonth()
            this.FullYear    =  this.date.getFullYear() 
            this.getTime();
            this._layout()  
        },

        _layout( ){
                let that = this
                 // »ñÈ¡Ç°Ò»¸öÔÂµÄ×îºó¼¸¸öÊý¾Ý
                 let pre = this._others(-1)//prefullYear,
                 let next = this._others(+1)
                 
                 this.eleArr.length = 0
                    for (let i = this.begin; i > 0 ; i--){
                        this.eleArr.push({
                            year: pre.fullYear,
                            month: pre.month,
                            date: pre.date - i + 1,
                            iskey: true
                        })
                    }

                    for (var i = 0; i <  this.daycount ; i++){
                         this.eleArr.push({
                            year:  this.FullYear,
                            month: this.Month ,
                            date:  i + 1
                        })
                    }

                for (var i = 0; i <  42 - this.daycount - this.begin ; i++){
                         this.eleArr.push({
                            year:  next.fullYear,
                            month: next.month ,
                            date:  i + 1,
                            iskey: true
                        })
                  }

        },

       
        _others(key) {
            let  otherMonth = this.Month + key
            let  prefullYear = this.FullYear

            if( otherMonth  < 0){
                otherMonth = 11
                prefullYear = this.FullYear -1
            }else if(otherMonth  > 11){
                otherMonth = 0
                nextfullYear = this.FullYear +1
            }
            return this._forverdate( prefullYear, otherMonth )
        },

        _forverdate(currentYear,currentMoth){
            let currentTime = new Date(currentYear,currentMoth+1,0) //±¾ÖÜ¹²¼¸Ìì
            let    fullYear = currentTime.getFullYear(); //µÃµ½µ±Ç°µÄÄê·Ý
            let       month = currentTime.getMonth() ; 
            let        date = currentTime.getDate(); //µÃµ½µ±Ç°µÄÌìÊý
            let         day = currentTime.getDay(); //µÃµ½µ±Ç°µÄÌìÊý
            let       begin = new Date(fullYear, month, '1').getDay() //±¾ÖÜ¹²¼¸Ìì

            return {
                fullYear,
                month,
                date,//daycount
                day,
                begin
            }
        },
        
         otherMonth(key){
            let  otherMonth = this.Month -  1
            let  prefullYear = this.FullYear

            if( otherMonth  < 0){
                otherMonth = 11
                prefullYear = this.FullYear -1
            } else if ( otherMonth  > 11 ){
                otherMonth = 0
                nextfullYear = this.FullYear +1
            }
            this._changeDate( premonth ,prefullYear)
         },

        _changeDate(mymonth,myfullYear){
            let obj = this._forverdate(prefullYear, premonth)
            this.Month       =  obj.month
            this.FullYear    =  obj.fullYear
            this.daycount    =  obj.date
            this.begin       =  this.begin

            this._layout()  
        },

        print(dates,index){
            let date = dates.year + "-"+ dates.month+ "-"+ dates.date,
                that = this
            if(!this.value.section){
                this.$emit("change",date,dates)
                this.user.value = date
                this.isShow = !this.isShow
            }
           
            this.eleArr.forEach((item,index) => {
                            that.$set(that.eleArr[index],"active",false)
            })
            this.$set(this.eleArr[index],"active",true)
            this.value.section ? this.find(dates) : "";
            

        },

        find( datas ){

            let key = 0
            let that  = this
            this.addArr.push(datas) 

            if( this.addArr.length < 2 ) return // 当有两个的时候触发遍历
                    if(this.addArr.length > 2){
                         this.addArr.shift(datas)
            }
                 
            this.eleArr.forEach((item,index) => {
                    // 判断第一个元素
                    if( item === that.addArr[0] || item === that.addArr[1] ){

                        key ?  key -= 1 :   key += 1
                        that.$set(that.eleArr[index],"active",true)
                    }else{

                        if( key ){
                            that.$set(that.eleArr[index],"active",true)
                         }else{
                            that.$set(that.eleArr[index],"active",false)
                         }

                    }
            })
            let date =  this.addArr[0].year + "-"+ 
                        this.addArr[0].month+ "-"+ 
                        this.addArr[0].date + '---' +
                        this.addArr[1].year + "-"+ 
                        this.addArr[1].month+ "-"+ 
                        this.addArr[1].date 
            this.$emit("change",date,this.addArr);
            this.user.value = date

           
            this.isShow = !this.isShow
            

        },
        showfn(){
            this.isShow = !this.isShow
        },
        nextMoth() {

        }

    }
}
</script>