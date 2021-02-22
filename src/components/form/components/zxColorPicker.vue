/**
* create by zhangxiang on 2021-02-22 15:59
* 类注释：
* 备注：
*/
<template>
  <el-color-picker
      v-model="formData[item.prop]"
      :disabled="item.disabled"
      :size="item.size"
      :color-format="item.colorFormat"
      :predefine="item.predefine"
      :show-alpha="item.showAlpha"
      @change="change">
  </el-color-picker>
</template>

<script lang="ts">
export default {
  name: "zxColorPicker",
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
