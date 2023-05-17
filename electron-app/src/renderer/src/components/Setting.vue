<template>
  <main class="bg-[#2c3e50] w-screen h-screen p-5 flex flex-col gap-5 py-10">
    <h2 class="text-gray-50 text-center text-sm mb-5 opacity-70">参数设置</h2>

    <el-select v-model="config.deviceId" placeholder="请选择摄像头" clearable filterable>
      <el-option
        v-for="item in cameras"
        :key="item.deviceId"
        :label="item.label"
        :value="item.deviceId"
      ></el-option>
    </el-select>

    <el-input
      v-model="config.borderWidth"
      placeholder="边框宽度"
      size="normal"
      clearable
    ></el-input>

    <el-input
      v-model="config.borderColor"
      placeholder="边框颜色"
      size="normal"
      clearable
    ></el-input>

    <!-- <el-button type="primary" @click="onSubmit">保存</el-button> -->
  </main>
</template>

<script setup lang="ts">
// V3 状态管理
// import useConfig from '@renderer/composables/useConfig'
// const { config, updateConfig } = useConfig()

// Pinia 状态管理
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()

const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter((device) => device.kind.includes('video'))
// const onSubmit = (): void => {
//   updateConfig()
// }
</script>

<style lang="scss" scoped></style>
