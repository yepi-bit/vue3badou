<template>
  <div class="schedule">
    <el-table :data="scheduleData" style="width: 100%" border>
      <el-table-column prop="time" label="时间" width="120">
        <template #default="{ row }">
          <div class="cell-content">
            <span>{{ row.time }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column v-for="(day, index) in daysOfWeek" :key="index" :label="day" align="center" width="180">
        <template #default="{ row }">
          <div v-if="row[day].teacher" class="cell-content">
            <div class="subject">{{ row[day].subject }}</div>
            <div class="teacher">{{ row[day].teacher }}</div>
          </div>
          <div v-else class="cell-content">
            <div style="font-weight: bold">{{ row[day].subject }}</div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'GradeSchedule',
  data() {
    return {
      daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      scheduleData: [
        {
          time: '7:00 - 7:35',
          Monday: {subject: '自由早读'},
          Tuesday: {subject: '语文'},
          Wednesday: {subject: '英语'},
          Thursday: {subject: '语文'},
          Friday: {subject: '英语'}
        },
        {
          time: '7:40 - 8:20',
          Monday: {},
          Tuesday: {},
          Wednesday: {subject: '英语', teacher: '李老师'},
          Thursday: {},
          Friday: {}
        },
        {
          time: '8:30 - 9:10',
          Monday: {subject: '语文', teacher: '王老师'},
          Tuesday: {subject: '数学', teacher: '张老师'},
          Wednesday: {subject: '英语', teacher: '李老师'},
          Thursday: {},
          Friday: {}
        },
        {
          time: '',
          Monday: {subject: '课间操'},
          Tuesday: {subject: '课间操'},
          Wednesday: {subject: '课间操'},
          Thursday: {subject: '课间操'},
          Friday: {subject: '课间操'}
        },
        {
          time: '9:40 - 10:20',
          Monday: {subject: '音乐', teacher: '刘老师'},
          Tuesday: {subject: '美术', teacher: '赵老师'},
          Wednesday: {subject: '体育', teacher: '孙老师'},
          Thursday: {subject: '科学', teacher: '周老师'},
          Friday: {subject: '思想品德', teacher: '钱老师'}
        },
        {
          time: '10:30 - 11:10',
          Monday: {subject: '数学', teacher: '张老师'},
          Tuesday: {},
          Wednesday: {subject: '英语', teacher: '李老师'},
          Thursday: {subject: '科学', teacher: '周老师'},
          Friday: {subject: '思想品德', teacher: '钱老师'}
        },
        {
          time: '11:20 - 12:00',
          Monday: {subject: '英语', teacher: '李老师'},
          Tuesday: {subject: '语文', teacher: '王老师'},
          Wednesday: {},
          Thursday: {subject: '体育', teacher: '孙老师'},
          Friday: {subject: '音乐', teacher: '刘老师'}
        },
        {
          time: '12:30 - 2:20',
          Monday: {},
          Tuesday: {subject: '科学', teacher: '周老师'},
          Wednesday: {subject: '数学', teacher: '张老师'},
          Thursday: {},
          Friday: {}
        },
        {
          time: '2:50 - 3:30',
          Monday: {subject: '午休'},
          Tuesday: {subject: '午休'},
          Wednesday: {subject: '午休'},
          Thursday: {subject: '午休'},
          Friday: {subject: '午休'}
        },
        {
          time: '3:40 - 4:20',
          Monday: {subject: '思想品德', teacher: '钱老师'},
          Tuesday: {subject: '体育', teacher: '孙老师'},
          Wednesday: {subject: '科学', teacher: '周老师'},
          Thursday: {},
          Friday: {subject: '英语', teacher: '李老师'}
        },
        {
          time: '4:30 -5:10',
          Monday: {subject: '美术', teacher: '赵老师'},
          Tuesday: {subject: '音乐', teacher: '刘老师'},
          Wednesday: {},
          Thursday: {subject: '语文', teacher: '王老师'},
          Friday: {}
        },
        {
          time: '5:20 - 6:00',
          Monday: {subject: '课外活动'},
          Tuesday: {subject: '课外活动'},
          Wednesday: {subject: '课外活动'},
          Thursday: {subject: '课外活动'},
          Friday: {subject: '课外活动'}
        }
      ]
    };
  }
}
</script>

<style scoped>
.schedule {
  display: flex;
}

.el-table td {
  padding: 0;
  text-align: center;
  height: 50px;
  line-height: 50px;
}

.el-table th, .el-table td {
  border: none;
}

.el-table tr:nth-child(odd) td {
  background-color: #f5f7fa;
}

.cell-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.teacher {
  margin-top: 5px;
}
</style>
