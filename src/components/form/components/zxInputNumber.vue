/**
* create by zhangxiang on 2021-02-22 15:22
* 类注释：
* 备注：
*/
<template>
  <el-input-number
      v-model="formData[item.prop]"
      :disabled="item.disabled"
      :controls-position="item.controlsPosition"
      style="width: 100%"
      :style="item.style"
      :class="item.class"
      :min="item.min"
      :max="item.max"
      :step="item.step"
      :step-strictly="item.stepStrictly"
      :precision="item.precision"
      :controls="item.controls"
      :placeholder="item.placeholder"
      @change="change"
      @blur="blur"
      @focus="focus">
  </el-input-number>
</template>

<script lang="ts">
import {onBeforeMount} from "vue"

export default {
  name: "zxInputNumber",
  emits: ['event'],
  props: {
    item: {type: Object, default: {}},
    formData: {},
  },
  setup(prop, context) {
    onBeforeMount(() => {
      if (!prop.formData[prop.item.prop]) {
        prop.formData[prop.item.prop] = 1
      }
    })
    const change = () => {
      context.emit('event', {
        type: 'change',
        prop: prop.item.prop,
        value: prop.formData[prop.item.prop]
      })
    }
    const focus = () => {
      context.emit('event', {
        type: 'focus',
        prop: prop.item.prop,
        value: prop.formData[prop.item.prop]
      })
    }
    const blur = () => {
      context.emit('event', {
        type: 'blur',
        prop: prop.item.prop,
        value: prop.formData[prop.item.prop]
      })
    }
    return {
      change,
      blur,
      focus
    }
  }
}
</script>

<style scoped>

</style>
