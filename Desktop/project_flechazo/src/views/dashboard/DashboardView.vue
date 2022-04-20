<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
     <router-link class="nav-link text-light" to="/admin/products">後台</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/products">產品</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/orders">訂單</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/coupon">優惠券</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/" @click.prevent="signout">登出</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-view v-if="checkSuccess"></router-view>
</template>

<script>
export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  mounted () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)annaToken\s*=\s*([^;]*).*$)|^.*$/, '$1'
      )
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`

        const api = `${process.env.VUE_APP_API}/api/user/check`
        this.$http
          .post(api, { api_token: this.token })
          .then(() => {
            this.checkSuccess = true
          })
          .catch(() => {
            this.$statusMsg(false, '登入', '登入失敗')
            this.$router.push('/login')
          })
      } else {
        this.$statusMsg(false, '登入', '您尚未登入')
        this.$router.push('/login')
      }
    },
    signout (err) {
      document.cookie = 'annaToken=;expires=;'
      this.$statusMsg(err, '登出', '登出成功! token 已清除')
      this.$router.push('/login')
    }
  }
}
</script>
