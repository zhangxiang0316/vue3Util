/**
* create by zhangxiang on 2021-02-22 16:03
* 类注释：
* 备注：
*/
<template>
  <el-rate
      v-model="formData[item.prop]"
      :colors="item.colors"
      :void-color="item.voidColor"
      :disabled-void-color="item.disabledVoidColor"
      :disabled-void-icon-class="item.disabledVoidIconClass"
      :max="item.max"
      :disabled="item.disabled"
      :class="item.class"
      :icon-classes="item.iconClasses"
      :void-icon-class="item.voidIconClass"
      :allow-half="item.allowHalf"
      :style="item.style"
      :texts="item.texts"
      :show-text="item.showText"
      :low-threshold="item.lowThreshold"
      @change="change">
  </el-rate>
</template>

<script lang="ts">
export default {
  name: "zxRate",
  emits: ['event'],
  props: {
    item: {type: Object, default: {}},
    formData: {},
  },
  setup(prop, context) {
    const change = () => {
      context.emit('event', {
        type: 'change',
        prop: prop.item.prop,
        value: prop.formData[prop.item.prop]
      })
    }
    return {
      change,
    }
  },
}
</script>

<style scoped>

</style>
