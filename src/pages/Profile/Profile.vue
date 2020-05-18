<template>
    <section class="profile">
    <header class="header">
      <div class="header_title">
        <span class="header_title_text">我 的</span>
      </div>
    </header>
    <section class="profile-number">
      <router-link to="/login" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-touxiang2"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji "></i>
            </span>
            <span class="icon-mobile-number">暂未绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-icon-test29"></i>
        </span>
      </router-link>
    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span></span>
          <span class="info_data_bottom">待面试</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span></span>
          <span class="info_data_bottom">已投简历</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span></span>
          <span class="info_data_bottom">收藏</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 在线简历 -->
      <a href='javascript:' class="my_order">
        <span>
          <i class="iconfont icon-icon-test2"></i>
        </span>
        <div class="my_order_div">
          <span>我的在线简历</span>
          <span class="my_order_icon">
            <i class="iconfont icon-icon-test29"></i>
          </span>
        </div>
      </a>
      <!-- 附件简历 -->
      <a href='javascript:' class="my_order">
        <span>
          <i class="iconfont icon-wenjian1"></i>
        </span>
        <div class="my_order_div">
          <span>附件简历</span>
          <span class="my_order_icon">
            <i class="iconfont icon-icon-test29"></i>
          </span>
        </div>
      </a>
      <!-- 帮助与反馈 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-help"></i>
        </span>
        <div class="my_order_div">
          <span>帮助与反馈</span>
          <span class="my_order_icon">
            <i class="iconfont icon-icon-test29"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 关于 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-iconset0142"></i>
        </span>
        <div class="my_order_div">
          <span>关于</span>
          <span class="my_order_icon">
            <i class="iconfont icon-icon-test29"></i>
          </span>
        </div>
      </a>
    </section>
  </section>

</template>

<script>
    export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .profile //我的
        width 100%
        overflow hidden
    .header //头部公共css
        background-color #02a774
        position fixed
        z-index 100
        left 0
        top 0
        width 100%
        height 45px
        .header_search
            position absolute
            left 15px
            top 50%
            transform translateY(-50%)
            width 10%
            height 50%
        .iconfont
            font-size 22px
            color #fff
        .header_title
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            width 30%
            color #fff
            font-size 22px
            text-align center
    .profile-number
        margin-top 45.5px
        .profile-link
            clearFix()
            position relative
            display block
            background #02a774
            padding 20px 10px
            .profile_image
                float left
                width 60px
                height 60px
                border-radius 50%
                overflow hidden
                vertical-align top
                .icon-touxiang2
                    background #e4e4e4
                    font-size 62px
            .user-info
                float left
                margin-top 8px
                margin-left 15px
                p
                    font-weight: 700
                    font-size 18px
                    color #fff
                    &.user-info-top
                        padding-bottom 8px
                    .user-icon
                        display inline-block
                        margin-left -5px
                        margin-right 1px
                        width 20px
                        height 20px
                        .icon-shouji
                            font-size 22px
                            vertical-align text-top
                    .icon-mobile-number
                        font-size 14px
                        color #fff
            .arrow
                width 12px
                height 12px
                position absolute
                right 15px
                top 40%
                .icon-icon-test29
                    color #fff
                    font-size 18px
    .profile_info_data
        bottom-border-1px(#e4e4e4)
        width 100%
        background #fff
        overflow hidden
        .info_data_list
            clearFix()
            .info_data_link
                float left
                width 33%
                text-align center
                border-right 1px solid #f1f1f1
                .info_data_top
                    display block
                    width 100%
                    font-size 14px
                    color #333
                    padding 15px 5px 10px
                span
                    display inline-block
                    font-size 30px
                    color #f90
                    font-weight 700
                    line-height 30px
                .info_data_bottom
                    display inline-block
                    font-size 14px
                    color #666
                    font-weight 400
                    padding-bottom 10px
            .info_data_link:nth-of-type(2)
                .info_data_top
                    span
                        color #ff5f3e
            .info_data_link:nth-of-type(3)
                border 0
                .info_data_top
                    span
                        color #6ac20b
    .profile_my_order
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff
        .my_order
            display flex
            align-items center
            padding-left 15px
            >span
                display flex
                align-items center
                width 20px
                height 20px
            .icon-icon-test2
                margin-left -7px
                font-size 22px
                color #02a774
            .icon-wenjian1
                margin-left -6px
                font-size 18px
                color #ff5f3e
            .icon-help
                margin-left -8px
                font-size 22px
                color #f90
            .icon-iconset0142
                margin-left -7px
                font-size 22px
                color #02a774
            .my_order_div
                width 100%
                border-bottom 1px solid #f1f1f1
                padding 18px 10px 18px 0
                font-size 16px
                color #333
                display flex
                justify-content space-between
            span
                display inline-block
            .my_order_icon
                float right
                width 10px
                height 10px
                .icon-icon-test29
                    color #bbb
                    font-size 18px

</style>
