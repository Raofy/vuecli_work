<template>
<div>
  <el-row :gutter="10">
    <el-col :span="5">
      <el-input v-model="filter.course_name" placeholder="请输入内容">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </el-col>
    <el-col :span="1">
      <el-button type="primary" @click="search">查询</el-button>
    </el-col>
  </el-row>
      
      <el-table :data="courseList" style="width: 100%" border height="550" v-loading="loading" element-loading-text="数据加载中。。。。">
        <el-table-column fixed="left" prop="id" label="ID" ></el-table-column>
        <el-table-column prop="course_name" label="课程名称"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column prop="sort_num" label="排序"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
      </el-table>
</div>
</template>

<script>
export default {
    data() {
      return {
        // 定义数据
        loading: false,
        courseList: [],
        filter: {
          course_name: ""
        }
      }
    },

    // create()定义钩子函数，在DOM页面之前执行
    created() {
        this.loadCourse();
    },

    // 方法集合
    methods: {
        loadCourse() {
            this.loading = true;
            const url = "http://localhost:8080/lagou_edu_home/course"
            // 访问后台接口获取数据
            this.axios.get(url, {
              params: {
                methodName: "findCourseList"
              }
            }).then((response) => {
              // 将获取的数据进行渲染进去
              this.courseList = response.data
              this.loading = false
            });
        },
        search() {
          this.loading = true;
          const url = "http://localhost:8080/lagou_edu_home/course";
          this.axios.get(url, {
            params: {
              methodName: "findByCourseNameAndStatus",
              course_name: this.filter.course_name,
              status: 0
            }
          }).then((response) => {
              // 将获取的数据进行渲染进去
              this.courseList = response.data
              this.loading = false
            });
        }
    }
}
</script>

<style scoped>

</style>