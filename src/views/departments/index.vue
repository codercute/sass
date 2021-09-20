<template>
  <div class="dashboard-container">
    <div class="app-container" />
    <el-card class="tree-card">
      <tree-tools :tree-node="company" :is-root="true" />
      <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
        <tree-tools slot-scope="{ data }" :tree-node="data" />
      </el-tree>
    </el-card>

  </div>
</template>

<script>
import treeTools from './components/tree-tools.vue'
import { getDepartments } from '@/api/departments'
import { tranLisToTreeData } from '@/utils/processing-data'
export default {
  components: {
    treeTools
  },
  data() {
    return {
      defaultProps: {
        label: 'name'
      },
      departs: [],
      company: {}
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      const result = await getDepartments()
      console.log(result)
      this.company = { name: result.companyName, manager: '负责人' }
      this.departs = tranLisToTreeData(result.depts, '')
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
