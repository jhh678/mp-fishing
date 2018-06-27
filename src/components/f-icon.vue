<template>
  <div>
    <div class="iconfont" :class="iconType"></div>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    computed: {
      iconType() {
        return 'icon-' + this.type
      }
    }
  }
</script>

<style lang="postcss" scoped>
  @font-face {
    font-family: 'iconfont';
    /* project id 66849 */
    src: url('//at.alicdn.com/t/font_66849_sjcicpa3ah.eot');
    src: url('//at.alicdn.com/t/font_66849_sjcicpa3ah.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_66849_sjcicpa3ah.woff') format('woff'),
    url('//at.alicdn.com/t/font_66849_sjcicpa3ah.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_66849_sjcicpa3ah.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 1em;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-daifukuan:before {
    content: "\e609";
  }

  .icon-gouwuche:before {
    content: "\e606";
  }

  .icon-yiwancheng:before {
    content: "\e6a6";
  }

  .icon-qianbao:before {
    content: "\e610";
  }

  .icon-daishouhuo:before {
    content: "\e637";
  }

  .icon-jifen:before {
    content: "\e629";
  }

  .icon-yue:before {
    content: "\e647";
  }

  .icon-daifahuo:before {
    content: "\e604";
  }

  .icon-shouhoufuwu:before {
    content: "\e60b";
  }

  .icon-sousuo:before {
    content: "\e60c";
  }

</style>
