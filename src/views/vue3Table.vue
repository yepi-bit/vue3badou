<template>
  <div>
    <el-table
        ref="reportTable"
        :data="tableData"
        style="width: 100%"
        height="200"
        :header-cell-style="{ background: 'rgb(2 40 58)', color: '#3684ce' }"
        :row-style="{ color: '#4aa5fc' }"
        :row-class-name="tableRowClassName"
    >
      <el-table-column prop="cityName" label="乡镇" align="center" width=""></el-table-column>
      <el-table-column prop="onlineCount" label="在线数量" align="center" width=""></el-table-column>
      <el-table-column prop="offlineCount" label="离线数量" align="center" width=""></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import {nextTick, onMounted, onUnmounted, ref} from "vue";
import {User} from "@/type/tableType";

const tableRowClassName = ({row, rowIndex}: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}
const time = ref()
const reportTable = ref(null)
const tableData: User[] = [
  {
    cityName: '定安',
    onlineCount: 10,
    offlineCount: 17,
  },
  {
    cityName: '澄迈',
    onlineCount: 6,
    offlineCount: 12,
  },
  {
    cityName: '三亚',
    onlineCount: 3,
    offlineCount: 11,
  },
  {
    cityName: '陵水',
    onlineCount: 2,
    offlineCount: 6,
  },
  {
    cityName: '文昌',
    onlineCount: 8,
    offlineCount: 15,
  },
  {
    cityName: '乐东',
    onlineCount: 18,
    offlineCount: 5,
  },
]

function scrollUp() {
  nextTick(() => {
    const demo = reportTable.value.$refs.bodyWrapper.getElementsByClassName('el-scrollbar__wrap')[0]
    const tableScroll = ref(true)
    demo.addEventListener('mouseover', () => {
      tableScroll.value = false
    })
    demo.addEventListener('mouseout', () => {
      tableScroll.value = true
    })
    time.value = setInterval(() => {
      if (tableScroll.value) {
        demo.scrollTop += 1
        if (demo.clientHeight + demo.scrollTop === demo.scrollHeight) {
          demo.scrollTop = 0
        }
      }
    }, 80)
  })
}


onMounted(() => {
  console.log('生效---')
  scrollUp()
})
onUnmounted(() => {
  console.log('失效')
  clearTimeout(time.value)
})
</script>

<style lang="scss">
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>