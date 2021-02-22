/**
* create by zhangxiang on 2021-02-22 14:14
* 类注释：
* 备注：
*/
<template>
  <el-radio-group
      v-model="formData[item.prop]"
      :size="item.size"
      @change="change">
    <el-radio
        v-for="option in options"
        :key="option.value?option.value:option"
        :label="option.value?option.value:option"
        :border="item.border"
        :style="item.style"
        :disabled="item.disabled">
      {{ option.label ? option.label : option }}
    </el-radio>
  </el-radio-group>
</template>

<script lang="ts">
import {computed} from 'vue'

export default {
  name: "zxRadio",
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
    const options = computed(() => {
      if (prop.item.options instanceof Array) {
        return prop.item.options
      } else {
        let list = prop.item.options.split(',')
        return list.map(item => {
          return {value: item, label: item}
        })
      }
    })
    return {
      options,
      change
    }
  },
}
</script>

<style scoped>

</style>
