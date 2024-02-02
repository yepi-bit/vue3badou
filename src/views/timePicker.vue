<template>
  <div>
    <div>time2</div>
    <el-date-picker v-model="selectedDate1" type="date" @change="handleDatePickerChange"></el-date-picker>
    <el-date-picker v-model="selectedDate2" type="date" :disabled-date="disabledDate"></el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate1: '',
      selectedDate2: ''
    };
  },
  methods: {
    handleDatePickerChange() {
      // 根据前面选中的日期之前的时间禁用后面日期选择器
      this.$nextTick(() => {
        if (this.selectedDate1) {
          const disableDate = new Date(this.selectedDate1);
          disableDate.setDate(disableDate.getDate());
          this.$refs.datePicker2.picker.$emit('pickable-date', disableDate);
        } else {
          this.$refs.datePicker2.picker.$emit('pickable-date', '');
        }
      });
    },
    disabledDate(time) {
      // 禁用前面选中的日期之前的时间
      if (this.selectedDate1) {
        const disableTime = new Date(this.selectedDate1);
        disableTime.setDate(disableTime.getDate());
        return time.getTime() < disableTime.getTime();
      }
      return false;
    }
  }
};
</script>
