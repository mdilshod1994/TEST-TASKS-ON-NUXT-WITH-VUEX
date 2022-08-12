<template>
    <div class="container">
        <div class="navbar">
            <nuxt-link to="/" class="logo">
                TEST PROJECT
            </nuxt-link>
            <div class="nav-btns">
                <div class="btns-log">
                    <div class="btns-log-in" v-if="!isLogedUser">
                        <button @click="logIn" class="">
                            Войти
                        </button>
                        <button @click="registration">
                            ЗАРЕГИСТРИРОВАТЬСЯ
                        </button>
                    </div>
                    <div class="btns-log-in" v-if="isLogedUser">
                        <button @click="logOut">
                            Выйти
                        </button>
                        <button>
                            ЛИЧНЫЙ КАБИНЕТ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isLogedUser() {
            return this.$store.getters['auth/isAuthenticated']
        }
    },
    methods: {
        logIn() {
            this.$store.dispatch('auth/loginForm')
        },
        registration() {
            this.$store.dispatch('reg/regForm')
        },
        async logOut() {
            await this.$store.dispatch('auth/LOGOUT_USER')
        },
    }
}
</script>

<style>
</style>