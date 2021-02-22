/**
* create by zhangxiang on 2021-02-22 10:38
* 类注释：
* 备注：
*/
<template>
  <component
      :is="`zx${item.eType}`"
      :item="item"
      :form-data="formData"
      @event="event">
  </component>
</template>

<script lang="ts">
import zxButton from "./zxButton.vue";
import zxInput from "./zxInput.vue";
import zxRadio from "./zxRadio.vue";
import zxRadioButton from "./zxRadioButton.vue";
import zxCheck from "./zxCheck.vue";
import zxCheckButton from "./zxCheckButton.vue";
import zxDatePicker from "./zxDatePicker.vue";
import zxInputNumber from "./zxInputNumber.vue";
import zxSelect from "./zxSelect.vue";
import zxSlider from "./zxSlider.vue";
import zxSpan from "./zxSpan.vue";
import zxIcon from "./zxIcon.vue";
import zxColorPicker from "./zxColorPicker.vue";
import zxRate from "./zxRate.vue";
import zxTimePicker from "./zxTimePicker.vue";
import zxTag from "./zxTag.vue";
import zxSwitch from "./zxSwitch.vue";

export default {
  name: "index",
  components: {
    zxButton,
    zxInput,
    zxRadio,
    zxRadioButton,
    zxCheck,
    zxCheckButton,
    zxDatePicker,
    zxInputNumber,
    zxSelect,
    zxSlider,
    zxSpan,
    zxIcon,
    zxColorPicker,
    zxRate,
    zxTimePicker,
    zxTag,
    zxSwitch
  },
  emits: ['event'],
  props: {
    item: {},
    formData: {},
  },
  setup(props, content) {
    const event = (params: any) => {
      content.emit('event', {...params, data: props.formData})
    }
    return {
      event
    }
  },

}
</script>

<style scoped>

</style>
