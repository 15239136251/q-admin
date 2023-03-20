import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { setStore } from './storage'
export default function useLocale() {
    // 实例化i18n
    const i18n = useI18n()
    // 获取当前语言设置
    const currentLocale = computed(() => i18n.locale.value)
    // 切换语言
    const changeLoacle = (value: string) => {
        // 赋值切换语言
        i18n.locale.value = value
        // 修改本地缓存
        setStore({
            name: 'locale',
            content: value
        })
        // 提示切换成功
        ElMessage.success(i18n.t('navbar.action.locale'))
    }

    return {
        i18n,
        currentLocale,
        changeLoacle
    }
}