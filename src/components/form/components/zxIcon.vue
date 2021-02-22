/**
* create by zhangxiang on 2021-02-22 15:53
* 类注释：
* 备注：
*/
<template>
  <i :class="item.class"></i>
</template>

<script lang="ts">
export default {
  name: "zxIcon",
  props: {
    item: {type: Object, default: {}},
    formData: {},
  },
  setup() {

  },
}
</script>

<style scoped>

</style>
