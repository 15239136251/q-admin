import { createI18n } from 'vue-i18n'

import zh from './zh'
import en from './en'
import { getStore } from '@/utils/storage'

const locale = getStore({name: 'locale'}) || 'zh-CN'
//注册i8n实例并引入语言文件
const localeData = {
    locale: locale,
    fallbackLocale: 'en-US',// 不存在默认则为英文
    allowComposition: true,// 允许组合式api
    messages: {
        'zh-CN': zh,
        'en-US': en,
    }
}

const i18n = createI18n(localeData)

export default i18n