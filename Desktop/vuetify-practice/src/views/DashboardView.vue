<template>
    <div>
        <Navbar/>
        <router-view v-if="checkSuccess"></router-view>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
export default {
    data () {
        return {
            checkSuccess: false
        }
    },
    components: {
        Navbar
    },
    methods: {
        checkLogin () {
            const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)annaToken\s*=\s*([^;]*).*$)|^.*$/, '$1'
            )
            if (token) {
                this.$http.defaults.headers.common.Authorization = `${token}`
                const api = `https://vue3-course-api.hexschool.io/v2/api/user/check`
                this.$http
                    .post(api, { api_token: this.token })
                    .then(() => {
                        this.checkSuccess = true
                    })
                    .catch(() => {
                        alert('登入失敗')
                        this.$router.push('/')
                    })
                
            }else{
                alert('您尚未登入')
                this.$router.push('/')
            }
        }
    },
    mounted() {
        this.checkLogin()
    }
}
</script>