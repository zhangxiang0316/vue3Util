/**
* create by zhangxiang on 2021-02-22 14:06
* 类注释：
* 备注：
*/
<template>
  <el-input
      v-model="formData[item.prop]"
      :style="item.style?item.style:{width:'100%'}"
      :type="item.type"
      :placeholder="item.placeholder"
      :suffixIcon="item.suffixIcon"
      :prefixIcon="item.prefixIcon"
      :show-password="item.showPassword"
      :maxlength="item.maxlength"
      :rows="item.rows"
      :autosize="item.autosize"
      :minlength="item.minlength"
      :show-word-limit="item.showWordLimit"
      :disabled="item.disabled"
      :clearable="item.clearable"
      @change="change">
  </el-input>
</template>

<script lang="ts">
export default {
  name: "zxInput",
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
