<template>
  <div>
    <el-button type="primary" plain @click="exportXlsx">导出</el-button>
  </div>
  <div class="schedule">
    <el-table id="course-table" :data="tableData" border :span-method="objectSpanMethod">
      <el-table-column prop="time" label="时间" width="120" align="center"></el-table-column>
      <el-table-column label="周一" align="center">
        <el-table-column v-for="classNum in [1, 2, 3]" :key="classNum" :label="classNum.toString()" align="center">
          <template #default="scope">
            <div class="cell-content" v-for="course in scope.row['周一'][classNum]" :key="course.class">
              {{ course.name }}
            </div>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="周二" align="center">
        <el-table-column v-for="classNum in [1, 2, 3]" :key="classNum" :label="classNum.toString()" align="center">
          <template #default="scope">
            <div class="cell-content" v-for="course in scope.row['周二'][classNum]" :key="course.class">{{
                course.name
              }}
            </div>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="周三" align="center">
        <el-table-column v-for="classNum in [1, 2, 3]" :key="classNum" :label="classNum.toString()" align="center">
          <template #default="scope">
            <div class="cell-content" v-for="course in scope.row['周三'][classNum]" :key="course.class">{{
                course.name
              }}
            </div>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="周四" align="center">
        <el-table-column v-for="classNum in [1, 2, 3]" :key="classNum" :label="classNum.toString()" align="center">
          <template #default="scope">
            <div class="cell-content" v-for="course in scope.row['周四'][classNum]" :key="course.class">{{
                course.name
              }}
            </div>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="周五" align="center">
        <el-table-column v-for="classNum in [1, 2, 3]" :key="classNum" :label="classNum.toString()" align="center">
          <template #default="scope">
            <div class="cell-content" v-for="course in scope.row['周五'][classNum]" :key="course.class">{{
                course.name
              }}
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import * as XLSX from 'xlsx'
// import * as FileSaver from 'file-saver';
export default {
  data() {
    return {
      tableData: [
        {
          time: '7:00-7:35',
          '周一': {1: [{name: '自由早读'}], 2: [], 3: []},
          '周二': {1: [], 2: [], 3: []},
          '周三': {1: [], 2: [], 3: []},
          '周四': {1: [], 2: [], 3: []},
          '周五': {1: [], 2: [], 3: []}
        },
        {
          time: '7:40-8:20',
          '周一': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周二': {1: [{class: 1, name: '生物'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周三': {1: [{class: 1, name: '地理'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周四': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周五': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]}
        },
        {
          time: '8:30-9:10',
          '周一': {1: [{class: 1, name: '物理'}], 2: [{class: 2, name: '化学'}], 3: [{class: 3, name: '历史'}]},
          '周二': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周三': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周四': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周五': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]}
        },
        {
          time: '',
          '周一': {1: [{name: '课间操'}], 2: [], 3: []},
          '周二': {1: [], 2: [], 3: []},
          '周三': {1: [], 2: [], 3: []},
          '周四': {1: [], 2: [], 3: []},
          '周五': {1: [], 2: [], 3: []}
        },
        {
          time: '9:40-10:20',
          '周一': {1: [{class: 1, name: '生物'}], 2: [{class: 2, name: '音乐'}], 3: [{class: 3, name: '体育'}]},
          '周二': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周三': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周四': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周五': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]}
        },
        {
          time: '10:30-11:10',
          '周一': {1: [{class: 1, name: '地理'}], 2: [{class: 2, name: '美术'}], 3: [{class: 3, name: '政治'}]},
          '周二': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周三': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周四': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周五': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]}
        },
        {
          time: '11:20-12:00',
          '周一': {1: [{class: 1, name: '地理'}], 2: [{class: 2, name: '美术'}], 3: [{class: 3, name: '政治'}]},
          '周二': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周三': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周四': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周五': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]}
        },
        {
          time: '12:30-2:20',
          '周一': {1: [{name:'午休'}], 2: [], 3: []},
          '周二': {1: [], 2: [], 3: []},
          '周三': {1: [], 2: [], 3: []},
          '周四': {1: [], 2: [], 3: []},
          '周五': {1: [], 2: [], 3: []}
        },
        {
          time: '2:50-3:30',
          '周一': {1: [{class: 1, name: '体育'}], 2: [{class: 2, name: '化学'}], 3: [{class: 3, name: '物理'}]},
          '周二': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周三': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周四': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周五': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]}
        },
        {
          time: '3:40-4:20',
          '周一': {1: [{class: 1, name: '文学艺术欣赏'}], 2: [{class: 2, name: '地理'}], 3: [{class: 3, name: '音乐'}]},
          '周二': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周三': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周四': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周五': {1: [{class: 1, name: '语文'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]}
        },
        {
          time: '4:30-5:10',
          '周一': {1: [], 2: [], 3: []},
          '周二': {1: [{class: 1, name: '化学'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周三': {1: [{class: 1, name: '生物'}], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]},
          '周四': {1: [{class: 1, name: '语文'}], 2: [], 3: [{class: 3, name: '数学'}]},
          '周五': {1: [], 2: [{class: 2, name: '英语'}], 3: [{class: 3, name: '数学'}]}
        },
        {
          time: '5:20-6:00',
          '周一': {1: [], 2: [], 3: []},
          '周二': {1: [], 2: [], 3: []},
          '周三': {1: [], 2: [], 3: []},
          '周四': {1: [], 2: [], 3: []},
          '周五': {1: [], 2: [], 3: []}
        },
      ]
    };
  },
  methods: {
    // 处理上传事件
    handleUpload(event) {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, {type: 'array'})
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1})

        // 处理课程表数据
        // this.courseList = jsonData

        // 导出课程表数据到 Excel
        this.exportXlsx()
      }

      reader.readAsArrayBuffer(file)
    },
    // 导出
    exportXlsx() {
      /* convert table to workbook */
      const wb = XLSX.utils.table_to_book(document.querySelector('#course-table'))

      /* generate file and download */
      const wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      })
      const blob = new Blob([wbout], {type: 'application/octet-stream'})
      const filename = '课程表.xlsx'
      if (typeof window.navigator.msSaveBlob !== 'undefined') {
        /* IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed." */
        window.navigator.msSaveBlob(blob, filename)
      } else {
        /* other browsers */
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        document.body.appendChild(a)
        a.href = url
        a.download = filename
        a.click()
        setTimeout(function () {
          window.URL.revokeObjectURL(url)
          document.body.removeChild(a)
        }, 0)
      }
    },
    isObject(value) {
      return value !== null && typeof value === 'object';
    },
    objectSpanMethod({row, column, rowIndex, columnIndex}) {
      if (rowIndex === 0) {
        // [1, 2, 3, 4, 5].forEach(o => {
        //   if(columnIndex === o) {
        //     return [1, 3];
        //   }
        // })
        if(columnIndex === 1) {
          return [1, 3];
        }
      }
      if (rowIndex === 3) {
        if(columnIndex === 1) {
          return [1, 3];
        }
      }
      if (rowIndex === 7) {
        if(columnIndex === 1) {
          return [1, 3];
        }
      }
      // if (rowIndex === 10) {
      //   if(columnIndex === 1) {
      //     return [1, 3];
      //   }
      // }
      // console.log(row, column, rowIndex, columnIndex)
      const array = Object.keys(row).map(function (key) {
        return row[key]
      });
      array.forEach(o => {
        if (this.isObject(o)) {
          var arr = Object.keys(o).map(function (key) {
            return o[key]
          })
          if (arr === [[], [], []]) {
            // return [1, 3];
          }
          // [[],[],[]]
          // arr.forEach(i => {
          //   if (Array.isArray(i) && i && i.length === 0) {
          //     return [1, 3];
          //   }
          // })
        }
      })
    },
  }
}
;
</script>
<style>
.schedule {
  display: flex;
}

.el-table td {
  padding: 0;
  text-align: center;
  height: 40px;
  line-height: 40px;
}

.cell-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>