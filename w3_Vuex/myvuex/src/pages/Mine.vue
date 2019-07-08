<template>
  <div>
    <el-avatar :src="touxiang" shape="square" :size="200"></el-avatar>
    <el-upload
      drag
      action="http://localhost:1904/upload/avatar"
      multiple
      name="avatar"
      :on-success="uploadSuccess"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
import Vue from "vue";
import { Upload, Avatar} from "element-ui";
Vue.use(Upload);
Vue.use(Avatar);
export default {
    data(){
        return {
            touxiang:require('../assets/img/goods2.jpg')
        }
    },
    methods:{
        uploadSuccess(response, file, fileList){
            this.touxiang = 'http://localhost:1904/' + response.data.path;
        }
    }
};
</script>
