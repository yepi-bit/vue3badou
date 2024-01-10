<template>
  <div class="sonColor">
    <h1 class="green">me {{ value }}</h1>
    <el-button @click="btn">sonBtn</el-button>
    <el-dialog
        v-model="dialogVisible"
        title="info"
        width="42%"
        :before-close="handleClose"
    >
      <el-form ref="formRef" v-loading="formLoading" :model="form" label-width="120px">
        <el-form-item label="Instant delivery" prop="delivery">
          <el-switch v-model="form.delivery"/>
        </el-form-item>
        <el-form-item label="Activity type" prop="type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="Online activities" name="type"/>
            <el-checkbox label="Promotion activities" name="type"/>
            <el-checkbox label="Offline activities" name="type"/>
            <el-checkbox label="Simple brand exposure" name="type"/>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources" prop="resource">
          <el-radio-group v-model="form.resource">
            <el-radio label="Sponsor"/>
            <el-radio label="Venue"/>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form" prop="desc">
          <el-input v-model="form.desc" type="textarea"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button @click="onCancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
import moment from "moment";
import {nextTick, reactive, ref} from "vue";
import {ElMessage} from 'element-plus'

const dialogVisible = ref(false)
const formLoading = ref(false)
const formType = ref('')
const formRef = ref()
const form = ref({
  delivery: false,
  type: [],
  resource: undefined,
  desc: undefined,
})
const handleClose = () => {
  dialogVisible.value = false
}
/** 打开弹窗 */
const open = async (type, id) => {
  dialogVisible.value = true
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      await nextTick()
      form.value = await asyncData()
    } finally {
      formLoading.value = false
    }
  }
}
const asyncData = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const nodes = reactive({
        delivery: true,
        type: ['Promotion activities', 'Simple brand exposure'],
        resource: 'Venue',
        desc: '我是yePi',
      })
      resolve(nodes);
    }, 200);
  })
}
defineProps({
  value: Number | String,
  data: () => []
});
const emit = defineEmits(['sonBtn'])

defineExpose({open})

/** 重置表单 */
const resetForm = () => {
  form.value = {
    delivery: false,
    type: [],
    resource: undefined,
    desc: undefined,
  }
  formRef.value?.resetFields()
}
const onSubmit = async () => {
  // 校验表单
  if (!formRef) return
  const valid = await formRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    if (formType.value === 'create') {
      // await CheckTimeApi.createCheckTime(data)
      ElMessage({
        message: 'common.createSuccess',
        type: 'success',
      })
    } else {
      // await CheckTimeApi.updateCheckTime(data)
      ElMessage({
        message: 'common.updateSuccess',
        type: 'success',
      })
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success', true)
  } finally {
    formLoading.value = false
  }
}
const onCancel = () => {
  dialogVisible.value = false
}
const btn = () => {
  let time = moment().format('MMMM Do YYYY, HH:mm:ss a');
  emit('sonBtn', time)
}
</script>

<style lang="scss" scoped>
.sonColor {
  background: #e9f4f5;
}
</style>
