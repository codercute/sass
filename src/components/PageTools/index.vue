<template>
  <el-card>
    <el-row type="flex" justify="space-between" align="middle">
      <el-col>
        <div v-if="showBefore">
          <i class="el-icon-info"></i>
          <slot name="before" />
        </div>
      </el-col>
      <el-col>
        <el-row type="flex" justify="end">
          <slot name="after" />
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: {
    showBefore: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style>

</style>
