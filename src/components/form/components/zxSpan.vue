/**
* create by zhangxiang on 2021-02-22 15:51
* 类注释：
* 备注：
*/
<template>
   <span :class="item.class" :style="item.style">
        {{ item.formatter && item.formatter(formData[item.prop]) || formData[item.prop] }}
    </span>
</template>

<script lang="ts">

export default {
  name: "zxSpan",
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
