/**
* create by zhangxiang on 2021-02-22 15:30
* 类注释：
* 备注：
*/
<template>
  <el-slider
      v-model="formData[item.prop]"
      :min="item.min"
      :max="item.max"
      :step="item.step"
      :disabled="item.disabled"
      :show-input="item.showInput"
      :show-input-controls="item.showInputControls"
      :show-stops="item.showStops"
      :show-tooltip="item.showTooltip"
      :range="item.range"
      :height="item.height"
      :vertical="item.vertical"
      :marks="item.marks"
      @change="change">
  </el-slider>
</template>

<script lang="ts">
export default {
  name: "zxSlider",
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
  }
}
</script>

<style scoped>

</style>
