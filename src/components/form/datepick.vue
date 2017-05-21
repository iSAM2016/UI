<template>
    <div class="ol-datepick-section">
        <ol-input  v-model="inputvalue"  placeHolder='请输入内容' state='primary'  @click.native="showfn"></ol-input>
        <div class="ol-datepick" v-show = "isShow">
            <div class="ol-chosedate" v-if="value.chose">
                <a @click="nextMoth(-1)"><</a>
                <a href="">{{  this.FullYear }}</a>
                <a href="">{{  this.Month +1 }}</a>
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
                    v-for=' (dates,index) in eleArr' 
                    :class= "{'glay': dates.iskey, 'active':dates.active }"
                    @click = "print(dates,index)">{{ dates.date }}</span>
            </div>
            <div class="ol-content-close clearfix" v-if="value.section" @click="showfn">
                关闭
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
            date     :  null,
            Date     :  null,  //ÌìÊý ×ÜÊý35
            Day      :  null,  // ÖÜ¼¸ ¿ªÊ¼Êý¾Ý
            Month    :  null, 
            FullYear :  null,  
            eleArr   :  [],
            begin    :  null, //¿ªÊ¼µÄ
            allData  :  null,  //×Ü¹²µÄÌìÊ¹
            addArr   :  [],
            isShow   :  false,
            inputvalue: ''
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
            this.daycount    = new Date(this.FullYear, this.Month +1, 0).getDate(); // 获取本月的天数
            this.date        =  new Date(this.FullYear, this.Month ,'1'); // 本月的第一天
            this.begin       =  this.date.getDay();  // 本月第一天的星期数
            this.eleArr      = [];
        },
        init(){
            this.date        =  new Date()
            this.Month       =  this.date.getMonth()
            this.FullYear    =  this.date.getFullYear() 
            this.getTime();
            this._layout();  

        },
        _layout() {// UI布局
            let pre = this._forverdate(-1);
            let next = this._forverdate(+1);
             
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
        _forverdate(key) { // 获取前一个月和后一个月的时间节点
            let currentYear = this.getOthersDate(key).currentYear;
            let currentMoth = this.getOthersDate(key).currentMoth;
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
        getOthersDate(key) { // 检测月份是否合法
            let  currentMoth = this.Month + key
            let  currentYear = this.FullYear

            if( currentMoth  < 0){
                currentMoth = 11
                currentYear = this.FullYear -1
            }else if(currentMoth  > 11){
                currentMoth = 0
                currentYear = this.FullYear +1
            }
            return { currentYear, currentMoth }
        },
        print(dates,index) {// 打印结果
            let month = dates.month + 1;
            let date = dates.year + "-"+ month + "-"+ dates.date,
                that = this
            if(!this.value.section){
                this.$emit("change",date,dates)
                this.inputvalue = date;
                console.log(this.inputvalue);
                this.isShow = !this.isShow;
            }
           
            this.eleArr.forEach((item,index) => {
                that.$set(that.eleArr[index],"active",false)
            })
            this.$set(this.eleArr[index],"active",true)
            this.value.section ? this.find(dates) : "";
        },

        find(datas) {// 寻找两天之中的天，变颜色
            let key = 0
            let that  = this
            this.addArr.push(datas) 

            if (this.addArr.length < 2) return // 当有两个的时候触发遍历
                if (this.addArr.length > 2) {
                    this.addArr.shift(datas)
            }
                 
            this.eleArr.forEach((item,index) => {
                // 判断第一个元素
                if (item === that.addArr[0] || item === that.addArr[1]){
                    key ?  key -= 1 :   key += 1
                    that.$set(that.eleArr[index],"active",true)
                } else {

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
            this.inputvalue = date
            //this.isShow = !this.isShow
        },
        showfn(){
            this.isShow = !this.isShow
        },
        nextMoth(next) {// 上个月或下个月
            
            this.FullYear  = this.getOthersDate(next).currentYear;
            this.Month  = this.getOthersDate(next).currentMoth;
            this.getTime();
            this._layout();  
        }
    }
}
</script>
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
    top: 2.6rem;
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

.ol-content-close {
    position: relative;
    padding: 4px;
    line-height: 1
    text-align: right;
}


</style>