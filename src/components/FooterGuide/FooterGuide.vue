<template>
    <footer class="footer_guide">
  <a href="javascript:;" class="guide_item " :class="{on: '/Home'===$route.path}" @click="goTo('/Home')">
    <span class="item_icon">
      <i class="iconfont icon-shouye"></i>
    </span>
    <span>首页</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on: '/Search'===$route.path}" @click="goTo('/Search')">
    <span class="item_icon">
      <i class="iconfont icon-sousuo"></i>
    </span>
    <span>搜索</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on: '/Message'===$route.path}" @click="goTo('/Message')">
    <span class="item_icon">
      <i class="iconfont icon-xiaoxizhongxin"></i>
    </span>
    <span>消息</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on: '/Profile'===$route.path}" @click="goTo('/Profile')">
    <span class="item_icon">
      <i class="iconfont icon-gengduo"></i>
    </span>
    <span>我的</span>
  </a>
</footer>

</template>

<script>
    export default{
        methods:{
            goTo(path){
                this.$router.replace(path)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixins.styl';
    .footer_guide  
        top-border-1px(#e4e4e4)
        position fixed
        z-index 100
        left 0
        right 0
        bottom 0
        background-color #fff
        width 100%
        height 50px
        display flex
        .guide_item
            display flex
            flex 1
            text-align center
            flex-direction column
            align-items center
            margin 5px
            color #999999
            &.on
                color #02a774
            span
                font-size 12px
                margin-top 2px
                margin-bottom 2px
                .iconfont
                    font-size 22px

</style>
