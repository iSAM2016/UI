<style scoped>
    h1{
        color: #28a7e1;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
    h2{
        text-align: center;
        font-size: 20px;
        margin-top: 50px;
    }
    img{
        width: 150px;
    }
</style>
<template>
    
    <!-- 头部 -->
    <ul class="nav nav-tabs">

        <li>
            <a href="#">预留</a>
        </li>

        <li>
            <a href="#">个人中心</a>
        </li>
        <li>
            <a href="#">购物车</a>
        </li>
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                信息
                <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">

                <li>
                    <a href="#">EJB</a>
                </li>
                <li class="divider"></li>
                <li>
                    <a href="#">分接</a>
                </li>
            </ul>
        </li>
        <li class="">
            <a href="#">通知</a>
        </li>

    </ul>

    <!-- buttons -->
   


</template>
<script>
    /*import NumberSeparator from '../filters/number-separator';
    import Time from '../directives/time';*/

    module.exports = {
        filters: {
           /* NumberSeparator: NumberSeparator*/
        },
        directives: {
           /* time: Time*/
        },
        data: function() {
            return {

            }
        },
        ready: function() {
            
        },
        beforeDestroy: function() {

        },
        methods: {
            
        }
    }
</script>
