<template>
  <div class="bg transall_fast w-100 h-100 position-relative overflow-hidden">
    <div class="text-big text-dark text-decoration-none" @click="textBigClick">
      <p class="font-fanti mr-0 animate__animated animate__backInDown animate__slow">寒江孤影，江湖故人</p>
      <p class="font-fanti ml-0 animate__animated animate__backInUp animate__slow">相逢何必曾相識</p>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'Home',
  methods: {
    textBigClick() {
      $('.text-big p:nth-child(1)').removeClass('animate__backInDown');
      $('.text-big p:nth-child(2)').removeClass('animate__backInUp');
      setTimeout(() => {
        $('.text-big p:nth-child(1)').addClass('animate__backInDown');
        $('.text-big p:nth-child(2)').addClass('animate__backInUp');
      });
    }
  }
};
</script>

<style lang="less" scoped>
.bg {
  background: url(https://evilercraft.oss-cn-hangzhou.aliyuncs.com/images/background/ink-water-mobile.jpg) no-repeat left center/100% 100%;
}
@media screen and (min-width: 768px){
  .bg {
    background: url(https://evilercraft.oss-cn-hangzhou.aliyuncs.com/images/background/ink-water-middle.jpg) no-repeat center center/cover;
  }
}
@media screen and (min-width: 992px){
  .bg {
    background: url(https://evilercraft.oss-cn-hangzhou.aliyuncs.com/images/background/ink-water.jpg) no-repeat center center/cover;
  }
}
.text-big {
  position: absolute;
  writing-mode: vertical-lr;
  vertical-align: text-bottom;
  white-space: nowrap;
  font-size: 2.6rem;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  &:hover {
    cursor: pointer;
    font-weight: bolder;
  }
  p:nth-child(2) {
    margin-top: 9rem;
  }
}
</style>
