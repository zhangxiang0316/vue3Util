/**
* create by zhangxiang on 2021-02-22 15:03
* 类注释：type====year/month/date/dates/ week/datetime/datetimerange/daterange/monthrange
* 备注：
*/
<template>
  <el-date-picker
      style="width: 100%"
      v-model="formData[item.prop]"
      :disabled="item.disabled"
      :type="item.type"
      :editable="item.editable"
      :clearable="item.clearable"
      :format="item.format"
      :style="item.style"
      :class="item.class"
      :placeholder="item.placeholder"
      :default-value="item.defaultValue"
      :range-separator="item.rangeSeparator"
      :start-placeholder="item.startPlaceholder ? item.startPlaceholder : '开始日期'"
      :end-placeholder="item.endPlaceholder ? item.endPlaceholder : '结束日期'"
      @change="change">
  </el-date-picker>
</template>

<script lang="ts">
export default {
  name: "zxDatePicker",
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
