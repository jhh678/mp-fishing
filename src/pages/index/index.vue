<template>
  <div class="container">
    <swiper class="swiper" :indicator-dots="true" :autoplay="true" interval="3000" duration="1000">
      <swiper-item v-for="item of data.imgUrls" :key="item">
        <image :src="item" class="slide-image" />
      </swiper-item>
    </swiper>
    <button class="f-btn btn-search">
      <div class="search-icon">
        <f-icon type="sousuo"></f-icon>
      </div>搜 索
    </button>
    <div class=""></div>
  </div>
</template>

<script>
  import fIcon from '@/components/f-icon'

  export default {
    data() {
      return {
        data: {
          imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
          ]
        }
      }
    },

    components: {
      fIcon
    },

    methods: {},

    created() {

    }
  }
</script>

<style lang="postcss" scoped>
  .swiper {
    height: 360rpx;

    .slide-image {
      width: 100%;
      height: 360rpx;
    }
  }

  .btn-search {
    margin: 24rpx;
    background-color: #fff;
    font-size: 32rpx;
  }

  .search-icon {
    display: inline-block;
    margin-right: 10rpx;
    font-size: 32rpx;
  }

</style>
