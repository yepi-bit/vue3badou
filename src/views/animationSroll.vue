<template>
  <div class="data-container">
    <el-button type="primary" @click="huyaClick">爬取虎牙图片</el-button>
    <div class="data-content" :style="{ animationDuration: duration }">
      <div v-for="(item, index) in data" :key="index" class="data-item">
        {{ item.name }}: {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
// import puppeteer from "puppeteer";
// import * as fs from "fs";


const huyaClick = async () => {
  // 启动浏览器
  const browser = await puppeteer.launch();
  // 打开一个新页面
  const page = await browser.newPage();
  // 访问页面
  await page.goto('https://www.huya.com');
  // 等待页面加载完成
  await page.waitForSelector('img');
  // 提取图片URL
  const imageUrls = await page.$$eval('img', imgs => imgs.map(img => img.src));

  // 下载图片
  for (let i = 0; i < imageUrls.length; i++) {
    const imageUrl = imageUrls[i];
    const imageBuffer = await page.goto(imageUrl).then(response => response.buffer());
    // fs.writeFileSync(`image${i}.jpg`, imageBuffer);
    console.log(`Image ${i} downloaded`);
  }

  // 关闭浏览器
  await browser.close();
}
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