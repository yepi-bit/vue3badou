<template>
  <div class="test">
    <el-cascader
        ref="cascader"
        :props="props"
        v-model="selected"
        collapse-tags
        collapse-tags-tooltip
        clearable
    ></el-cascader>
    <el-button>数据：{{ selected }}</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      props: {
        lazy: true,
        // checkStrictly: true,
        multiple: true,
        lazyLoad(node, resolve) {
          const {level} = node;
          if (level == 0) {
            let schoolId = 0;
            setTimeout(() => {
              const nodes = Array.from({length: level + 1}).map(item => ({
                value: "all" + ++schoolId,
                label: `学校${schoolId}`,
              }));
              resolve(nodes);
            }, 200);
          } else if (level == 1) {
            let teacherId = 0;
            setTimeout(() => {
              const nodes = Array.from({length: level + 1}).map(item => ({
                value: "g" + ++teacherId,
                label: `年级${teacherId}`,
              }));
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
              resolve(nodes);
            }, 200);
          } else {
            let teacherId = 0;
            setTimeout(() => {
              const nodes = Array.from({length: level + 1}).map(item => ({
                value: "c" + ++teacherId,
                label: `班级${teacherId}`,
                leaf: level >= 2
              }));
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
              resolve(nodes);
            }, 200);
          }
        }
      }
    };
  },
  methods: {}
}
</script>