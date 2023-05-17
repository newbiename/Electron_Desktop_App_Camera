import { ref } from 'vue'
type ConfigType = {
  deviceId: string
  page: string
}
const initConfig = {
  deviceId: '1S',
  page: 'camera'
}

export default () => {
  // 从localStorage中获取配置信息
  const cache = localStorage.getItem('config')
  // 如果有缓存，就用缓存，否则就用默认配置
  const data = cache ? (JSON.parse(cache) as ConfigType) : initConfig
  // 将配置信息存入ref中
  const config = ref(data)

  // 更新配置信息
  const updateConfig = (): void => {
    // 将配置信息存入localStorage中
    localStorage.setItem('config', JSON.stringify(config.value))
  }
  return { config, updateConfig }
}
