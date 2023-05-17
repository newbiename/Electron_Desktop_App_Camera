// 导入
import { defineStore } from 'pinia'
import { ref } from 'vue'
// 定义接口
interface Config {
  page: string
  deviceId: string
  borderWidth?: string
  borderColor?: string
  rounded?: boolean
}

// 定义store 并导出
export const useConfigStore = defineStore(
  'counter',
  () => {
    // state
    const config = ref<Config>({
      // 默认配置
      page: 'setting',
      deviceId: '1S',
      borderWidth: '10px',
      borderColor: '#2c3e50',
      rounded: false
    })
    // getters
    const increment = (): void => {}
    const updateConfig = (): void => {
      // 将配置信息存入localStorage中
    }

    return { config, increment, updateConfig }
  },
  {
    persist: true
  }
)
