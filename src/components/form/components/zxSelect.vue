/**
* create by zhangxiang on 2021-02-22 15:26
* 类注释：
* 备注：
*/
<template>
  <el-select
      style="width: 100%"
      v-model="formData[item.prop]"
      :placeholder="item.placeholder?item.placeholder:'请选择'"
      :class="item.class"
      :style="item.value"
      :allow-create="item.allowCreate"
      :filterable="item.filterable"
      :clearable="item.clearable"
      :disabled="item.disabled"
      :multiple="item.multiple"
      :multiple-limit="item.multipleLimit"
      @change="change">
    <el-option
        v-for="option in options"
        :key="option.value?option.value:option"
        :label="option.label?option.label:option"
        :value="option.value?option.value:option"
        :disabled="option.disabled">
    </el-option>
  </el-select>
</template>

<script lang="ts">
import {computed} from "vue";

export default {
  name: "zxSelect",
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
