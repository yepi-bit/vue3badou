<template>
  <div>
    <el-switch
        v-model="switchValue"
        width="80"
        inline-prompt
        active-text="实时数据"
        inactive-text="已关闭"
        @change="changeValue"
    />
    <el-switch
        v-model="switchColorValue"
        width="80"
        style="margin-left: 18px"
        inline-prompt
        active-text="随机color"
        inactive-text="已关闭"
        @change="changeColorValue"
    />
    <div ref="pieChart" style="width: 100%; height: 450px;"></div>
  </div>
</template>

<script setup>
import {ref, onMounted, computed, reactive, watch, nextTick, onUnmounted} from 'vue';
import * as echarts from "echarts";

const pieChart = ref(null);
const switchValue = ref(false);
const switchColorValue = ref(false);
const dataValue = reactive([
  {value: 335, name: '直接访问'},
  {value: 310, name: '邮件营销'},
  {value: 234, name: '联盟广告'},
  {value: 135, name: '视频广告'},
  {value: 1548, name: '搜索引擎'},
])
const chartInstance = ref()
const echartData = ref([])
const time = ref(null)
const changeValue = () => {
  if (switchValue.value) {
    time.value = setInterval(() => {
      if(switchColorValue.value) {
        changeColorValue()
      }
      echartData.value = dataValue.map(i => {
        return {
          value: i.value + Math.floor((Math.random() * 1000) + 1),
          name: i.name,
        }
      })
    }, 1500)
  } else {
    clearInterval(time.value)
  }
}
const changeColorValue = () => {
  if (switchColorValue.value) {
    nextTick(()=>{
      barName.value.color = getRandomColor()
    })
  }
}
const getRandomColor = () => {
  let letters = '0123456789ABCDEF'; // 十六进制颜色值的可能字符
  let color = '#';
  let colorArr = []
  for (let s = 0; s < 5; s++) {
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; // 从可能字符中随机获取一个字符
    }
    colorArr.push(color);
    color = '#';
  }
  return colorArr
}

watch(echartData, (n, o) => {
      dataValue.value = n
      if (chartInstance.value) {
        nextTick(() => {
          barName.value.series[0].data = echartData.value
        })
        chartInstance.value.setOption(barName.value);
      }
    },
    {immediate: true}
)

const barName = computed(() => {
  return {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    title: {
      text: 'Yepi大数据',
      left: 'center',
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
          show: true,
          // position: 'center',  // 鼠标移入文字中心显示
          formatter(param) {
            return param.value + ' (' + param.percent + '%)'; // 百分比
          }
        },
        emphasis: {
          label: {
            show: true,  // 饼图中心显示文字
            fontSize: '26',
            fontWeight: 'bold'
          },
        },
        labelLine: {
          show: true  // 指示线显示
        },
        data: dataValue
      }
    ]
  };
})
onMounted(() => {
  chartInstance.value = echarts.init(pieChart.value);
  chartInstance.value.setOption(barName.value);
  // window.onresize = () => {
  //   barName.value.resize();
  // };
})
onUnmounted(() => {
  clearInterval(time.value)
})
</script>

<style scoped>
/* 样式可以根据需要自行调整 */
</style>
