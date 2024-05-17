<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div style="height: 100vh">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/dynamicLoad">DynamicLoad</RouterLink>
    <RouterLink to="/vue3Table">vue3Table</RouterLink>
    <RouterLink to="/barEchart">barEchart</RouterLink>
    <RouterLink to="/animationSroll">animationSroll</RouterLink>
    <RouterLink to="/courseView">courseView</RouterLink>
    <RouterLink to="/gradeCourse">gradeCourse</RouterLink>
    <RouterLink to="/allGrade">allGrade</RouterLink>
    <RouterLink to="/timePicker">timePicker</RouterLink>
    <RouterLink to="/selfCourse">selfCourse</RouterLink>
    <RouterLink to="/rectArea">rectArea</RouterLink>
    <RouterLink to="/reward">reward</RouterLink>
    <RouterLink to="/webSocket">webSocket</RouterLink>
    <RouterLink to="/sseView">sseView</RouterLink>
    <div>
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
</style>
