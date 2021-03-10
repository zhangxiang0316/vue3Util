import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/iconfont/iconfont.css'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import zxLib3 from 'zx-lib3'


// @ts-ignore
createApp(App).use(ElementPlus,{ locale }).use(zxLib3).use(store).use(router).mount('#app')
