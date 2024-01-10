<template>
  <div>
    <div class="faColor">
      <div :style="{color: isTo ? 'red' : ''}">我是父页面</div>
      <el-button @click="toOpen">openFaBtn</el-button>
    </div>
    <hello-world ref="formRefFa" :value="value" @sonBtn="sonBtn" @success="success"></hello-world>
    <div>isToRef: {{ isToRef }}</div>
    <div>isToRefs: {{ isToRefs }}</div>
    <el-button @click="isTrueClick">是否：{{ isTrue }}</el-button>
  </div>
</template>

<script setup>
import {isReactive, reactive, ref, toRef, toRefs} from "vue";
import HelloWorld from "../components/HelloWorld.vue";

const value = ref('son')
const obj = reactive({a: 1, b: 2})
const obj2 = {a: 1, b: 2}
const isToRef = toRef(obj, 'a')
const isToRefs = toRefs(obj)
const sonBtn = (op) => {
  value.value = op
}
const isTrue = ref('请点击')
const formRefFa = ref()
const isTo = ref(false)
const isTrueClick = () => {
  return isTrue.value = isReactive(obj)
}
const toOpen = () => {
  formRefFa.value.open('edit', true)
}
const success = (val) => {
  isTo.value = val
}

</script>

<style lang="scss" scoped>
.faColor {
  background: #cbcef3;
}
</style>