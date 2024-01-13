<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>时间 \ 周</th>
        <th>周一</th>
        <th>周二</th>
        <th>周三</th>
        <th>周四</th>
        <th>周五</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, rowIndex) in dataValue" :key="rowIndex">
        <td class="time">{{ getTime(rowIndex) }}</td>
        <td v-for="(cell, colIndex) in row" :key="colIndex" :class="[getColor(cell)]">{{ cell }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const dataValue = reactive([
  ['语文', '数学', '英语', '音乐', '美术'],
  ['数学', '英语', '物理', '化学', '生物'],
  ['英语', '地理', '历史', '政治', '体育'],
  ['化学', '生物', '地理', '历史', '政治'],
  ['语文', '数学', '物理', '化学', '体育']
])
const getColor = (course) => {
  switch (course) {
    case '语文':
      return 'red';
    case '数学':
      return 'blue';
    case '英语':
      return 'green';
    case '音乐':
      return 'yellow';
    case '美术':
      return 'purple';
    default:
      return '';
  }
}
const getTime = (rowIndex) => {
  const hours = Math.floor(rowIndex / 2) + 8;
  const minutes = rowIndex % 2 === 0 ? '00' : '45';
  return `${hours}:${minutes}`;
}

</script>

<style scoped lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
}

th {
  background-color: #f2f2f2;
}

.red {
  background-color: #ee5d5d;
}

.blue {
  background-color: #6c6cf3;
}

.green {
  background-color: #7eee7e;
}

.yellow {
  background-color: #efef75;
}

.purple {
  background-color: #a661a6;
}

</style>