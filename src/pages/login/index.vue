<template>
    <!-- 登录页采用 bootstrap3 搭建 -->
    <div class="login">
        <!-- 登录表单 -->
        <div class="login-wrapper">
            <div class="login-left">
                <div class="login-time">
                    {{ time }}
                </div>
                <p class="title">{{ t('login.info') }}</p>
            </div>
            <div class="login-right">
                <div class="login-right-main">
                    <h4 class="title">
                        {{ t('login.title') }}
                        <div class="dropdown" style="margin-left: 10px">
                            <i class="iconfont icon-zhongyingwen dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul class="dropdown-menu" style="font-size: 12px;">
                                <li><button class="dropdown-item" type="button" :disabled="currentLocale === 'zh-CN'" @click="changeLoacle('zh-CN')">中文</button></li>
                                <li><button class="dropdown-item" type="button" :disabled="currentLocale === 'en-US'" @click="changeLoacle('en-US')">Englisth</button></li>
                            </ul>
                        </div>
                    </h4>
                    <div class="login-right-form">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="iconfont icon-renyuan-05"></i></span>
                            <input type="text" class="form-control" v-model="username" :placeholder="t('login.username')" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="iconfont icon-mima"></i></span>
                            <input type="password" id="inputPassword5" class="form-control" v-model="password" aria-describedby="passwordHelpBlock" :placeholder="t('login.password')" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="iconfont icon-anquanzhongxin"></i></span>
                            <input type="text" max="4" class="form-control"  v-model="codeval" aria-describedby="passwordHelpBlock" :placeholder="t('login.code')" />
                            <span class="input-group-text" id="basic-addon2" style="letter-spacing: 4px;" @click="changeCode">{{ code }}</span>
                        </div>
                        <button type="button" class="btn btn-outline-primary mt-3 mb-3" style="width: 100%" @click="login">{{ t('login.title') }}</button>
                    </div>
                    <div class="login-menu mt-3">
                        <a href="#" @click.stop="">{{ t('login.userLogin') }}</a>
                        <!--<a href="#" @click.stop="activeName='code'">{{ $t('login.phoneLogin') }}</a>-->
                        <a href="#" @click.stop="">{{ t('login.thirdLogin') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onDeactivated, ref } from 'vue'
import { dateFormat } from '@/utils/date'
import { getRandomString } from '@/utils/utils'
import { ElMessage } from 'element-plus'
import { Md5 } from 'ts-md5'
import useLocale from '@/utils/useLocale'
import router from '@/router'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const { loginUser } = userStore

/* 语言切换 */
const { i18n: { t }, currentLocale, changeLoacle } = useLocale()

const time = ref('')
const username = ref('')
const password = ref('')
const codeval = ref('')
const code = ref('')

const changeCode = () => {
    code.value = getRandomString(4)
}
const login = () => {
    if (code.value != codeval.value) return ElMessage.error(t('login.codeError'))
    if (username.value === '') return ElMessage.error(t('login.usernameError'))
    if (password.value === '') return ElMessage.error(t('login.passwordError'))
    const data = {
        username: username.value,
        password: Md5.hashStr(password.value),
        code: code.value
    }
    loginUser(data).then(() => {
        router.push({path: '/'})
    })
}
const getTime = () => {
    setInterval(() => {
        time.value = dateFormat(new Date(), '')
    })
}
const init = () => {
    changeCode()
    getTime()
}
init()
onDeactivated(() => {})
</script>

<style scoped>

</style>