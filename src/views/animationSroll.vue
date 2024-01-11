<template>
  <div class="data-container">
    <div class="data-content" :style="{ animationDuration: duration }">
      <div v-for="(item, index) in data" :key="index" class="data-item">
        {{ item.name }}: {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

const duration = ref('10s')
const data = reactive([
  { name: '数据1', value: 100 },
  { name: '数据2', value: 200 },
  { name: '数据3', value: 300 },
  { name: '数据4', value: 400 },
  { name: '数据5', value: 500 },
  { name: '数据6', value: 600 },
  { name: '数据7', value: 700 },
  { name: '数据8', value: 800 },
])
</script>

<style lang="scss">
.data-container {
  width: 200px;
  height: 20px;
  overflow: hidden;
}

.data-content {
  white-space: nowrap;
  animation: marquee linear infinite;
}
.data-item {
  display: inline-block;
  padding: 0 10px;
}
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-200%);
  }
}
</style>