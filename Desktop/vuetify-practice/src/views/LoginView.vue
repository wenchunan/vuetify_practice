<template>
<v-app style="background: #01579B">
    <v-form @submit.prevent="login" class="ma-auto">
        <v-card width="500" class="mx-auto py-6">
            <v-card-title class="text-h5 font-weight-bold justify-center">請先登入</v-card-title>
            <v-card-text>
                <v-text-field label="Username" prepend-icon="mdi-account-circle" v-model="user.username"></v-text-field>
                <v-text-field label="Password" type="password" prepend-icon="mdi-lock" v-model="user.password"></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-center">
               <v-btn color="light-blue darken-4 white--text" type="submit">登入</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</v-app>
</template>
<script>
export default {
    data() {
        return {
            user: {}
        }
    },
    methods: {
        login () {
            const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin'
            this.$http
                .post(api, this.user)
                .then((res) => {
                    console.log(res.data)
                    const { token, expired } = res.data
                    document.cookie = `annaToken=${token}; expires=${new Date(expired)}; `
                    this.$router.push('/admin/home')
                })
                .catch((err) => {
                    alert('登入失敗')
                    console.log(err)
                })
        }
    }
}
</script>