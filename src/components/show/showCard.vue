<style  lang = "stylus" >


</style>
<template>
  <section>
    <div>
      <h4>
        #标签
      </h4>
       <ol-card 
        :title="content"
        :bgColor="bgColor"
        :fontColor="fontColor"
        >
           <p>我是内容Multi-Edit（多行编辑） ctrl + click
在我看来这绝对是Sublime Text最好的功能。使用它之后，就很难再回到其他文本编辑器。（愚人码头注：其实很多编辑器，IDE现在都有这功能了，比如：WebStorm） 有许多不同的方式使用多行编辑： ctrl + d: 选中光标所占的文本，继续操作则会选中下一个相同的文本。（愚人码头注：多按几下试试）
ctrl + click: 单击想要编辑的每一个地方，都将创建一个光标
ctrl + shift + f 和 alt + enter: 在你的文件查找一个文本，然后将其全部选中
以下叔整理的:
ctrl+l 选中整行，继续操作则继续选择下一行，效果和 shift+↓ 效果一样。
ctrl+shift+l 先选中多行，再按下快捷键，会在每行行尾插入光标，即可同时编辑这些行。
ctrl+alt+↑ 或 ctrl+alt+鼠标向上拖动 向上添加多行光标，可同时编辑多行。
ctrl+alt+↓ 或 ctrl+alt+鼠标向下拖动 向下添加多行光标，可同时编辑多行。
shift+↑ 向上选中多行。
shift+↓ 向下选中多行。</p>

       </ol-card>
    </div>  

  </section>
</template>
<script>
import { olCard }from '../index'

  export default {
    components: { 
      olCard
          },

   

    data () {
      return {
        content: "sublime快捷键",
        fontColor:"white",
        bgColor: "rgb(26, 229, 255)"
      }
    },
    
    events: {
      
    }
  }

</script>