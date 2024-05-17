<template>
  <div>
    接收数据: {{ accText }}0
  </div>
</template>
<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import EventSourcePolyfill from 'eventsource-polyfill';

const accText = ref()
let eventSource
const createSse = () => {
  //创建sse
  eventSource = new EventSourcePolyfill('https://test.badou888.com/admin-api/device/report/sos/sse?phone=1', {
    headers: {
      'tenant-id': 1,
      'X-Custom-Header': 'value'
    }
  });
  console.log(eventSource,'-tenant-id')
  eventSource.onopen = function (e) {
    console.log('SSE链接成功', e);
  }
  // 监听open
  eventSource.addEventListener('open', e => {
    console.log('open SSE connection.', e);
  })
  eventSource.onmessage = function (e) {
    if (e.data) {
      console.log(e.data)
      accText.value = JSON.parse(e.data)
    }
  }
  // 监听message
  eventSource.addEventListener('message', e => {
    console.log('message SSE connection.', e);
  })
  eventSource.onerror = (err) => {
    console.log('SSE链接失败', err);
  }
  // 监听error
  eventSource.addEventListener('error', e => {
    console.log('error SSE connection.', e);
  })
  eventSource.close = (e) => {
    console.log("close : " + e)
  }
  // 监听close
  eventSource.addEventListener('close', e => {
    console.log('Close SSE connection.', e);
  })
}
onMounted(() => {
  createSse()
})
onUnmounted(() => {
  createSse()
})
</script>
<style scoped lang="scss">

</style>