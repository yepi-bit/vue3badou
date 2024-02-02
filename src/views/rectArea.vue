<template>
  <div>
    <el-input-number v-model="sideLength" :min="1" :max="100" style="margin-bottom: 12px"></el-input-number>
    <div>区域2</div>
    <div class="container" :style="{ gridTemplateColumns: `repeat(${sideLength}, 1fr)` }">
      <div v-for="(area, index) in areas" :key="index" class="sub-square" :style="{ backgroundColor: area.color, gridArea: area.gridArea }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideLength: 5,
    };
  },
  computed: {
    areas() {
      const totalArea = this.sideLength * this.sideLength;
      const areas = [];
      for (let row = 1; row <= this.sideLength; row++) {
        for (let col = 1; col <= this.sideLength; col++) {
          const size = Math.floor(Math.random() * totalArea / (this.sideLength * this.sideLength));
          const color = this.getRandomColor();
          const gridArea = `${row} / ${col} / span 1 / span 1`;
          areas.push({size, color, gridArea});
        }
      }
      return areas;
    },
  },
  methods: {
    getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    },
  },
};
</script>

<style>
.container {
  display: grid;
  height: 200px;
}

.sub-square {
  border: 1px solid #000;
}
</style>
