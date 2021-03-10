/**
* create by zhangxiang on 2021-02-22 10:20
* 类注释：
* 备注：
*/
<template>
  <el-form
      ref="elForm"
      :model="formData"
      :label-suffix="labelSuffix"
      :status-icon="statusIcon"
      :size="size"
      :disabled="disabled"
      :inline="isInline"
      :label-width="labelWidth"
      :label-position="labelPosition"
      :rules="rules">
    <el-row
        v-for="(items,index) in formCols"
        :key="index"
        :gutter="items&&items.gutter?items.gutter:0">
      <template
          v-for="item in items">
        <el-col
            v-if="!item.noShow"
            :span="item.span"
            :key="item.prop"
            :offset="item.offset">
          <el-form-item
              :label="item.noFormItem?'':item.label"
              :prop="item.prop"
              :label-width="item.noFormItem?'0':labelWidth">
            <slot v-if="item.eType==='slot'" :name="item.slotName" :data="{...item,...formData}"></slot>
            <m-element v-else :item="item" :form-data="formData" @event="event"></m-element>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue'
import mElement from './components/index.vue'
import {ElMessage} from 'element-plus'


export default defineComponent({
  name: "zxForm",
  components: {mElement},
  props: {
    //是否可拖拽排序
    canDraggable: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    needToast: {type: Boolean, default: false},
    labelPosition: {type: String, default: "right"},
    formData: {type: Object, default: null},
    rules: {type: Object, default: null},
    formCols: {type: Array, default: () => [[{}]]},
    isInline: {type: Boolean, default: false},
    statusIcon: {type: Boolean, default: false},
    size: {type: String, default: 'medium'},
    labelSuffix: {type: String, default: '：'},
    labelWidth: {type: String, default: '120px'},
  },
  emits: ['event', 'submit', 'reset'],
  setup(props, content) {
    watch(props.formCols, () => {
      props.formCols.forEach((items: any) => {
        items.forEach(item => {
          if (item.noShow)
            if (item.eType === 'Check' || item.eType === 'CheckButton') {
              props.formData[item.prop] = []
            } else {
              delete props.formData[item.prop]
            }
        })
      })
    })
    const elForm = ref(null)
    const event = (params) => {
      content.emit('event', params)
      console.log('event', params)
      if (params.prop === "submit") {
        submit().then(res => {
          content.emit('submit')
        })
      } else if (params.prop === "reset") {
        reset()
        content.emit('reset')
      }
    }
    //提交校验
    const submit = () => {
      return new Promise((resolve) => {
        elForm.value.validate((valid, message) => {
          if (valid)
            resolve(valid)
          else if (props.needToast) {
            ElMessage({
              type: "error",
              message: message[Object.keys(message)[0]][0].message ? message[Object.keys(message)[0]][0].message : "校验失败"
            })
          }
        });
      })
    }
    //重置
    const reset = () => {
      elForm._value.resetFields();
    }

    //设置是否展示
    const setNoShow = (prop, value) => {
      setNewValue(prop, "noShow", value)
    }
    //设置radio checkbox options值
    const setOptions = (prop, value) => {
      setNewValue(prop, "options", value)
    }
    /**
     * 改变二维数组中某个值
     * @param prop        数组中唯一标识值
     * @param key         需要修改的字段
     * @param value        需要修改的值
     */
    const setNewValue = (prop, key, value) => {
      let two = -1;
      let one = props.formCols.findIndex((item: any) => {
        let iIndex = item.findIndex(iItem => {
          return iItem.prop === prop
        })
        if (iIndex !== -1) {
          two = iIndex
          return true
        }
      })
      if (one === -1 || two === -1) {
        console.log('找不到要设置的字段')
        return
      }
      props.formCols[one][two][key] = value
    }
    return {
      event,
      reset,
      submit,
      elForm,
      setNoShow,
      setOptions,
      setNewValue
    }
  },
})
</script>

<style scoped>

</style>
