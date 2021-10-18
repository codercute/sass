<template>
  <div class="dashboard-container">
    <div class="app-container" />
    <el-card class="tree-card">
      <tree-tools :tree-node="company" :is-root="true" @addDepts="addDepts" />
      <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
        <tree-tools slot-scope="{ data }" :tree-node="data" @editDepts="editDepts" @delDepts="getDepartments" @addDepts="addDepts" />
      </el-tree>
    </el-card>
    <add-dept ref="addDetp" :show-dialog.sync="showDialog" :tree-node="node" @addDepts="getDepartments" />
  </div>
</template>

<script>
import treeTools from './components/tree-tools.vue'
import addDept from './components/add-dept.vue'
import { getDepartments } from '@/api/departments'
import { tranLisToTreeData } from '@/utils/processing-data'
export default {
  components: {
    treeTools,
    addDept
  },
  data() {
    return {
      defaultProps: {
        label: 'name'
      },
      departs: [],
      company: {},
      showDialog: false,
      node: null
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      const result = await getDepartments()
      console.log(result)
      this.company = { name: result.companyName, manager: '负责人', id: '' }
      this.departs = tranLisToTreeData(result.depts, '')
    },
    addDepts(node) {
      this.showDialog = true
      this.node = node
    },
    editDepts(node) {
      this.showDialog = true
      this.node = node
      this.$refs.addDetp.getDepartDetail(node.id)
    }
  }
}
</script>

<style scoped>
.tree-card {
  padding: 30px  140px;
  font-size:14px;
}
</style>
