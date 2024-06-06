<template>
  <div>
    <p v-if="isConnected">已连接</p>
    <p v-else>未连接</p>
    <p>{{ message ? message : '暂无' }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
//如果你的应用程序运行在非加密的 HTTP（HTTP://）协议下，
//那么你需要确保 WebSocket 的连接 URL 也使用相同的协议。
//如果你的应用程序是通过 HTTP 提供的，那么你可以使用非安全的 WebSocket 连接（ws://）
//所以，你可以使用 ws:// 来代替 http://，这将允许你在非加密的 HTTP 环境中建立 WebSocket 连接。
const url = 'wss://test.badou888.com/ws/device/ws/sos-view?phone=1'
const isConnected = ref(false)
const message = ref('')
let websocket

//开启WebSocket
function connectWebSocket() {
  websocket = new WebSocket(url)

  websocket.onopen = () => {
    isConnected.value = true
    // 连接成功后发送数据
    sendDataToWebSocket()
  }

  websocket.onclose = () => {
    isConnected.value = false
  }

  //接收服务器返回数据
  websocket.onmessage = (event) => {
    console.log(event)
    message.value = event.data
  }

  websocket.onerror = (error) => {
    console.error('WebSocket error:', error)
  }
}

//关闭WebSocket
function disconnectWebSocket() {
  if (websocket) {
    websocket.close()
  }
}

//要发送数据到 WebSocket 服务器，你可以使用 websocket.send() 方法。
//在你的示例中，你可以在连接成功后调用 send() 方法发送数据。
function sendDataToWebSocket() {
  const dataToSend = {
    cmd: 10,
    id: '',
    data: {
      camera: '4K USB Camera 1'
    }
  }

  // 将数据转换为字符串并发送到服务器
  websocket.send(JSON.stringify(dataToSend))
}

onMounted(() => {
  // connectWebSocket()  //开启websocket连接
})

onBeforeUnmount(() => {
  disconnectWebSocket()
})

</script>