/**
* create by zhangxiang on 2021-02-22 10:25
* 类注释：
* 备注：
*/
<template>
  <div class="form">
    <zx-form ref="mForm" :formData="formData" :needToast="true" :form-cols="formCols" :rules="rules" @event="event">
      <template #test>
        <el-input v-model="formData.date0"></el-input>
      </template>
    </zx-form>
  </div>
</template>

<script lang="ts">
import {reactive, toRefs, ref} from 'vue'
import zxForm from "@/components/form";

export default {
  name: "Form",
  components: {
    zxForm
  },
  setup() {
    const mForm = ref(null);
    const data = reactive({
      show: false,
      rules: {
        date5: [{required: true, message: '请选择活动区域', trigger: 'change'}],
        date11: {required: true, message: '请选择活动区域', trigger: 'change'},
        date0: {required: true, message: '请选择活动区域', trigger: 'change'},
        date12: {required: true, message: '请选择活动区域', trigger: 'change'},
      },
      formData: {
        data15: '测试span'
      },
      formCols: [
        [{eType: 'slot', label: "自定义slot", slotName: "test", prop: 'date0', span: 6}],

        [
          {
            eType: 'Input',
            placeholder: "请输入姓名",
            label: "Input",
            prop: 'date1',
            noShow: false,
            span: 6,
            suffixIcon: "el-icon-eleme"
          },
        ],
        [
          {
            eType: 'Radio',
            label: "Radio",
            options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
            prop: 'date2',
            span: 6,
          },
          {
            eType: 'RadioButton',
            label: "RadioButton",
            options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
            prop: 'date3',
            span: 6,
          },
        ],
        [
          {
            eType: 'Check',
            label: "CheckBox",
            options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
            // options: '手机,电脑',
            prop: 'date4',
            span: 6,
          },
          {
            eType: 'CheckButton',
            label: "CheckButton",
            noShow: false,
            options: ['手机', '电脑'],
            prop: 'date5',
            span: 6,
          },
        ],
        [
          {
            eType: 'DatePicker',
            type: 'year',
            label: "year",
            format: 'YYYY',
            prop: 'date6',
            span: 6,
          },
          {
            eType: 'DatePicker',
            type: 'month',
            label: "month",
            format: 'YYYY-MM',
            prop: 'date20',
            span: 6,
          },
          {
            eType: 'DatePicker',
            type: 'week',
            label: "week",
            format: "gggg 第 ww 周",
            prop: 'date22',
            span: 6,
          },
          {
            eType: 'DatePicker',
            type: 'data',
            label: "data",
            format: 'YYYY/MM/DD',
            prop: 'date7',
            span: 6,
          },
        ],
        [
          {
            eType: 'DatePicker',
            type: 'datetime',
            label: "datetime",
            prop: 'date8',
            span: 6,
          },
          {
            eType: 'DatePicker',
            type: 'daterange',
            label: "daterange",
            format: 'YYYY/MM/DD',
            prop: 'date9',
            span: 6,
          },
          // {
          //    eType: 'DatePicker',
          //    type: 'datetimerange',
          //    label: "datetimerange",
          //    prop: 'date10',
          //    span: 6,
          //  },
          {
            eType: 'DatePicker',
            type: 'dates',
            format: 'YYYY/MM/DD',
            label: "dates",
            prop: 'date11',
            span: 6,
          },
        ],
        [
          {
            eType: 'TimePicker',
            type: 'TimePicker',
            label: "daterange",
            prop: 'date30',
            span: 6,
          },
          {
            eType: 'TimePicker',
            type: 'TimePicker',
            isRange: true,
            label: "daterange",
            prop: 'date31',
            span: 6,
          }
        ],
        [
          {
            eType: 'InputNumber',
            label: "InputNumber",
            prop: 'date12',
            span: 6,
          },
          {
            eType: 'Select',
            label: "Select",
            options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
            prop: 'date13',
            span: 6,
          },
          {
            eType: 'Slider',
            label: "Slider",
            prop: 'date14',
            noShow: false,
            span: 6,
          },
          {
            eType: "Span",
            prop: "data15",
            span: 6,
            formatter: (data) => {
              console.log(data)
            }
          },
        ],
        [
          {
            eType: 'Icon',
            elementUi: true,
            label: "elementUIIcon",
            class: "el-icon-share",
            prop: 'date16',
            span: 6,
          },
          {
            eType: 'Icon',
            label: "Icon",
            class: ['icon-yiduxinxi', 'iconfont'],
            prop: 'date17',
            span: 6,
          },
          {
            eType: 'ColorPicker',
            label: "ColorPicker",
            prop: 'date18',
            span: 6,
          },
          {
            eType: 'Rate',
            label: "Rate",
            prop: 'date19',
            span: 6,
          },
        ],
        [
          {
            eType: "Tag",
            label: 'Tag',
            prop: 'data29',
            span: 6,
            closable: true,
            options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
          },
          {
            eType: 'Switch',
            label: "Switch",
            prop: 'date25',
            span: 6,
          },
        ],
        [
          {eType: 'Button', value: "提交", type: "success", prop: 'submit', span: 2,},
          {eType: 'Button', value: "隐藏", type: "success", prop: 'submit1', span: 2,},
          {eType: 'Button', value: "重置", type: "success", prop: 'reset', span: 2,}
        ],
      ]
    })
    const event = (params) => {
      if (params.prop === 'submit1') {
        data.show = !data.show
        mForm._value.setNoShow('date4', data.show)
      }
    }
    return {
      ...toRefs(data),
      event,
      mForm,
    }
  },
}
</script>

<style scoped>

</style>
