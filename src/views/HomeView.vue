<template>
  <div>
    <div>
      .env.dev--------{{ meta }}
    </div>
    <p>Collapse tags</p>
    <el-select v-model="dataValue" :disabled="isDisabled" :class="{ 'custom-disabled': isDisabled }">
      <el-option v-for="option in options2" :key="option.value" :label="option.label" :value="option.value"></el-option>
    </el-select>
    <el-button @click="saveSelection">保存</el-button>
    <el-cascader
        v-model="dataValue"
        :options="options"
        :props="props"
        collapse-tags
        clearable
        @change="dataValueChange"
    />
    <div>
      <p>Collapse tags tooltip</p>
      <el-cascader
          :options="options"
          :props="props"
          collapse-tags
          collapse-tags-tooltip
          clearable
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const props = {multiple: true}
const dataValue = ref(null)
const dataValueChange = () => {
  alert(dataValue.value)
}
const meta = ref(import.meta.env.VITE_DEV)
const isDisabled = ref(false)
const saveSelection = () => {
  isDisabled.value = true
}
const options2 = [
  {label: '选项1', value: '1'},
  {label: '选项2', value: '2'},
  {label: '选项3', value: '3'},
  {label: '选项4', value: '4'},
  {label: '选项5', value: '5'},
]
const options = [
  {
    value: 1,
    label: 'Asia',
    children: [
      {
        value: 2,
        label: 'China',
        children: [
          {value: 3, label: 'Beijing'},
          {value: 4, label: 'Shanghai'},
          {value: 5, label: 'Hangzhou'},
        ],
      },
      {
        value: 6,
        label: 'Japan',
        children: [
          {value: 7, label: 'Tokyo'},
          {value: 8, label: 'Osaka'},
          {value: 9, label: 'Kyoto'},
        ],
      },
      {
        value: 10,
        label: 'Korea',
        children: [
          {value: 11, label: 'Seoul'},
          {value: 12, label: 'Busan'},
          {value: 13, label: 'Taegu'},
        ],
      },
    ],
  },
  {
    value: 14,
    label: 'Europe',
    children: [
      {
        value: 15,
        label: 'France',
        children: [
          {value: 16, label: 'Paris'},
          {value: 17, label: 'Marseille'},
          {value: 18, label: 'Lyon'},
        ],
      },
      {
        value: 19,
        label: 'UK',
        children: [
          {value: 20, label: 'London'},
          {value: 21, label: 'Birmingham'},
          {value: 22, label: 'Manchester'},
        ],
      },
    ],
  },
  {
    value: 23,
    label: 'North America',
    children: [
      {
        value: 24,
        label: 'US',
        children: [
          {value: 25, label: 'New York'},
          {value: 26, label: 'Los Angeles'},
          {value: 27, label: 'Washington'},
        ],
      },
      {
        value: 28,
        label: 'Canada',
        children: [
          {value: 29, label: 'Toronto'},
          {value: 30, label: 'Montreal'},
          {value: 31, label: 'Ottawa'},
        ],
      },
    ],
  },
]
</script>
<style lang="scss">
.custom-disabled {
  pointer-events: none; /* 禁用鼠标事件 */
}
</style>
