<template>
<el-dialog :show-close="false" stitle="登陆页面" :visible.sync="dialogFormVisible">
  <el-form>
    <el-form-item label="用户名" :label-width="formLabelWidth">
      <el-input autocomplete="off" v-model="user.username"></el-input>
    </el-form-item>
    <el-form-item label="登录密码" :label-width="formLabelWidth">
      <el-input autocomplete="off" v-model="user.password"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="login">登 录</el-button>
  </div>
</el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: true,
        formLabelWidth: '120px',
        user: {
            username:"",
            password:""
        }
      };
    },
    methods: {
        login: function() {

            var url = "https://76b4024a-239e-4daf-8c44-510dbab144ef.mock.pstmn.io/login"
            this.axios.get(url, {
                params: {
                    username: this.user.username,
                    password: this.user.password
                }
            }).then((response) => {
                // 进行关闭登录弹窗
                this.dialogFormVisible = false
                // 进行Element-ui弹窗提示
                this.$message({
                     message: '登录成功',
                     type: 'success'
                     }); 
                // 进行登录到首页
                this.$router.push("index")
            }).catch((response => {
                this.$message.error('登录失败');
            }))

        }
    }
  };
</script>

<style>

</style>