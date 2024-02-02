<template>
<div>
  <el-table :data="tableData" class="custom-table" border>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="age" label="年龄"></el-table-column>
    <el-table-column v-for="classNum in [1, 2, 3]" :label="'第' + classNum + '班'" :span-method="spanMethod">
      <template #default="scope">
        <div v-if="hasCustomText(scope.rowIndex, classNum)">{{ getCustomText(scope.rowIndex, classNum) }}</div>
        <div v-else>{{ scope.row['class'+classNum] }}</div>
      </template>
    </el-table-column>
  </el-table>

</div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        { name: '张三', age: 20, class1: '语文', class2: '数学', class3: '英语' },
        { name: '李四', age: 22, class1: '自由早读', class2: '自由早读', class3: '化学' },
        { name: '王五', age: 21, class1: '物理', class2: '英语', class3: '自由早读' },
        { name: '赵六', age: 19, class1: '自由早读', class2: '地理', class3: '自由早读' },
      ],
      customText: {
        2: {
          2: '自定义文字1',
        },
        3: {
          1: '自定义文字2',
          3: '自定义文字3',
        },
      },
    };
  },
  methods: {
    spanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        // 第一行不需要合并单元格
        return [1, 1];
      }
      const prevRow = this.tableData[rowIndex - 1];
      if (
          !prevRow ||
          row.class1 !== prevRow.class1 ||
          row.class2 !== prevRow.class2 ||
          row.class3 !== prevRow.class3
      ) {
        // 如果当前行与上一行的数据不同，则需要合并单元格
        return [1, 3];
      } else {
        return [0, 0];
      }
    },
    hasCustomText(rowIndex, classNum) {
      return this.customText[classNum] && this.customText[classNum][rowIndex];
    },
    getCustomText(rowIndex, classNum) {
      return this.customText[classNum][rowIndex];
    },
  }

}
</script>
<style scoped lang="scss">

</style>