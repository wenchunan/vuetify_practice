import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import {
  defineRule, Form, Field, ErrorMessage, configure
} from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import AllRules from '@vee-validate/rules'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import $statusMsg from '@/methods/statusMsg'

import emitter from '@/utils/emitter'

import App from './App.vue'
import router from './router'
import { toThousands, date } from '@/libs/filters.js'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW })
})
setLocale('zh_TW')

const app = createApp(App)
app.config.globalProperties.$filters = {
  toThousands, date
}
app.use(router)
app.config.globalProperties.$statusMsg = $statusMsg
app.config.globalProperties.$emitter = emitter

app.use(VueAxios, axios)
app.component('VueLoading', Loading)
app.component('VueForm', Form)
app.component('VueField', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
