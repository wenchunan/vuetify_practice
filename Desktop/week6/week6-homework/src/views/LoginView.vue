<template>
<div class="container">
    <div class="row justify-content-center">
        <h1 class="h3 mb-3">請先登入</h1>
        <div class="col-8">
        <form id="form" class="form-input" @submit.prevent="login">
            <div class="form-floating mb-3">
            <input
                type="email"
                class="form-control"
                id="emailInput"
                v-model="user.username"
                placeholder="name@example.com"
                autofocus
                required
            />
            <label for="emailInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
            <input
                type="password"
                class="form-control"
                id="passwordInput"
                v-model="user.password"
                placeholder="name@example.com"
                required
            />
            <label for="passwordInput">password</label>
            </div>
            <button type="submit" class="btn btn-primary btn-lg w-100">
            登入
            </button>
        </form>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    login () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http
        .post(api, this.user)
        .then((response) => {
          const { token, expired } = response.data
          document.cookie = `annaToken=${token}; expires=${new Date(
            expired
          )}; `
          this.$router.push('/admin')
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
