<script setup lang="ts">
import { CameraFive, Setting as SettingICon, InnerShadowUp } from '@icon-park/vue-next'
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import { useConfigStore } from './stores/useConfigStore'
const { config } = useConfigStore()
</script>

<template>
  <Suspense>
    <main class="relative group">
      <!-- 图标 -->
      <section>
        <SettingICon
          v-if="config.page == 'camera'"
          theme="outline"
          size="25"
          class="text-gray-200 cursor-pointer group-hover:block absolute bottom-0 left-1/2 -translate-x-1/2 z-20 mb-3"
          @click="config.page = 'setting'"
        />

        <CameraFive
          v-if="config.page == 'setting'"
          theme="outline"
          size="25"
          class="text-gray-200 cursor-pointer group-hover:block absolute bottom-0 left-1/2 -translate-x-1/2 z-20 mb-3"
          @click="config.page = 'camera'"
        />

        <InnerShadowUp
          v-if="config.page == 'camera'"
          theme="outline"
          size="25"
          class="text-gray-200 cursor-pointer group-hover:block absolute top-5 left-1/2 -translate-x-1/2 z-20 mb-13"
          @click="config.rounded = !config.rounded"
        />
      </section>
      <!-- 主体 -->
      <section>
        <Camera v-if="config.page == 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>
