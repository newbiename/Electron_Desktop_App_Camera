<template>
  <main
    class="w-screen h-screen overflow-hidden"
    :class="config.rounded ? 'rounded-full' : 'rounded-none'"
    :style="`border:solid ${config.borderWidth} ${config.borderColor}`"
  >
    <video
      class="object-cover h-screen"
      :class="config.rounded ? 'rounded-full' : 'rounded-none'"
    ></video>
    <Setting />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Setting from './Setting.vue'
//V3
// import useConfig from '@renderer/composables/useConfig'
// const { config } = useConfig()

//pinia
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
// onMounted 是 Vue 3 的生命周期钩子函数，用于在组件挂载后执行的操作
onMounted(() => {
  // 创建一个 constraints 对象，指定了请求的媒体类型
  const constraints = {
    audio: false,
    video: {
      deviceId: config.deviceId,
      width: 1280,
      height: 720
    }
    // eslint-disable-next-line no-undef
  } as MediaStreamConstraints
  // 获取 video 元素
  const video = document.querySelector('video')!
  // 调用 navigator.mediaDevices.getUserMedia 方法，请求使用用户的媒体设备
  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    // video.srcObject 属性指定了 video 元素播放的媒体源
    video.srcObject = stream
    video.play()
  })
})
</script>

<style lang="scss" scoped></style>
