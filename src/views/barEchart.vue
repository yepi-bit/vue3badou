<template>
  <div ref="pieChart" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import * as echarts from "echarts";

const pieChart = ref(null);

onMounted(() => {
  const chartInstance = echarts.init(pieChart.value);
  const option = {
    title: {
      text: '饼图示例',
      left: 'center'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['45%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,  // 饼图中心显示文字
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {value: 335, name: '直接访问'},
          {value: 310, name: '邮件营销'},
          {value: 234, name: '联盟广告'},
          {value: 135, name: '视频广告'},
          {value: 1548, name: '搜索引擎'}
        ]
      }
    ]
  };
  chartInstance.setOption(option);
})
</script>

<style scoped>
/* 样式可以根据需要自行调整 */
</style>
