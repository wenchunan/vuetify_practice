<template>
    <v-app-bar app dark color="#323B50" flat>
        <v-btn text large>
            <router-link to="/admin/home" class="white--text">Products
            </router-link>
        </v-btn>
        <v-btn text large>
            <router-link to="/admin/about" class="white--text">About</router-link>
        </v-btn>
        <v-btn text large>
            <router-link to="/admin/contact" class="white--text">Contact us</router-link>
        </v-btn>
        <v-spacer></v-spacer>
        <v-divider vertical inset class="mr-4"></v-divider>
        <v-text-field label="Search" prepend-inner-icon="mdi-magnify" dense class="mt-4"></v-text-field>
        <v-btn text small class="grey--text" @click.prevent="signOut">
            Sign out
            <v-icon small>mdi-chevron-down</v-icon>
        </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    methods: {
        signOut () {
            const api = 'https://vue3-course-api.hexschool.io/v2/logout'
            document.cookie = 'annaToken=;expires=;'
            this.$http
                .post(api).then((res) => {
                    console.log(res.data)
                    alert('登出成功! Token 已清除')
                    this.$router.push('/')
                })
        }
    }
}
</script>

<style>
.v-tabs-slider {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 15px !important;
    width: 20px !important;
    border-radius: 150px 150px 0px 0px;
    background-color: #f34f64;
}
.v-tabs {
    width: 30% !important;
}
.v-btn:not(.v-btn--round).v-size--small {
    min-width: 10px !important;
    padding: 0 5px !important;
}
.theme--dark.v-text-field > .v-input__control > .v-input__slot::before {
    border-color: #323b50 !important;
}
</style>